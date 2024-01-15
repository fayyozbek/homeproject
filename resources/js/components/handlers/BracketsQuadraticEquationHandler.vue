<template>
  <div class="form-inline">
    <b-form-group class="mr-3">
      <b-form-input
        v-model="answers.x1"
        type="text"
        placeholder="enter x1"
        required
      />
    </b-form-group>

    <b-form-group>
      <b-form-input
        v-model="answers.x2"
        type="text"
        placeholder="enter x2"
        required
      />
    </b-form-group>
  </div>
</template>

<script>
import HandlerMixin from './HandlerMixin'

export default {
  name: 'BracketsQuadraticEquationHandler',
  mixins: [
    HandlerMixin
  ]
}
</script>
