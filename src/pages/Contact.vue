<template>
  <div class="contactContainer">
    <h2 class="pageTitle">
      Pour toute demande de projet vous pouvez me contacter à
    </h2>
    <a class="link" href="mailto:hello.magalimira@gmail.com"
      >hello.magalimira@gmail.com</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contactContainer {
  text-align: center;
  margin-bottom: 3%;
}

.pageTitle {
  margin: 7% auto 4% auto;
  font-size: 20px;
  font-weight: 400;
}

.link {
  color: black;

  font-size: 20px;
}

@media screen and (max-width: 660px) {
  .contactContainer {
    margin-bottom: 20%;
  }
  .pageTitle {
    margin: 15% auto 10% auto;
  }
}
</style>