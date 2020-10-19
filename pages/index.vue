<template>
  <div class="wrapper w-full h-full flex justify-center items-center flex-col">
    <h1 class="text-6xl font-bold tracking-widest py-4">
      <img src="../static/images/logo-light.png" width="200px">
    </h1>
    <h5 class="text-2xl tracking-wide">
      TWO FEET LONG GAMING PLATFORM
    </h5>
    <div style="height: 20px" />
    <div>
      <input
        v-model="email"
        class="p-2 border email"
        placeholder="Email Address"
      >
      <span @click="signUp">
        <ForBeta />
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    signUp () {
      const url = `https://ci6g2hzboc.execute-api.ap-south-1.amazonaws.com/v1/beta/${this.email}`

      axios
        .post(url)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.email {
  width: 350px;
}
</style>
