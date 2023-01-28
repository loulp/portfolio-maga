<template>
  <div class="displayContainer">
    <div v-if="illu" class="descContainer">
      <h2>{{ illu.titre }}</h2>
      <p>{{ illu.description }}</p>
    </div>
    <div v-if="illu" class="mediaContainer">
      <img
        v-for="media in illuMedias"
        :key="media.id"
        class="media"
        :src="require(`@/assets/bdd/${media.url}`)"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
import json from "@/bdd.json";

export default {
  data() {
    return {
      illu: null,
      illuMedias: [],
    };
  },

  mounted() {
    let mediaArray = json.data;

    this.illu = mediaArray.find(
      (illu) => illu.titre === this.$route.params.imgTitle.replaceAll("_", " ")
    );

    mediaArray.unshift(
      mediaArray.splice(
        mediaArray.findIndex((illu) => illu.id === this.illu.id),
        1
      )[0]
    );

    this.illuMedias = mediaArray;
  },
};
</script>

<style>
.displayContainer {
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  margin: 0 5%;
}

.descContainer {
  flex: 2;
  padding-top: 5%;
  font-size: 18px;
  white-space: pre-wrap;
}

.mediaContainer {
  flex: 3;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mediaContainer::-webkit-scrollbar {
  display: none;
}

.media {
  width: 80%;
  margin: 30px 0px;
}

@media screen and (max-width: 660px) {
  .displayContainer {
    flex-direction: column;
  }
}
</style>