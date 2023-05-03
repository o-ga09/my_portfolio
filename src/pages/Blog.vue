
<template>
    <div class="">
      <Header />
      <div class="flex justify-center">
          <div class="text-center">
              <section class="my-10">
                <h2 class="my-2 font-bold underline text-2xl">Blog</h2>
              </section>

              <section class="my-10">
                <h3 class="my-2 font-bold underline text-2xl">Comming soon ...</h3>
              </section>

              <section class="my-10 mx-10">
                <p class="my-2">技術以外のゲームの感想、読んだ本感想を書こうと思います</p>
              </section>
          </div>
      </div>
      <Footer class="absolute bottom-0"/>
    </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  name: "BlogPage",
  components: {
    Header: Header,
    Footer: Footer
  },
}
</script>
