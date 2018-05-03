<template>

  <div id="container">

      <div v-for="question in questions" v-bind:key='question.id'>
        <p>{{question.text}}</p>
        <input type="range" id="sliderOne" name="slider1" min=0 max=10 v-model='question.value' >
        <div class="score" id="ratingOne">{{question.value}}</div>
        <p>{{question.cobitCode}}</p>
      </div>
      <button @click='calculate'>submit</button>
  </div>

</template>

<script>
export default {
  name: 'Sliders',

  data () {
    return {
      questions: [
        {
          id: 0,
          text: "I am currently using a business intelligence platform which almost perfectly fits the needs of my organization.",
          value: 5,
          cobitCode: 'itrg06',
        },
        {
          id: 1,
          text: `Providing a flexible environment for delivering data to business users is critical to a company’s business strategy.`,
          value: 5,
          cobitCode: 'itrg06',
        },
        {
          id:2,
          text: "My IT department fails to take a systemic approach to building a portfolio of applications that will support our customers’ experiences.",
          value:5,
          cobitCode: 'customerX',
        },
        {
          id:3,
          text: "We effectively gather business metrics across marketing, sales, and service, including customer acquisition, retention, and satisfaction metrics.",
          value:5,
          cobitCode: 'customerX',
        }
      ]
    }

  },

  methods: {
    calculate () {
      console.log('hi there')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
