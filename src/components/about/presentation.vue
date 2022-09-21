<template>
  <div class="presentationContainer">
    <img class="media" src="../../assets/ex2.jpg" alt="" />
    <div class="textContainer">
      <h2 class="presentationTitle">About Me</h2>
      <p class="presentationText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum
        dolor, ullamcorper et tempor eget, efficitur quis urna. Suspendisse at
        nunc sapien. Aliquam eget urna interdum neque rutrum fringilla. Donec
        nulla lectus, vulputate quis egestas at, malesuada vel sapien.
      </p>
      <p class="presentationText">
        Maecenas dignissim quis lacus et vehicula. In et magna non massa rutrum
        viverra et vel felis. Maecenas id semper felis. Maecenas ultrices
        pellentesque arcu, auctor maximus lacus semper tincidunt. Nullam
        scelerisque purus arcu, eu ultrices nisl fermentum a.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.presentationContainer {
  margin: 5% 5% auto 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.media {
  margin-right: 2%;
  height: calc(100vh - 210px);
  width: auto;
}

.textContainer {
  margin-left: 2%;
  width: 48%;
}

.presentationTitle {
  text-align: center;
  font: bold 20px cursive;
}

.presentationText {
  text-align: justify;
  font: 18px sans-serif;
}
</style>