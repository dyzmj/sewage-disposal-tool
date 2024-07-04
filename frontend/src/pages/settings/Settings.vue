<template>
    <div class="container" style="border: 1px solid #ccc; padding: 50px; width: 100%; height: 800px">
      <!-- <h1>{{$t('content')}}</h1> -->
      <img src="./wio.svg" />
    </div>
  </template>
  
  <script>
    import {mapState} from 'vuex'
    export default {
      name: 'Demo',
      i18n: require('./i18n'),
      data() {
        return {
        }
      },
      computed: {
        ...mapState('setting', ['pageMinHeight']),
        desc() {
          return this.$t('description')
        }
      }
    }
  </script>
  
  <style scoped>
    .container {
      background-color: gray;
    }
</style>