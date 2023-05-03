<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  metaInfo : {
    title : 't09blog',
  }
};
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
</style>
