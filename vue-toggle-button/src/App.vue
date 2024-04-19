<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ToggleButton />
</template>

<script>
import ToggleButton from './components/ToggleButton.vue'

export default {
  name: 'App',
  components: {
    ToggleButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: #d9d9d9;
  margin-top: 60px;
}
</style>
