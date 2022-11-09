<template>
  <q-page class="justify justify-center">
    <!-- <div style="background-color: black;"> -->
    <div class="">
      <div class="row">
        <div class="text-h7 text-bold q-pa-md">
          My Page
        </div>
      </div>
      <div class="row">
        <div class="text-h7 text-bold q-pa-md">
          -> 로그인 유저 정보
        </div>
      </div>

      <br />
      <div style="text-align: center; width: 100%;">
        <q-btn color="secondary" text-color="black" style="width: 250px;" size="lg" @click="goCreateToken" rounded>
          <b>{{ $t('create_token') }}</b>
        </q-btn>
      </div>
      <br />

      <q-item-label header class="text-bold">My Token List</q-item-label>
      <q-list class="rounded-borders" style="max-width: 600px">
        <!-- <q-item-label header>My Token List</q-item-label> -->

        <q-item v-for="item in myTokenList" :key="item.name">
          <q-item-section avatar>
            <q-icon name="play_circle_outline" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-3">
            <q-item-label class="q-mt-sm">{{ item.name }}</q-item-label>
            <q-item-label class="q-mt-sm">{{ item.symbol }}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col">
            <q-item-label class="q-mt-sm">initial : {{ item.initial }}</q-item-label>
            <q-item-label class="q-mt-sm">decimal : {{ item.decimal }}</q-item-label>
          </q-item-section>

          <!-- <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">init[quasarframework/quasar]</span>
              <span class="text-grey-8"> - GitHub repository</span>
            </q-item-label>
            <q-item-label caption lines="1">
              @rstoenescu in #3: > Generic type parameter for props
            </q-item-label>
            <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
              <span class="cursor-pointer">Open in GitHub</span>
            </q-item-label>
          </q-item-section> -->

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <!-- <q-btn class="" size="12px" flat dense round icon="delete" /> -->
              <q-btn class="" size="12px" flat dense round icon="edit" />
              <!-- <q-btn class="" size="12px" flat dense round icon="delete" /> -->
              <!-- <q-btn size="12px" flat dense round icon="more_vert" /> -->
            </div>
          </q-item-section>
          <!-- <q-separator spaced /> -->
        </q-item>
      </q-list>

      <br /><br /><br />

      <div class="row">
        TEST 1. 토큰 생성
      </div>
      <div class="row">
        TEST 2. 토큰 수정
      </div>
      <div class="row">
        TEST 3. 토큰 컨트랙트 API 실행
      </div>
      <div class="row">
        TEST 4. 로그인
      </div>
      <div class="row">
        TEST 5. 결제
      </div>

      <div class="row">
        TEST 1. 토큰 생성
      </div>
      <div class="row">
        TEST 2. 토큰 수정
      </div>
      <div class="row">
        TEST 3. 토큰 컨트랙트 API 실행
      </div>
      <div class="row">
        TEST 4. 로그인
      </div>
      <div class="row">
        TEST 5. 결제
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
      myTokenList: [
        { name: 'token1', symbol: 'TKN1', decimal: 18, initial: 10000000000 },
        { name: 'token2', symbol: 'TKN1', decimal: 18, initial: 10000000000 },
        { name: 'token3', symbol: 'TKN1', decimal: 18, initial: 10000000000 },
      ]
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
    // 누적 랭킹 리스트 조회
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
      this.$router.push('/token/create')

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
