<template>
  <q-page class="justify justify-center" style="background-image: url(images/star1.jpg)">
    <!-- <div style="background-color: black;"> -->
    <!-- <div class="" style="background-image: url(images/star1.jpg);"> -->
    <div class="" style="">
      <!-- <div class="row">
        <div class="text-h5 text-bold">
          Overview
        </div>
      </div> -->
      <!-- <div class="row" style="background-image: url(images/star1.jpg); height: 40rem;"> -->
      <div class="row">
        <!-- <div class="col-12">
          <q-img src="images/star1.jpg" style="height: 360px;">
            <div class="absolute-bottom text-center">
              <div class="text-bold"><font size="7rem">KLAYSTAR</font></div>
              <div class="">
                <img src="images/logo-128x128.png" style="width: 30px;" />
              </div>
              <br />
              <div class="text-bold"><font size="4rem">Startup</font></div>
              <div class="text-bold"><font size="5rem">Influencer</font></div>
              <div class="text-bold"><font size="6rem">Everyone</font></div>
            </div>
          </q-img>
        </div> -->
        <div class="col-12 text-center text-white">
          <!-- <div class="text-h5 text-bold">KLAYSTAR</div> -->
          <br />
          <br />
          <br />
          <div class="text-bold"><font size="7rem">KLAYSTAR</font></div>
          <div class="">
            <img src="images/logo-128x128.png" style="width: 50px;" />
          </div>
          <br />
          <div class="text-bold"><font size="4rem">BEYOND</font></div>
          <div class="text-bold"><font size="5rem">BLOCKCHAIN</font></div>
          <div class="text-bold"><font size="6rem">FRAMEWORK</font></div>
        </div>
        <div style="text-align: center; width: 100%;">
          <br />
          
          <q-btn color="secondary" text-color="black" style="width: 250px;" size="xl" @click="goCreateToken">
            <b>{{ $t('create_token') }}</b>
          </q-btn>
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-12 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ $t('main_introduction_overline') }}</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">{{ $t('main_introduction_title') }}</div>
                  <div class="text-caption text-grey">
                    {{ $t('main_introduction_content') }}
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    src="images/star2.jpg"
                  />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ $t('main_behind_the_scene_overline') }}</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">{{ $t('main_behind_the_scene_title') }}</div>
                  <div class="text-caption text-grey">
                    {{ $t('main_behind_the_scene_content') }}
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    src="images/star2.jpg"
                  />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ $t('main_platform_overline') }}</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">{{ $t('main_platform_title') }}</div>
                  <div class="text-caption text-grey">
                    {{ $t('main_platform_content') }}
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    src="images/star2.jpg"
                  />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md">
          <div class="q-pa-md">
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="q-pa-md">
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="q-pa-md">
          </div>
        </div>
      </div>
      <!-- <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      > -->
      <!-- {{ $t('success') }} -->
      <!-- <div style="background-color: rgb(255, 255, 255); height: 500px; text-align: center">
        {{ $t('success') }}
      </div>
      <div style="background-color: rgb(238, 180, 23); height: 500px; text-align: center">
        {{ $t('success') }}
      </div>
      <div style="background-color: rgb(255, 255, 255); height: 500px; text-align: center">
        {{ $t('success') }}
      </div>
      <div style="background-color: rgb(238, 180, 23); height: 500px; text-align: center">
        {{ $t('success') }}
      </div>
      <div style="background-color: rgb(255, 255, 255); height: 500px; text-align: center">
        Oneon Inc. klaystartup@gmail.com
      </div> -->

      <!-- <div class="">
        <q-card class="my-card" square>
          <q-parallax
            src="images/star_background.jpg"
            :height="600"
          />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div> -->

      <!-- <div style="background-color: rgb(255, 255, 255); height: 500px; text-align: center">
        <q-img src="images/star2.jpg" style="width: 100%" />
      </div> -->

      <!-- <div style="background-image: url(images/star_background.jpg); height: 3500px; text-align: center">
      </div> -->


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <!-- <div style="background-color: rgb(255, 255, 255); height: 500px; text-align: center">
        <q-img src="images/star3.jpg" style="width: 100%" />
      </div> -->

      <!-- <div style="background-color: rgb(255, 255, 255); height: 500px; text-align: center">
        <q-img src="images/under_construction.png" style="width: 300px" />
      </div> -->

      <br />
      <br />
      <br />

    </div>
    <br />

    <div style="background-color: white; text-align: left;">
      <font size="1" color="grey">
      <div class="row">
        <div class="col-12 q-pa-md">
          <img src="images/logo-128x128.png" style="width: 9px;" />
          <font size="2" color="grey"><b>&nbsp;KLAYSTAR</b></font>
          <br />
          원온주식회사
          | 대표이사 : 안영대
          | 주소 : 서울특별시 마포구 마포대로 196, 1707
          | 사업자등록번호 : 863-87-01186
          <a @click="goBusinessInfo" style="cursor: pointer;"><b>사업자정보확인</b></a>
          | 통신판매업신고번호 : 2019-서울마포-0979
          | 이메일문의 : oneon.inc@gmail.com
        </div>
      </div>
      </font>
    </div>


    <!-- <div style="background-color: white; height: 85px; text-align: center">
      <br />
      <img src="images/logo-128x128.png" style="width: 10px;" />
      <font color="grey">
        <b>&nbsp;KLAYSTAR</b>
      </font>
      &nbsp;&nbsp;
      <font color="grey">
        OneOn Inc.
        &nbsp;
        klaystartup@gmail.com
      </font>
    </div> -->

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

    // CORDOVA APP인 경우, /app/loginApp 화면으로 이동
    if (this.$q.platform.is.cordova === true && location.origin !== this.$frontDomain
      // && this.$q.platform.is.mobile === true && (this.$q.platform.is.platform === 'andriod' || this.$q.platform.is.platform === 'ios')
    ) {
      this.$router.push('/app/loginApp')
      // https://klaystar.com WEB으로 이동
      // alert('move to https://klaystar.com')
      // if (location.origin !== this.$domain) {
      //   location.href = this.$domain
      // }
    }

  },
  mounted: function () {},
  methods: {
    // WEB으로 이동
    moveToWeb () {
      // let targetPath = this.$cookie.get('LOGIN_REDIRECT_URL')
      // // APP이면 WEB으로 이동, WEB이면 Push
      // if (this.$store.state.device === 'android' || this.$store.state.device === 'ios') { // APP인 경우 - 푸시 토큰 저장
      //   location.href = this.$store.state.DOMAIN + '/#' + targetPath + '?uid=' + uid + '&auth_key=' + authKey
      // } else {
      //   this.$router.push(targetPath)
      // }
      location.href = this.$domain
    },
    // connect walleet
    goCreateToken() {
      // this.msgBox = true
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
    },
    // 사업자정보확인
    goBusinessInfo () {
      /*
      this.$refs.redirectModal.title = '사업자정보'
      this.$refs.redirectModal.url = this.$store.state.BUSINESS_SITE_INFO
      this.$refs.redirectModal.icon = 'play_arrow'
      this.$refs.redirectModal.show()
      */
      // window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8638701186', '_system')
      window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8638701186', '_system')
    },
  }
})
</script>
