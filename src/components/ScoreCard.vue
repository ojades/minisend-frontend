<template>
  <figure class="figure score-card">
    <h1 :style="{color: Color}">{{ value }}</h1>
    <figcaption class="figure-caption text-right">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "ScoreCard",
  props: {
    value: [String, Number],
    caption: [String],
    Color: [String]
  },
  data() {
    return {
      metrics: []
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.score-card {
  width: 100%;
  border-right: 1px solid #cccccc;
  padding: 10px 10px 0 10px;
}
h1 {

}
</style>