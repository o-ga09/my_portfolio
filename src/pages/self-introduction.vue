<template>
    <div class="w-full h-4/5">
        <Header />
        <img class="w-1/2 h-24 md:w-52 md:h-52 block m-auto mt-12 rounded-full" src="../assets/images/main-image.jpg" width="100" alt="main_image" >
       
        <h2 class="flex justify-center pt-5 pb-5 text-4xl">I am @o-ga09！！</h2>
        <p class="flex justify-center pt-2 text-base">社会人4年目のGolang大好きエンジニアです。</p>
        <br>
        <p class="flex justify-center pt-2 text-base">I like Golang/Vue/GCP/k8s</p>
        <br>
        <p class="flex justify-center pt-2 text-base">I have FE(基本情報技術者)</p>
        <br>

        <div class="flex justify-center items-center pb-5 text-4xl">
          <button @click="addHeart">
            <img src="../assets/images/Gopher.png" alt="gopher icon" class="w-12 h-12">
          </button>
        </div>
        <div class="icon-container" v-for="(heart, index) in hearts" :key="index">
            <img src="../assets/images/Gopher.png" alt="gopher icon" class="w-12 h-12">
        </div>

        <Footer class="absolute bottom-0" />
    </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
    name: "Home",
    components: {
      Header: Header,
      Footer: Footer
    },
    data() {
        return {
            hearts: [],
            showHeart: false,
            idCounter: 0
        }
    },
    methods: {
        addHeart() {
            this.hearts.push(true);
            setTimeout(() => {
                this.hearts.shift();
            }, 1000);            
        }
    }
}
</script>

<style scoped>
.icon-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: move-up 2s forwards;
}

@keyframes move-up {
  from {
    bottom: 0;
    transform: translateX(-50px);
  }
  to {
    bottom: 500px;
    transform: translateX(50px);
  }
}

.heart-icon {
  width: 50px;
  height: 50px;
  color: red;
}
</style>