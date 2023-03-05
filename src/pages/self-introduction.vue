<template>
    <div id="app">
        <div class="main_image">
            <img src="../assets/images/main-image.jpg" width="100" alt="main_image" >
        </div>
        <h2>I am @o-ga09！！</h2>
        <p>社会人３年目のGolang大好きエンジニアです。</p>
        <br>
        <p>I like Golang/Vue/GCP/k8s</p>
        <br>
        <p>I have FE(基本情報技術者)</p>
        <br>
    </div>
</template>

<script>
export default {

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