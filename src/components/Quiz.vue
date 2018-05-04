<template>
  <div>
  <div id="container" v-bind:class="backgroundClass">
    <quiz-title  v-if='titleScreen'/>
    <button @click='startQuiz' v-if='titleScreen'>Get Started</button>
    <div v-if='!titleScreen'>

      <!-- The Quiz -->
      <div v-if="!calced" class="bg">
        <div>
          <h1>How closely do you agree with the following? </h1>
          <div v-for="question in sectionedQuestions" v-bind:key='question.id' class="quiz-copy-container">
            <p class="quiz-copy">{{question.text}}</p>
            <div>
              <input type="range" class="coloredSlider" name="slider1" min=0 max=10 v-model='question.value' />
              <span class="score" id="ratingOne">{{question.value}}</span>
            </div>
            <br />
          </div>
          <button @click='resetPage'>Reset</button> |
          <button @click='nextQuizQuestions()' v-if='quizSection!==2' >Next</button>
          <button @click='calculate()' v-if='quizSection===2'>submit</button>

        </div>
      </div>

      <!-- Quiz Results -->
      <div class="company-info-container" v-if='strongestItem'>
        <img v-bind:src="strongestItem.logo" />

        <p class="info-copy">{{strongestItem.blurb}}</p>
        <!-- Copy Marker -->
        <div class="markers">
          <div class="copy-marker-filled"></div>
          <div class="copy-marker-empty"></div>
        </div>

        <div class="top-line-header">
          <span></span>
          <h2 class="title-top">{{strongestItem.company_name}} {{strongestItem.date}}  (iPhone launch)</h2>
        </div>

        <div class="title-container">
          <h1 class="title-header">{{strongestItem.name}}</h1>
          <h1 class="title-header amazon-color" v-bind:class="strongestItem.color">{{strongestItem.name2}}</h1>
        </div>

         <div class="result-copy-container">
          <p class="result-copy">Your organisation is satisfied with its IT services, and everyone looks to IT to solve business problems and drive the enterprise forward.</p>
        </div>

        <div class="blueprint">
          <a :href="strongestItem.link">Click Here for More Info</a></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import amazonLogo from "../assets/companyLogos/amazon.svg";
// eslint-disable-next-line
import appleLogo from "../assets/companyLogos/apple.svg";
// eslint-disable-next-line
import asanaLogo from "../assets/companyLogos/asana.svg";
// eslint-disable-next-line
import cloudflareLogo from "../assets/companyLogos/cloudflare.svg";
// eslint-disable-next-line
import facebookLogo from "../assets/companyLogos/facebook.svg";
// eslint-disable-next-line
import ibmLogo from "../assets/companyLogos/ibm.svg";
// eslint-disable-next-line
import millerLogo from "../assets/companyLogos/miller.svg";
// eslint-disable-next-line
import netflixLogo from "../assets/companyLogos/netflix.svg";
// eslint-disable-next-line
import nordstromLogo from "../assets/companyLogos/nordstrom.svg";
// eslint-disable-next-line
import salesforceLogo from "../assets/companyLogos/salesforce.svg";
// eslint-disable-next-line
import tylenolLogo from "../assets/companyLogos/tylenol.svg";
// eslint-disable-next-line
import walmartLogo from "../assets/companyLogos/walmart.svg";
import QuizTitle from "./QuizTitle.vue";
export default {
  name: "Quiz",
  components: { QuizTitle },
  data() {
    return {
      questions: [
        {
          id: 0,
          text:
            "I am currently using a business intelligence platform which almost perfectly fits the needs of my organization.",
          value: 5,
          cobitCode: "itrg06"
        },
        {
          id: 1,
          text: `Providing a flexible environment for delivering data to business users is critical to a company’s business strategy.`,
          value: 5,
          cobitCode: "itrg06"
        },
        {
          id: 2,
          text:
            "My IT department fails to take a systemic approach to building a portfolio of applications that will support our customers’ experiences.",
          value: 5,
          cobitCode: "customerX"
        },
        {
          id: 3,
          text:
            "We effectively gather business metrics across marketing, sales, and service, including customer acquisition, retention, and satisfaction metrics.",
          value: 5,
          cobitCode: "customerX"
        },
        {
          id: 4,
          text:
            "You have the necessary tools to protect your assets in your company",
          value: 5,
          cobitCode: "dss05"
        },
        {
          id: 5,
          text:
            "Your security team knows exactly which compliance requirements apply to your organization and if they're being met.",
          value: 5,
          cobitCode: "dss05"
        },
        {
          id: 6,
          text:
            "My company is  unafraid of completely cutting services if if we believe they should not have been delivered in the first place.",
          value: 5,
          cobitCode: "edm04"
        },
        {
          id: 7,
          text:
            "Cost-cutting initiatives at my organization provide cost savings on or before the agreed upon timeline.",
          value: 5,
          cobitCode: "edm04"
        },
        {
          id: 8,
          text:
            "We have an Enterprise architecture department, and it has clear goals for which areas to improve and how to yield the greatest benefit to our organization.",
          value: 5,
          cobitCode: "apo03"
        },
        {
          id: 9,
          text:
            "The true indicator of enterprise architecture maturity, is value realized by the organization.",
          value: 5,
          cobitCode: "apo03"
        },
        {
          id: 10,
          text:
            "My company’s IT system owners resist change management because they see it as slow and bureaucratic.",
          value: 5,
          cobitCode: "bai06"
        },
        {
          id: 11,
          text:
            "My organization often sees infrastructure changes as “different” from application changes.",
          value: 5,
          cobitCode: "bai06"
        },
        {
          id: 12,
          text: "Our IT Department has a high turnover rate.",
          value: 5,
          cobitCode: "itrg02"
        },
        {
          id: 13,
          text: 'IT leadership needs to take accountability for the retention and productivity of their employees in order to drive business value.',
          value: 5,
          cobitCode: 'itrg02'
        },
        {
          id: 14,
          text: 'Your organisation is satisfied with its IT services, and everyone looks to IT to solve business problems and drive the enterprise forward.',
          value: 5,
          cobitCode: 'apo04'
        },
        {
          id: 15,
          text: 'Innovative ideas from your IT department are often communicated/evangelised across the company and then actioned.',
          value: 5,
          cobitCode: 'apo04'
        },
        {
          id: 16,
          text: 'Our organisation has recently undergone a successful organizational redesign. One that incorporated my IT Department.',
          value: 5,
          cobitCode: 'itrg01'
        },
        {
          id: 17,
          text: 'My organisation has managed to stay at the forefront of our industry despite external competitive influences and changing technological trends.',
          value: 5,
          cobitCode: 'itrg01'
        },
        {
          id: 18,
          text: 'My organisation tackles risk head-on.',
          value: 5,
          cobitCode: 'edm03'
        },
        {
          id: 19,
          text: 'We have a structured, robust system to help us identify risks.',
          value: 5,
          cobitCode: 'edm03'
        },
        {
          id: 20,
          text: 'IT and your business are aligned.',
          value: 5,
          cobitCode: 'edm02'
        },
        {
          id: 21,
          text: 'We make decisions based on the shared company perspective of value.',
          value: 5,
          cobitCode: 'edm02'
        },
        {
          id: 22,
          text: 'Traditional Disaster Recovery Plan (DRP) templates are onerous and result in a lengthy, dense plan that might satisfy auditors but is not effective in a crisis.',
          value: 5,
          cobitCode: 'dss04'
        },
        {
          id: 23,
          text: 'The increased use of cloud vendors and co-lo/MSPs means you may be dependent on vendors to meet your recovery timeline objectives.',
          value: 5,
          cobitCode: 'dss04'
        }
      ],
      cobitItems: [
        {
          code: "itrg06",
          name: "Business Intelligence",
          name2: "and Reporting",
          blurb:
            "But Miller first needed a better product. The company inadvertently found one in 1972, when it acquired something called Meister Brau Lite. The regional lower-calorie beer was popular in one place: Anderson, Ind. Steve Norcia, who headed the Miller account for McCann-Erickson, spent a week there trying to figure out why.",
          company_name: "Miller",
          date: "1974",
          link:
            "https://www.infotech.com/research/ss/build-a-next-generation-bi-with-a-game-changing-bi-strategy",
          value: 5,
          logo: millerLogo,
          color: 'miller-color'
        },
        {
          code: "edm04",
          name: "Cost",
          name2: 'Optimization',
          blurb:
            "So much for the idea that Walmart (NYSE: WMT) is a boring stock. Shares gained over 40% in 2017 as the retailer added $80 billion to its market capitalization and trounced the broader market. That rally looks even more impressive when judged against industry peers. Target shed 9% in 2017; Kroger shareholders endured a 20% slump; and Walmart roughly doubled Costco's return for the year.",
          company_name: "Walmart",
          date: "2017",
          linke:
            "https://www.infotech.com/research/ss/minimize-the-damage-of-it-cost-cuts",
          value: 5,
          logo: walmartLogo,
          color: 'walmart-color'
        },
        {
          code: "bai06",
          name: "Change",
          name2: 'Management',
          blurb:
            "Netflix's initial business model included DVD sales and rental, although Hastings jettisoned DVD sales about a year after Netflix's founding to focus on the DVD rental by mail business.[9][10] In 2007, Netflix expanded its business with the introduction of streaming media, while retaining the DVD and Blu-ray rental service.",
          company_name: "Netflix",
          date: "2007",
          linke:
            "https://www.infotech.com/research/ss/optimize-change-management",
          value: 5,
          logo: netflixLogo,
          color: 'netflix-color'
        },
        {
          code: "itrg02",
          name: "Corporate",
          name2: 'Culture',
          blurb:
            "The company is built on the idea that mindfulness, clear communication, and compassion are all critical to long-term success. Asana has become known for its radically inclusive, positive work environment.  This approach has paid off. Asana received a rare perfect rating on Glassdoor and a spot on Glassdoor’s Top 10 Best Places to Work in 2017. The company was also named one of Entrepreneur magazine’s best workplace cultures of 2017.",
          company_name: "Asana",
          date: "2017",
          link:
            "https://www.infotech.com/research/ss/improve-employee-engagement-to-drive-it-performance",
          value: 5,
          logo: asanaLogo,
          color: 'asana-color'
        },
        {
          code: "customerX",
          name: "Customer",
          name2: 'Experience',
          blurb:
            "In 1975 a man pulled up to a store with four snow tires in the bed of his truck. He had bought the tires at this location several weeks ago and needed to return them. Unbeknownst to him, the tire shop had closed, and Nordstrom had moved in. Long story short, after explaining his situation to a sales clerk, Nordstrom allowed him to return the tires and refunded his money.",
          company_name: "Nordstrom",
          date: "1975",
          link:
            "https://www.infotech.com/research/ss/build-a-strong-technology-foundation-for-customer-experience-management",
          value: 5,
          logo: nordstromLogo,
          color: 'nordstrom-color'
        },
        {
          code: "apo03",
          name: "Enterprise",
          name2: 'Architecture',
          blurb:
            "It’s been exactly five years to the day since Facebook announced one of the best business acquisitions in the history of Silicon Valley: The $1 billion purchase of a photo-sharing app called Instagram. At the time of the acquisition, Instagram had just 30 million users and zero revenue.  Now, Instagram has more than 600 million users, and many analysts believe it will soon be a multi-billion dollar ad business — if it’s not already.",
          company_name: "Facebook",
          date: "2012",
          link:
            "https://www.infotech.com/research/ss/assess-your-enterprise-architecture-maturity",
          value: 5,
          logo: facebookLogo,
          color: 'facebook-color'
        },
        {
          code: 'apo04',
          name: 'Innovation',
          name2: '',
          blurb: "11 years ago today, Steve Jobs introduced the iPhone.  Eleven years ago today Steve Jobs announced a wide-screen iPod with touch controls, a revolutionary mobile phone, and a breakthrough internet device. But it wasn't three products. It was one product. And we got it, Steve. We got iPhone.",
          company_name: 'Apple',
          date: '2007',
          link: 'https://www.infotech.com/research/ss/prototype-with-an-innovation-design-sprint',
          value: 5,
          logo: appleLogo,
          color: 'apple-color'
        },
        {
          code: 'itrg01',
          name: 'IT Organizational',
          name2: 'Design',
          blurb: "Well, the first big thing Bezos realized is that the infrastructure they'd built for selling and shipping books and sundry could be transformed an excellent repurposable computing platform.",
          company_name: 'Amazon',
          date: '2007',
          link: 'https://www.infotech.com/research/ss/redesign-your-it-organizational-structure',
          value: 5,
          logo: amazonLogo,
          color: 'amazon-color'
        },
        {
          code: 'edm03',
          name: 'Risk',
          name2: 'Management',
          blurb: "The IBM Personal Computer, commonly known as the IBM PC, is the original version and progenitor of the IBM PC compatible hardware platform. It is IBM model number 5150, and was introduced on August 12, 1981. It was created by a team of engineers and designers under the direction of Don Estridge of the IBM Entry Systems Division in Boca Raton, Florida.",
          company_name: 'IBM',
          date: '2007',
          link: 'https://www.infotech.com/research/ss/build-a-business-driven-it-risk-management-program',
          value: 5,
          logo: ibmLogo,
          color: 'ibm-color'
        },
        {
          code: 'dss05',
          name: 'Security',
          name2: 'Management',
          blurb: "On Monday, March 18, 2013 Spamhaus contacted CloudFlare regarding an attack they were seeing against their website spamhaus.org. They signed up for CloudFlare and we quickly mitigated the attack. The attack, initially, was approximately 10Gbps generated largely from open DNS recursors. On March 19, the attack increased in size, peaking at approximately 90Gbps. The attack fluctuated between 90Gbps and 30Gbps until 01:15 UTC on on March 21.",
          company_name: 'CloudFlare',
          date: '2013',
          link: 'https://www.infotech.com/research/ss/build-a-security-governance-and-management-plan',
          value: 5,
          logo: cloudflareLogo,
          color: 'cloudflare-color'
        },
        {
          code: 'edm02',
          name: 'Business',
          name2: 'Value',
          blurb: "In October 2014, Salesforce announced the development of its Customer Success Platform to tie together Salesforce's services, including sales, service, marketing, analytics, community, and mobile apps.[9]In October 2017, Salesforce would be launching Facebook Analytics tool for B2B marketers",
          company_name: 'Salesforce',
          date: '2014',
          link: 'https://www.infotech.com/research/ss/maximize-business-value-from-it-through-benefits-realization',
          value: 5,
          logo: salesforceLogo,
          color: 'salesforce-color'
        },
        {
          code: 'dss04',
          name: 'Disaster',
          name2: 'Recovery',
          blurb: "The murders started in September 1982, when the parents of Mary Kellerman gave the 12-year-old a painkiller when she woke up complaining of a cold. She died hours later. Postal worker Adam Janus died in another Chicago suburb later that morning. Janus' brother and his brother's wife, complaining of headaches while mourning Adam, died too. In a few days the death toll grew — the only link being that each victim had taken Extra-Strength Tylenol.",
          company_name: 'Tylenol',
          date: '1982',
          link: 'https://www.infotech.com/research/ss/create-a-right-sized-disaster-recovery-plan',
          value: 5,
          logo: tylenolLogo,
          color: 'tylenol-color'
        }
      ],
      calced: false,
      quizSection: 0,
      titleScreen: true
    };
  },
  methods: {
    calculate() {
      const questions = this.questions;
      this.calced = true;
      this.cobitItems.map(function(item) {
        const filteredQuestions = questions.filter(function(question) {
          return question.cobitCode == item.code;
        });
        const values = filteredQuestions.map(function(q) {
          return Number(q.value);
        }) || [0];
        item.value = values.reduce(function(acc, val) {
          return acc + val;
        });
      });
      this.cobitItems.sort((a, b) => b.value - a.value);
    },
    nextQuizQuestions() {
      ++this.quizSection;
    },
    startQuiz() {
      this.titleScreen = false;
    },
    resetPage() {
      this.quizSection = 0
      this.titleScreen = true
      this.calced = false
    }
  },
  computed: {
    strongestItem: function() {
      return this.calced ? this.cobitItems[0] : null;
    },
    backgroundClass: function() {
      return this.calced ? this.strongestItem.company_name.toLowerCase() : '';
    },
    sectionedQuestions: function() {
      let section = this.quizSection;
      if(section<=2) {
        return this.questions.slice((section * 8), 8 + (section * 8) )
      }
    }
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "assets"
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

body {
	font-family: Arial, Helvetica, sans-serif;
}

.get-started {
  float: right;
}

// Quiz Questions
.bg {
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjQ0cHgiIGhlaWdodD0iNzY4cHgiIHZpZXdCb3g9IjAgMCA2NDQgNzY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YmcgY29weSA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2MC44NjU0MDQlIiB5MT0iLTM3LjUyNTg3ODklIiB4Mj0iNjAuODY1NDAyMyUiIHkyPSI5OC41NjEyNTc2JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjlGOUY5IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBRkFGQUYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjExOTk5OTk5NyI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkLUNvcHktNSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJiZy1jb3B5LTUiIHBvaW50cz0iLTE1MC40MTQwNjIgMCA2NDMuMjAzMTI1IDAgNTEgNzY4IC0xNTQuNzI2NTYyIDc2OCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+") no-repeat;
}
.quiz-copy-container {
  padding-left: 25px;
  .quiz-copy {
    font-family: Exo-DemiBold;
    font-size: 20px;
    color: #888888;
    line-height: 27px;
    width: 80%;
  }
}
.coloredSlider {
	float: left;
	clear: both;
  width: 600px;
	margin: 15px;
}
.coloredSlider .ui-slider-range {
	background: #ff0000;
}
.coloredSlider .ui-state-default, .ui-widget-content .ui-state-default {
	background: none;
	background-color: #FFF;
}

// Quiz Results
.top-line-header {
  clear: both;
  span {
    background: #373636;
    width: 40px;
    height: 2px;
    margin-right: 20px;
    display: inline-block;
    position: relative;
    top: -5px;
  }

  .title-top {
    font-family: Exo-DemiBold;
    font-size: 18px;
    color: #373636;
    display: inline-block;
  }
}
.copy-marker-filled {
  width: 9px;
  height: 9px;
  background: #7d7d7d;
  border: 1px solid #979797;
  display: inline-block;
}
.copy-marker-empty {
  width: 9px;
  height: 9px;
  background: #d8d8d8;
  border: 1px solid #979797;
  display: inline-block;
}
.markers {
  float: left;
  clear: left;
  position: relative;
  left: 126px;
  top: -30px;
}
.info-copy {
  font-family: Exo-Italic;
  font-size: 12px;
  width: 18%;
  height: auto;
  color: #888888;
  padding-left: 20px;
  line-height: 20px;
  float: left;
  margin-left: 20px;
  border-left: 1px solid #979797;
  padding-bottom: 21px;
}
.company-logo {
  display: inline-block;
  float: left;
  margin-left: 20px;
  position: relative;
  top: 20px;
}
.title-container {
  margin-top: 10px;
  .title-header {
    font-family: Montserrat;
    font-size: 100px;
    color: #373636;
    line-height: 86px;
    margin: 10px 0 0;
  }

  .amazon-color {
    color: #F6A61F;
    line-height: 92px;
  }
  .apple-color {
    color: #373636;
    line-height: 92px;
  }
  .asana-color {
    color: #ff4422;
    line-height: 92px;
  }
  .cloudflare-color {
    color: #223388;
    line-height: 92px;
  }
  .facebook-color {
    color: #0000ff;
    line-height: 92px;
  }
  .ibm-color {
    color: #00ffff;
    line-height: 92px;
  }
  .miller-color {
    color: #00cc88;
    line-height: 92px;
  }
  .netflix-color {
    color: #D81F26;
    line-height: 92px;
  }
  .nordstrom-color {
    color: #cc5588;
    line-height: 92px;
  }
  .salesforce-color{
    color: #00ffff;
    line-height: 92px;
  }
  .tylenol-color {
    color: #55ff55;
    line-height: 92px;
  }
  .walmart-color {
    color: #55ff55;
    line-height: 92px;
  }
}
.result-copy-container {
  .result-copy {
    font-family: Exo-DemiBold;
    font-size: 20px;
    color: #888888;
    line-height: 27px;
    width: 50%;
  }
}

// Company specific
.amazon {
  background: url('../assets/companyBgs/amazon.jpg');
}
.apple {
  background: url('../assets/companyBgs/apple.jpg');
}
.asana {
  background: url('../assets/companyBgs/apple.jpg');
}
.cloudflare {
  background: url('../assets/companyBgs/apple.jpg');
}
.facebook {
  background: url('../assets/companyBgs/apple.jpg');
  object-fit: cover;
}
.ibm {
  background: url('../assets/companyBgs/amazon.jpg');
}
.miller {
  background: url('../assets/companyBgs/amazon.jpg');
}
.netflix {
  background: url('../assets/companyBgs/netflix.jpg');
}
.nordstrom {
  background: url('../assets/companyBgs/netflix.jpg');
}
.salesforce {
  background: url('../assets/companyBgs/netflix.jpg');
}
.walmart {
  background: url('../assets/companyBgs/netflix.jpg');
}

#container {
  min-height: 100;
  background-size:cover;
}
</style>
