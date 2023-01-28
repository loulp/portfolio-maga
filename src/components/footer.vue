<template>
  <div class="footerContainer">
    <img class="footerGIF" src="../assets/mmGif.gif" alt="" />
    <!-- <h2 class="footerTitle">Magali Mira</h2> -->
    <div class="iconContainer">
      <a href="https://www.instagram.com/magali.m.i.r.a/" target="_blank">
        <img class="icon insta" src="../assets/instaIcon.svg" alt="" />
      </a>
      <a href="" target="_blank">
        <img class="icon" src="../assets/fbIcon.svg" alt="" />
      </a>

      <a href="mailto:hello.magalimira@gmail.com">
        <img class="icon" src="../assets/mailIcon.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footerContainer {
  margin: 2% 10%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.footerGIF {
  width: 20%;
}

.footerTitle {
  font-size: 28px;
  font-family: "Barlow Condensed", sans-serif;
}

.iconContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon {
  width: 35px;
  margin: 0 10px;
}

.insta {
  width: 45px;
}

@media screen and (max-width: 660px) {
  .footerContainer {
    margin-top: 7%;
  }

  .footerTitle {
    font-size: 22px;
  }
}
</style>