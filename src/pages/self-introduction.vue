<template>
    <div id="app">
        <div class="main_image">
            <img src="../assets/images/main-image.jpg" width="100" alt="main_image" >
        </div>
        <h2>I am @xenoalvisMonad！！</h2>
        <p>社会人３年目のよわよわエンジニアです。</p>
        <br>
        <p>I like Golang/Vue/GCP/k8s</p>
        <br>
        <p>I have FE(基本情報技術者)</p>
        <br>
        <div class="btn wrap">
            <TwitterButton class="icon icon-twitter" @click="click_twitter()" />
            <GithubButton class="icon icon-github" @click="click_github()" />
        </div>
    </div>
</template>

<script>
import TwitterButton from '../components/TwitterButton.vue';
import GithubButton from '../components/GithubButton.vue';

export default {
    components: {
        TwitterButton:TwitterButton,
        GithubButton:GithubButton
    },
    methods: {
        click_twitter(){
            const url = 'https://twitter.com/xenoalvisMonad'
            window.location.href = url
        },
        click_github(){
            const url = 'https://github.com/taiti09/taiti09'
            window.location.href = url
        }
    }
}
</script>

<style>
    .main_image img{
        width: 200px;
        height: 200px;
        display: block;
        margin: auto;
        margin-top: 50px;
        border-radius: 50%;
    }

    h2 {
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 40px;
        font-weight: bold;
    }
    p {
        text-align: center;
        padding-top: 10px;
        font-size: 20px;
    }

    .wrap {
        margin: auto;
        margin-top: 50px;
        width: 270px;
        display: flex;
    }

    .icon {
        width:100px;
        height:100px; 
    }

    .icon-twitter {
        fill: aqua;
    }

    .icon-github {
        margin-left: 70px;
        fill: lime;
    }
</style>