<template>

  <div id="container">
    <form>
      <h1>Please rate our service</h1>
      <hr>
      <div id="first">
        <label for="slider1">Efficiency</label>
        <input type="range" id="sliderOne" name="slider1" min=0 max=10 value=5>
        <div class="score" id="ratingOne">0</div>
      </div>

      <div id="second">
        <label for="slider2">Speed</label>
        <input type="range" id="sliderTwo" name="slider2" min=0 max=10 value=5>
        <div class="score" id="ratingTwo">0</div>
      </div>

      <div id="third">
        <label for="slider3">Reliability</label>
        <input type="range" id="sliderThree" name="slider3" min=0 max=10 value=5>
        <div class="score" id="ratingThree">0</div>
      </div>
      <input type="submit" value="Submit" action="">
    </form>
  </div>

</template>

<script>
export default {
  name: 'Sliders',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
