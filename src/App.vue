<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/footer.vue';
import Header from "./components/header.vue";
export default {
  components: { Header, Footer },
  name: "App",
};
</script>

<style>
body,
html {
  margin: 0;
}
</style>
