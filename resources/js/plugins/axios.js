import axios from 'axios';
import store from '~/store';
import router from '~/router';
import Swal from 'sweetalert2';
import i18n from '~/plugins/i18n';

// Перехватчик запросов
axios.interceptors.request.use(request => {
  // Гарантируем, что объект headers инициализирован
  request.headers = request.headers || {};

  const token = store.getters['auth/token'];
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  const locale = store.getters['lang/locale'];
  if (locale) {
    request.headers['Accept-Language'] = locale;
  }

  // request.headers['X-Socket-Id'] = Echo.socketId();

  return request;
});

// Перехватчик ответов
axios.interceptors.response.use(response => response, error => {
  if (!error.response) {
    // Ошибка сети, обработайте ее соответственно
    console.error('Ошибка сети:', error);
    // Можете показать пользовательское сообщение или выполнить другие действия
    return Promise.reject(error);
  }

  const { status } = error.response;

  if (status >= 500) {
    Swal.fire({
      icon: 'error',
      title: i18n.t('error_alert_title'),
      text: i18n.t('error_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel'),
    });
  }

  if (status === 401 && store.getters['auth/check']) {
    Swal.fire({
      icon: 'warning',
      title: i18n.t('token_expired_alert_title'),
      text: i18n.t('token_expired_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel'),
    }).then(() => {
      store.commit('auth/LOGOUT');
      router.push({ name: 'login' });
    });
  }

  return Promise.reject(error);
});
