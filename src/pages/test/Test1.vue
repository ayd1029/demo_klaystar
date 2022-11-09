<template>
  <q-page class="justify justify-center">
    <!-- <div style="background-color: black;"> -->
    <div class="" style="">
      <!-- <div class="row">
        <div class="text-h5 text-bold">
          Overview
        </div>
      </div> -->
      <!-- <div class="row" style="background-image: url(images/star1.jpg); height: 40rem;"> -->
      <div class="row">
        TEST 페이지
      </div>

      <div style="text-align: center; width: 100%;">
        <q-btn style="background: goldenrod; color: black; width: 250px;" size="xl" @click="goCreateToken" rounded>
          <b>{{ $t('create_token') }}</b>
        </q-btn>
      </div>
      <br />
      <br />
    </div>
  </q-page>

  <q-dialog v-model="msgBox">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="images/logo-128x128.png" style="width: 24px; height: 24px;" />
        </q-avatar>

        <q-toolbar-title>
          <span class="text-weight-bold">KLAYSTAR</span>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        {{ $t('under_construction')}}
      </q-card-section>
    </q-card>
  </q-dialog>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      filterType: 'now', // 랭킹타입 now, total
      msgBox: false,
    }
  },
  components: {
  },
  created: function () {
    // this.test()
  },
  mounted: function () {
  },
  methods: {
    // // 누적 랭킹 리스트 조회
    // test() {
    //   // this.$axios.get(this.$store.state.apiServerIp + '/api/rank/selectRewardRankList',
    //   this.$axios.get('/api/user/selectUser',
    //     {params: {uid: 1}})
    //     .then((result) => {
    //       console.log(JSON.stringify(result.data))
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       done()
    //     })
    // },
    // connect walleet
    goCreateToken() {
      this.msgBox = true

      // // this.$axios.get(this.$store.state.apiServerIp + '/api/rank/selectRewardRankList',
      // this.$axios.get('/api/user/selectUser',
      //   {params: {uid: 1}})
      //   .then((result) => {
      //     console.log(JSON.stringify(result.data))
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     done()
      //   })
    }
  }
})
</script>
