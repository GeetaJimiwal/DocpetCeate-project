<template>
    <div>
      <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dog"></b-table>
    </div>
</template>

<script>
import dog from '@/data/dog.js'
export default {
  name: 'DogsView',
  data () {
    return {
      dog
    }
  }
}
</script>
