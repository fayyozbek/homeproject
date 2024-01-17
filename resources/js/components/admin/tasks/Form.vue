<template>
  <admin-form endpoint="/api/admin/tasks"
              route-name="admin.tasks"
              :form="defaultForm"
              :is-creating="isCreating"
  >
    <template #default="{ form }">
      <b-form-group :label="$t('is_active')"
                    label-for="is_active"
      >
        <b-form-checkbox id="is_active"
                         v-model="form.is_active"
                         size="lg"
                         switch
        />
      </b-form-group>
      <b-form-group :label="'Order'"
                    label-for="order"
      >
        <b-form-input id="order"
                      v-model="form.order"
                      type="number"
        />
      </b-form-group>
      <b-form-group :label="'Section'"
                    label-for="section_id"
      >
        <b-form-select
          id="section_id"
          v-model="form.section_id"
          :options="sections"
          required
        >
          <template #first>
            <b-form-select-option :value="null" disabled>
              -- Select section --
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
      <b-form-group :label="'Handler'"
                    label-for="task_handler_id"
      >
        <b-form-select
          id="task_handler_id"
          v-model="form.task_handler_id"
          :options="handlers"
          required
        >
          <template #first>
            <b-form-select-option :value="null" disabled>
              -- Select handler --
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
      <b-form-group :label="'Title'"
                    label-for="title"
      >
        <b-form-input id="title"
                      v-model="form.title"
                      :placeholder="'Title'"
                      required
        />
      </b-form-group>
      <b-form-group :label="'Description'"
                    label-for="description"
      >
        <b-form-textarea id="description"
                         v-model="form.description"
                         :placeholder="'Description'"
        />
      </b-form-group>
      <b-form-group>
        <vue-mathjax :formula="form.description" class="d-block formula" />
      </b-form-group>
    </template>
  </admin-form>
</template>

<script>
import AdminForm from '~/components/admin/Form'
import axios from 'axios'

export default {
  components: {
    AdminForm
  },

  props: {
    isCreating: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    defaultForm: {
      is_active: true,
      order: 500,
      section_id: null,
      task_handler_id: null
    },
    sections: [],
    handlers: []
  }),

  async mounted () {
    try {
      const { data } = await axios.get('/api/admin/sections/tree')

      this.sections = data.data
    } catch (e) {
      console.log(e)
    }

    try {
      const { data } = await axios.get('/api/admin/tasks/handlers')

      this.handlers = data.data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
