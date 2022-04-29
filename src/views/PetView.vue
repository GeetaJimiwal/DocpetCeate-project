<template>
<div>
    <h1>{{ animal.name }}</h1>
    <p>{{ animal.age }}</p>
    <p>{{ animal.breed }}</p>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'CatView',
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dog'
    ])
  },
  methods: {
    mounted () {
      const animal = this[this.$route.params.species][this.$route.params.id]
      this.animal = animal
    }
  }
}
</script>
