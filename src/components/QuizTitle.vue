<template>
  <div class="title-container">
    <img class="nav-logo" src="//www.infotech.com/assets/logos/Info-Tech-Research-Group-logo-9f60c2aabd41ec5f65952641ee795ea5202bfa0b3009ab614d32518d4d3ba55f.svg">
    <h2>---- INFO-TECH RESEARCH GROUP</h2>
    <h1 class="title-header">IT PERSONALITY TEST</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <p style="float: right; display: block;">some more lorem ipsum</p>
  </div>
</template>

<script>
  export default {
    name: 'QuizTitle'
  }
</script>

<style scoped lang='scss'>
  .nav-logo {
    float: right;
    height: 50px;
  }
  .title-container {
  margin-top: 10px;
  .title-header {
    font-family: Montserrat;
    font-size: 100px;
    color: #373636;
    line-height: 46px;
    margin: 10px 0 0;
  }
  }

</style>