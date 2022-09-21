<template>
  <div class="headerContainer">
    <h1 class="title">Magalie Mira</h1>
    <div class="navigationContainer">
      <router-link class="navigationItem" :to="{ name: 'gallery' }"
        >GALERIE</router-link
      >
      <router-link class="navigationItem" :to="{ name: 'about' }"
        >A PROPOS</router-link
      >
      <router-link class="navigationItem" :to="{ name: 'contact' }"
        >CONTACT</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headerContainer {
  margin: 3% 0;
}
.title {
  width: 100%;
  text-align: center;
  margin: 4% auto;
  font-family: cursive;
}

.navigationContainer {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 4%;
}

.navigationItem {
  color: black;
  font: bold 20px sans-serif;
  text-decoration: none;
}

.navigationContainer :hover {
  text-decoration: underline;
}
</style>>
