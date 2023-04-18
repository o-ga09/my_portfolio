<template>
    <div id="app">
        <img class="w-12 h-52 block m-auto mt-12 rounded-full" src="../assets/images/main-image.jpg" width="100" alt="main_image" >
       
        <h2 class="flex justify-center pt-5 pb-5 text-4xl">I am @o-ga09！！</h2>
        <p class="flex justify-center pt-2 text-2xl">社会人３年目のGolang大好きエンジニアです。</p>
        <br>
        <p class="flex justify-center pt-2 text-2xl">I like Golang/Vue/GCP/k8s</p>
        <br>
        <p class="flex justify-center pt-2 text-2xl">I have FE(基本情報技術者)</p>
        <br>
        <button @click="addIcon">
        <svg-icon class="w-6 h-6 text-red-500" type="mdi" :path="heartIcon"></svg-icon>
        </button>
        
        <div v-for="index in count" :key="index">
        <svg-icon class="w-6 h-6 text-red-500" type="mdi" :path="heartIcon"></svg-icon>
        </div>

        <div class="garden" ref="garden">
            <div class="ball" ref="ball"></div>
            <div class="output" ref="output"></div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHeart } from '@mdi/js'

export default {
    components: {SvgIcon},
    name: "Home",
    data() {
        return {
            heartIcon: mdiHeart,
            heartColor: '#e74c3c',
            heartContainer: null,
            hearts: [],
            count:0
        }
    },
    mounted() {
        const ball = this.$refs.ball;
        const garden = this.$refs.garden;
        const output = this.$refs.output;

        const maxX = garden.clientWidth - ball.clientWidth;
        const maxY = garden.clientHeight - ball.clientHeight;

        function handleOrientation(event) {
            let x = event.beta; // -180 から 180 の範囲で角度を示す
            let y = event.gamma; // -90 から 90 の範囲で角度を示す
            console.log(x,y);

            output.textContent = `beta : ${x}\n`;
            output.textContent += `gamma: ${y}\n`;
            // 端末をひっくり返したくはないため、
            // x の値を -90 から 90 の範囲に制限する
            if (x > 90) {
                x = 90;
            }
            if (x < -90) {
                x = -90;
            }

            // 計算を容易にするため、x および y の値の範囲を
            // 0 から 180 に変換する
            x += 90;
            y += 90;

            // 10 は、ボールのサイズの半分である。
            // これにより、配置場所をボールの中心に合わせる
            ball.style.top = `${(maxY * y) / 180 - 10}px`;
            ball.style.left = `${(maxX * x) / 180 - 10}px`;

        }
        window.addEventListener("deviceorientation", handleOrientation);
        this.heartContainer = this.$refs.heartContainer;
    },
    methods: {
        addIcon() {
            this.count++
        },
        showHearts() {
            let newHeart = document.createElement('div');
            newHeart.classList.add('heart');
            newHeart.style.color = this.heartColor;
            newHeart.style.position = 'absolute';
            newHeart.style.opacity = 1;
            newHeart.style.fontSize = '2rem';
            newHeart.style.top = '50%';
            newHeart.style.left = '50%';
            newHeart.innerHTML = this.heartIcon;
            this.hearts.push(newHeart);
            this.heartContainer.appendChild(newHeart);
            setTimeout(() => {
                newHeart.style.opacity = 0;
                newHeart.style.top = '-10%';
            }, 1000);
            requestAnimationFrame(() => {
                newHeart.style.transform = `translate(-50%, -${window.innerHeight}px)`;
            });
        }
    }
}
</script>

<style scoped>
.heart {
  animation: heart 1s ease-in-out;
}

@keyframes heart {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

.garden {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #ccc;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top: 90px;
  left: 90px;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
</style>