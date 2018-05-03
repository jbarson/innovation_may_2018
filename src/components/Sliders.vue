<template>

  <div id="container">

      <div v-for="question in questions" v-bind:key='question.id'>
        <p>({{question.cobitCode}}) {{question.text}}</p>
        <input type="range" id="sliderOne" name="slider1" min=0 max=10 v-model='question.value' >
        <span class="score" id="ratingOne">{{question.value}}</span>
      </div>

      <button @click='calculate(questions, cobitItems)'>submit</button>

      <div class="blurb" v-if='strongestItem'>
        <h1>{{strongestItem.name}} ({{strongestItem.code}})</h1>
        <div>
          <h2>{{strongestItem.company_name}} -- {{strongestItem.date}} </h2>
          <div>{{strongestItem.blurb}}</div>
        </div>
        <div class="blueprint"><a v-bind:href="strongestItem.link">Click Here for More Info</a></div>

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
        },
        {
          id:4,
          text: "You have the necessary tools to protect your assets in your company",
          value:5,
          cobitCode: 'dss05',
        },
        {
          id:5,
          text: "Your security team knows exactly which compliance requirements apply to your organization and if they're being met.",
          value:5,
          cobitCode: 'dss05',
        },
        {
          id: 6,
          text: 'My company is  unafraid of completely cutting services if if we believe they should not have been delivered in the first place.',
          value: 5,
          cobitCode: 'edm04'
        },
        {
          id: 7,
          text: 'Cost-cutting initiatives at my organization provide cost savings on or before the agreed upon timeline.',
          value: 5,
          cobitCode: 'edm04'
        },
        {
          id: 8,
          text: 'We have an Enterprise architecture department, and it has clear goals for which areas to improve and how to yield the greatest benefit to our organization.',
          value: 5,
          cobitCode: 'apo03'
        },
        {
          id: 9,
          text: 'The true indicator of enterprise architecture maturity, is value realized by the organization.',
          value: 5,
          cobitCode: 'apo03'
        },
        {
          id: 10,
          text: 'My company’s IT system owners resist change management because they see it as slow and bureaucratic.',
          value: 5,
          cobitCode: 'bai06'
        },
        {
          id: 11,
          text: 'My organization often sees infrastructure changes as “different” from application changes.',
          value: 5,
          cobitCode: 'bai06'
        },
        {
          id: 12,
          text: 'Our IT Department has a high turnover rate.',
          value: 5,
          cobitCode: 'itrg02'
        },
        {
          id: 13,
          text: 'IT leadership needs to take accountability for the retention and productivity of their employees in order to drive business value.s',
          value: 5,
          cobitCode: 'itrg02'
        }
      ],
      cobitItems: [
        {
          code: 'itrg06',
          name: 'Business Intelligence and Reporting',
          blurb: 'But Miller first needed a better product. The company inadvertently found one in 1972, when it acquired something called Meister Brau Lite. The regional lower-calorie beer was popular in one place: Anderson, Ind. Steve Norcia, who headed the Miller account for McCann-Erickson, spent a week there trying to figure out why.',
          company_name: 'Miller',
          date: '1974',
          link: 'https://www.infotech.com/research/ss/build-a-next-generation-bi-with-a-game-changing-bi-strategy',
          value: 5
        },
        {
          code: 'edm04',
          name: 'Cost Optimization',
          blurb: "So much for the idea that Walmart (NYSE: WMT) is a boring stock. Shares gained over 40% in 2017 as the retailer added $80 billion to its market capitalization and trounced the broader market. That rally looks even more impressive when judged against industry peers. Target shed 9% in 2017; Kroger shareholders endured a 20% slump; and Walmart roughly doubled Costco's return for the year.",
          company_name: 'Walmart',
          date: '2017',
          linke: 'https://www.infotech.com/research/ss/minimize-the-damage-of-it-cost-cuts',
          value: 5
        },
        {
          code: 'bai06',
          name: 'Change Management',
          blurb: "Netflix's initial business model included DVD sales and rental, although Hastings jettisoned DVD sales about a year after Netflix's founding to focus on the DVD rental by mail business.[9][10] In 2007, Netflix expanded its business with the introduction of streaming media, while retaining the DVD and Blu-ray rental service.",
          company_name: 'Netflix',
          date: '2007',
          linke: 'https://www.infotech.com/research/ss/optimize-change-management',
          value: 5
        },
        {
          code: 'itrg02',
          name: 'Corporate Culture',
          blurb: "The company is built on the idea that mindfulness, clear communication, and compassion are all critical to long-term success. Asana has become known for its radically inclusive, positive work environment.  This approach has paid off. Asana received a rare perfect rating on Glassdoor and a spot on Glassdoor’s Top 10 Best Places to Work in 2017. The company was also named one of Entrepreneur magazine’s best workplace cultures of 2017.",
          company_name: 'Asana',
          date: '2017',
          link: 'https://www.infotech.com/research/ss/improve-employee-engagement-to-drive-it-performance',
          value: 5
        },
        {
          code: 'customerX',
          name: 'Customer Experience',
          blurb: "In 1975 a man pulled up to a store with four snow tires in the bed of his truck. He had bought the tires at this location several weeks ago and needed to return them. Unbeknownst to him, the tire shop had closed, and Nordstrom had moved in. Long story short, after explaining his situation to a sales clerk, Nordstrom allowed him to return the tires and refunded his money.",
          company_name: 'Nordstrom',
          date: '1975',
          link: 'https://www.infotech.com/research/ss/build-a-strong-technology-foundation-for-customer-experience-management',
          value: 5
        },
        {
          code: 'apo03',
          name: 'Enterprise Architecture',
          blurb: "It’s been exactly five years to the day since Facebook announced one of the best business acquisitions in the history of Silicon Valley: The $1 billion purchase of a photo-sharing app called Instagram. At the time of the acquisition, Instagram had just 30 million users and zero revenue.  Now, Instagram has more than 600 million users, and many analysts believe it will soon be a multi-billion dollar ad business — if it’s not already.",
          company_name: 'Facebook',
          date: '2012',
          link: 'https://www.infotech.com/research/ss/assess-your-enterprise-architecture-maturity',
          value: 5
        },
        {
          code: 'dss05',
          name: 'Security Management',
          blurb: "On Monday, March 18, 2013 Spamhaus contacted CloudFlare regarding an attack they were seeing against their website spamhaus.org. They signed up for CloudFlare and we quickly mitigated the attack. The attack, initially, was approximately 10Gbps generated largely from open DNS recursors. On March 19, the attack increased in size, peaking at approximately 90Gbps. The attack fluctuated between 90Gbps and 30Gbps until 01:15 UTC on on March 21.",
          company_name: 'CloudFlare',
          date: '2013',
          link: 'https://www.infotech.com/research/ss/build-a-security-governance-and-management-plan',
          value: 5
        }
      ],
      calced: false
    }

  },

  methods: {
    calculate (questions, cobitItems) {
      this.calced = true
      this.cobitItems.map(function(item){
        var filteredQuestions = questions.filter(function(question){return question.cobitCode == item.code;})
        var values = filteredQuestions.map(function(q){return Number(q.value)}) || [0];
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
  text-align: center;
  margin: 50px 0 50px 0;
  padding: 25px;
}
.blueprint {
  padding: 30px;
}

</style>
