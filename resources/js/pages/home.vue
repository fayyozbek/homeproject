<template>
  <div>
    <b-jumbotron>
      <template #header>
        <div class="container">
          Task Solution Service
        </div>
      </template>

      <template #lead>
        <div class="container">
          <p>
            Here you can learn how to solve problems, starting from the simplest ones and progressing to complex mathematical problems.
          </p>
          <p>
            We will focus on the solution itself, occasionally adding theoretical notes.
          </p>
        </div>
      </template>

      <div class="container">
        <hr class="my-4">

        <p>
          Before you is a mathematics tutorial, starting from the basics, including many problems and fundamental theory.
        </p>

        <b-button variant="primary" :to="{ name: 'sections' }">
          Show sections
        </b-button>
      </div>
    </b-jumbotron>

    <div class="container">
      <b-card-group>
        <b-card title="Reduced Quadratic Equation">
          <b-card-text>
            Problem generator for "Reduced Quadratic Equation"
          </b-card-text>

          <b-button to="/tasks/1" variant="light">
            Go to
          </b-button>
        </b-card>

        <b-card title="Unreduced Quadratic Equation">
          <b-card-text>
            Problem generator for "Unreduced Quadratic Equation"
          </b-card-text>

          <b-button to="/tasks/2" variant="light">
            Go to
          </b-button>
        </b-card>

        <b-card title=" Brackets Quadratic Equation">
          <b-card-text>
            Problem generator for " Brackets Quadratic Equation"
          </b-card-text>

          <b-button to="/tasks/3" variant="light">
            Go to
          </b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
