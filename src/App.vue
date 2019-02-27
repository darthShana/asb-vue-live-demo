<template>
  <div id="app">
    <CandidateList></CandidateList>
  </div>
</template>

<script>
import CandidateList from './components/CandidateList.vue'

export default {
  name: 'app',
  components: {
    CandidateList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
