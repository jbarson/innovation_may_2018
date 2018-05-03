<template>

  <div id="container">

      <div v-for="question in questions" v-bind:key='question.id'>
        <p>{{question.text}}</p>
        <input type="range" id="sliderOne" name="slider1" min=0 max=10 v-model='question.value' >
        <div class="score" id="ratingOne">{{question.value}}</div>
        <p>{{question.cobitCode}}</p>
      </div>
      <button @click='calculate(questions, strongestItem)'>submit</button>

      <div class="blurb" v-if=strongestItem.value>
        <h1>{{strongestItem.name}} ({{strongestItem.code}})</h1>
        <div>{{strongestItem.blurb}}</div>
        <a v-bind:href="strongestItem.link">Click Here for More Info</a>
      </div>

      <div>

      </div>
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
      ],
      cobitItems: [
        {
          code: 'itrg06',
          blurb: 'data and bi stuff is awesome',
          value: 5
        },
        {
          code: 'customerX',
          blurb: 'your cust ex skills are on point, yo',
          value: 5
        }
      ],
      calced: false 
    }

  },

  methods: {
    calculate (questions, strongestItem) {
      this.calced = true;
      var sorted = this.cobitItems.map(function(item){
        var filteredQuestions = questions.filter(function(question){return question.cobitCode == item.code;})
        var values = filteredQuestions.map(function(q){return Number(q.value)});
        item.value = values.reduce(function(acc, val) { return acc + val; });
      });
      this.cobitItems.sort((a, b) => b.value-a.value);
    }
  },
  computed: {
    strongestItem: function(){
      return this.calced?this.cobitItems[0]:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blurb {
  background-color: #eee;
  text-align: center
}

</style>
