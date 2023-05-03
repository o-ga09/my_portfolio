
<template>
    <div class="w-full h-4/5 ">
      <Header />


      <div class="flex justify-center">
          <div class="text-center">
              <section class="my-10">
                <h2 class="my-2 font-bold underline text-2xl">Profile</h2>
              </section>

              <section class="my-10">
                <h3 class="my-2 font-bold underline text-2xl">Name</h3>
                <p class="my-2">オーガ</p>
                <h3 class="my-2 font-bold underline text-2xl">Age</h3>
                <p class="my-2">25</p>
                <h3 class="my-2 font-bold underline text-2xl">From</h3>
                <p class="my-2">新潟</p>
                <h3 class="my-2 font-bold underline text-2xl">Job</h3>
                <p class="my-2">エンジニア</p>
              </section>

              <section class="my-10 mx-10">
                <h3 class="my-2 font-bold underline text-2xl">Comment</h3>
                <p class="my-2">ゲーム大好きエンジニアです！</p>
                <p class="my-2">趣味は、ゲーム、プログラミング、料理です！</p>
                <p class="my-2">エンジニアやってて一番生を実感するのは、インシデント、障害時の対応というヘンタイです。</p>
                <p class="my-2">(一番つまらないのは、ひたすらタスクをこなすだけの時間)</p>
              </section>

              <section class="my-10 mx-10 inline-block">
                <p class="my-10 underline text-left">好きなゲーム</p>
                  <li class="text-left list-none">モンハン</li>
                  <li class="text-left list-none">ゼノブレイド</li>
                  <li class="text-left list-none">ドラクエ</li>
                <p class="my-10 underline text-left">好きなプログラミング言語</p>
                  <li class="text-left list-none">Go</li>
                <p class="my-10 underline text-left">好きなアニメ</p>
                  <li class="text-left list-none">ハイキュー</li>
                  <li class="text-left list-none">七つの大罪</li>
              </section>

              <section class="my-10 mx-10">
                <p class="my-2">これから、技術的な記事以外にもブログを定期的に書いていこうと思います！</p>
                <p class="my-2">よろしくお願いします。</p>
              </section>
          </div>
      </div>


      <Footer />
    </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  name: "PortfolioPage",
  components: {
    Header: Header,
    Footer: Footer
  },
}
</script>
