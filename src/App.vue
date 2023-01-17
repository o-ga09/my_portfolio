<template>
  <div id="app" class="container">
    <!-- drawer menu -->

    <!-- drawer menu -->

    <!-- app bar -->
    <!-- app bar -->

    <!-- main contents -->
    <header><Header /></header>
    <main><router-view /></main>
    <footer><Footer /></footer>
    <!-- <Header />
    <router-view />
    <Footer /> -->
    <!-- main contents -->

    <!-- footer -->
    <!-- footer -->

  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "app",
  components: {
    Header: Header,
    Footer: Footer
  },
  data: () => ({
    drawer: false,
    nav_lists: [
      {
        name: 'ホーム',
        icon: 'mdi-home',
        link: '/'
      },
      {
        name: 'お知らせ',
        icon: 'mdi-alert-circle',
        link: '/announce'
      },
      {
        name: 'プライバシーポリシー',
        icon: 'mdi-card-text',
        link: '/policy'
      },
      {
        name: 'フィードバックを送信',
        icon: 'mdi-message-alert',
        link: '/feedback'
      }
    ]
  }),
  methods: {
    onClose() {
      this.$set(this,'drawer',false);
    },
  },
};
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    min-height: 100vh;
    min-width: 100%;
  }

  #app {
    width: 100%;
    overflow: hidden;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
</style>
