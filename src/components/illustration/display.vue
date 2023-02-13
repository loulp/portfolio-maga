<template>
  <div v-if="illu" class="displayContainer">
    <div class="descContainer">
      <h2>{{ illu.titre }}</h2>
      <p>{{ illu.description }}</p>
    </div>
    <div class="mediaContainer">
      <img
        class="media"
        :src="require(`@/assets/bdd/${illu.url}`)"
        loading="lazy"
      />
      <img
        v-for="(media, index) in illu.views"
        :key="index"
        class="media"
        :src="require(`@/assets/bdd/rel/${media}`)"
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

    this.illu = mediaArray.find((illu) => illu.id == this.$route.params.imgId);

    // mediaArray.unshift(
    //   mediaArray.splice(
    //     mediaArray.findIndex((illu) => illu.id === this.illu.id),
    //     1
    //   )[0]
    // );
    // this.illuMedias = mediaArray;
  },
};
</script>

<style>
.displayContainer {
  display: flex;
  flex-direction: row;
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

  display: flex;
  align-items: center;
  flex-direction: column;
}

.media {
  width: 75%;
  margin: 30px 0px;
}

.media:first-of-type {
  margin-top: 0;
}

@media screen and (max-width: 660px) {
  .displayContainer {
    flex-direction: column;
  }
}
</style>