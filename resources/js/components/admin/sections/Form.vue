<template>
  <admin-form endpoint="/api/admin/sections"
              route-name="admin.sections"
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
      <b-form-group :label="'Parent'"
                    label-for="parent_id"
      >
        <b-form-select
          id="parent_id"
          v-model="form.parent_id"
          :options="options"
        >
          <template #first>
            <b-form-select-option :value="null">
              -- Root --
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
      parent_id: null
    },
    options: []
  }),

  async mounted () {
    try {
      const { data } = await axios.get('/api/admin/sections/tree', {
        params: {
          except: this.$route.params.id
        }
      })

      this.options = data.data
    } catch (e) {
      // TODO: Handle error
    }
  }
}
</script>
