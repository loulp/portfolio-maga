<template>
  <div class="presentationContainer">
    <div class="mediaContainer">
      <img class="media" src="../../assets/about.jpg" alt="" />
    </div>
    <div class="textContainer">
      <p class="presentationText">Bonjour!</p>

      <p class="presentationText">
        Illustratrice actuellement basée à Nantes, je développe vos univers
        visuels en m'inspirant de la nature, des femmes et des moments de vie
        que je capture et souhaite transmettre à travers vos projets d'éditions,
        de décorations, de mode et bien d'autres encore.
      </p>

      <p class="presentationText">
        Issue d'une formation de stylisme au sein du Studio Berçot à Paris où
        j'ai développé une sensibilité pour le design et l'esthétisme que j'ai
        renforcé au travers de mes voyages, notamment en Australie pendant un an
        et demi.
      </p>

      <p class="presentationText">
        Là bas, j'y ai découvert une faune et une flore luxuriante qui a
        renforcé mon amour pour la nature et mon envie de retranscrire ces
        univers oniriques à travers mes outils de prédilections que sont la
        gouache et ses couleurs éclatantes, mais aussi à l'encre de chine ainsi
        que l'illustration digitale.
      </p>

      <p class="presentationText">
        Pour me contacter, vous pouvez m'envoyer un email à
        <a class="link" href="mailto:hello.magalimira@gmail.com"
          >hello.magalimira@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.presentationContainer {
  margin: 3% 5% auto 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.mediaContainer {
  display: flex;
  justify-content: center;
  margin-top: 5%;
}

.media {
  height: calc(100vh - 210px);
  width: auto;
}

.textContainer {
  margin-left: 2%;
  width: 48%;
}

.presentationText {
  text-align: justify;
  font-size: 19px;
}

@media screen and (max-width: 660px) {
  .presentationContainer {
    flex-direction: column;
  }

  .media {
    height: auto;
    width: 80%;
    margin: 7%;
  }

  .textContainer {
    width: 90%;
  }

  .presentationTitle {
    font-size: 24px;
  }
}
</style>