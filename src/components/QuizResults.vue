<template>
  <div>
    <div class="company-info-container" v-if="strongestItem">
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
</template>

<script>
// eslint-disable-next-line
import amazonLogo from "../assets/companyLogos/amazon.svg";
// eslint-disable-next-line
import amexLogo from "../assets/companyLogos/amex.svg";
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
import nokiaLogo from "../assets/companyLogos/nordstrom.svg";
// eslint-disable-next-line
import nordstromLogo from "../assets/companyLogos/nordstrom.svg";
// eslint-disable-next-line
import salesforceLogo from "../assets/companyLogos/salesforce.svg";
// eslint-disable-next-line
import tylenolLogo from "../assets/companyLogos/tylenol.svg";
// eslint-disable-next-line
import walmartLogo from "../assets/companyLogos/walmart.svg";
  export default {
    name: 'QuizResults',
    props: ['strongestItem', 'cobitItems']
  }
</script>

<style scoped>

</style>