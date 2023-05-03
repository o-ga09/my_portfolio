<template>
    <div id="app">
      <Header />

      <div class="flex justify-center">
          <div class="text-center">
              <section class="my-10">
                <h2 class="my-2 font-bold underline text-2xl">Skills</h2>
              </section>

              <h3 class="my-2 font-bold underline text-2xl">スキルレベル</h3>

              <section class="my-10 mx-10 md:mx-40">
                <p class="my-2">Golang</p>
                <p class="my-2">⭐️⭐️⭐️</p>
                <p>実務では、未経験ですが個人でアプリ開発する際は第一優先の言語。
                  処理も早く、クロスコンパイルも簡単で便利！
                  好きな言語です！
                  現在は、tesitingパッケージなど実務に耐えうるように勉強中です。
                </p>
              </section>

              <section class="my-10 mx-10 md:mx-40">
                <p class="my-2">C/C++</p>
                <p class="my-2">⭐️⭐️</p>
                <p>学生時代にはじめて学んだ言語。
                  基礎の文法やアルゴリズムはこれで習得しました。
                  実務ではC言語を用いた開発テスト工程での経験があります。(1年ほど)
                </p>
              </section>

              <section class="my-10 mx-10 md:mx-40">
                <p class="my-2">GCP</p>
                <p class="my-2">⭐️</p>
                <p>下の成果物欄のURLのインフラはApp Engineを使用するなど
                    個人開発では基本的にGCPを使用しております。
                </p>
              </section>
              <section class="my-10 mx-10 md:mx-40">
                <p class="my-2">k8s</p>
                <p class="my-2">⭐️</p>
                <p>minkubeを使用したローカルk8sを勉強しました。
                  yamlの書き方やk8sの概要についてなど。
                </p>
              </section>

              <section class="my-10 mx-10 md:mx-40">
                <p class="my-2">Vuejs</p>
                <p class="my-2">⭐️</p>
                <p>下の成果物欄のURLのフロンエンドに使用するなど
                  個人開発では基本的にVuejsを使用しております。
                </p>
              </section>

              <section class="my-10 mx-10 md:mx-40">
                <p class="my-2">salesforce</p>
                <p class="my-2">⭐️</p>
                <p>メールスペシャリストの認定資格を目指して勉強中です！
                  元々、マーケティングオートメーションの保守開発のプロジェクトに在籍していたため
                  マーケティング関連のシステムは面白いし大好きです！
                </p>
              </section>

              <h3 class="my-2 font-bold underline text-2xl">成果物</h3>
              <section class="my-10 mx-10 md:mx-40">
                <div class="hover:text-red-500">
                  <a href="https://pawafes-calc-20220223.dt.r.appspot.com/" target="_blank">パワフェス計算ツール</a>
                </div>
              </section>

              <h3 class="my-2 font-bold underline text-2xl">最近書いた記事たち</h3>
              <section class="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-4 my-10 mx-10 md:mx-40">
                <a href="https://qiita.com/o-ga/items/6abb7081d470926cb128" target="_blank" class="block w-64 mx-auto my-4 rounded-lg overflow-hidden border shadow-lg">
                  <div class="relative">
                    <img src="../assets/images/lovely.png" alt="image" class="w-full h-48 object-cover">
                  </div>
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">テストデータ生成ツール作った話</h3>
                  </div>
                </a>

                <a href="https://zenn.dev/o_ga/articles/51fb95bfcaf233" target="_blank" class="block w-64 mx-auto my-4 rounded-lg overflow-hidden border shadow-lg">
                  <div class="relative">
                    <img src="../assets/images/beer.png" alt="image" class="w-full h-48 object-cover">
                  </div>
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">メールアドレスマスクCLIツール作った話</h3>
                  </div>
                </a>

                <a href="https://qiita.com/o-ga/items/c2ff5bbff7d76d4eace2" target="_blank" class="block w-64 mx-auto my-4 rounded-lg overflow-hidden border shadow-lg">
                  <div class="relative">
                    <img src="../assets/images/thank_you.png" alt="image" class="w-full h-48 object-cover">
                  </div>
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Golangに入門して詰まった話</h3>
                  </div>
                </a>
              </section>

              <h3 class="my-2 font-bold underline text-2xl">資格</h3>
              <section class="my-10">
                <li class="list-none">基本情報技術者</li>
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
  name: "SkillPage",
    components: {
    Header: Header,
    Footer: Footer
  }
}
</script>
