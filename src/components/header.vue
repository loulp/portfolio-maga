<template>
  <div class="headerContainer">
    <img class="title" src="../assets/mmGif.gif" />
    <div class="navigationContainer">
      <router-link class="navigationItem" :to="{ name: 'gallery' }"
        >GALERIE</router-link
      >
      <router-link class="navigationItem" :to="{ name: 'about' }"
        >ABOUT</router-link
      >
      <router-link class="navigationItem" :to="{ name: 'shop' }"
        >&nbsp;SHOP</router-link
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
  width: 22%;
  display: block;
  margin: 3% auto;
}

.navigationContainer {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 3%;
}

.navigationItem {
  color: black;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 24px;
  text-decoration: none;
}

.navigationContainer :hover {
  text-decoration: underline;
}

@media screen and (max-width: 660px) {
  .title {
    width: 50%;
    margin-top: 7%;
  }

  .navigationContainer {
    width: 100%;
    margin: 7% auto;
  }
}
</style>
