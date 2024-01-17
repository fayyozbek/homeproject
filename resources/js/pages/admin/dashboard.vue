<template>
  <div>
    <admin-title />

    <b-card-group deck>
      <b-card
        header="Users"
        bg-variant="success"
        text-variant="white"
        align="center"
      >
        <b-card-text>
          77
        </b-card-text>
      </b-card>
      <b-card
        header="Sections"
        bg-variant="secondary"
        text-variant="white"
        align="center"
      >
        <b-card-text>
          100
        </b-card-text>
      </b-card>
      <b-card
        header="Tasks"
        bg-variant="primary"
        text-variant="white"
        align="center"
      >
        <b-card-text>
          23
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import AdminTitle from '~/components/admin/Title'

export default {
  components: {
    AdminTitle
  },

  layout: 'admin',
  middleware: 'auth'
}
</script>
