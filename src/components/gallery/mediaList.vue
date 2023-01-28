<template>
  <div class="mediaListContainer">
    <div class="grid">
      <div
        class="gridItem"
        v-for="item in data"
        :key="item.id"
        @click="goTo(item.titre)"
      >
        <img
          class="gridItemImg"
          :src="require(`@/assets/bdd/${item.url}`)"
          alt=""
          loading="lazy"
        />
        <div class="hoverDiv">
          <span>{{ item.titre }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/bdd.json";

export default {
  data() {
    return {
      data: null,
    };
  },

  mounted() {
    let mediaArray = json.data;
    this.data = mediaArray.sort((a, b) => a.id - b.id);
  },

  methods: {
    goTo(title) {
      title = title.replaceAll(" ", "_");
      this.$router.push({
        name: "illustration",
        params: { imgTitle: title },
      });
    },
  },
};
</script>

<style>
.mediaListContainer {
  margin-bottom: 3%;
  position: relative;
}

.grid {
  display: grid;
  place-content: center;
  align-items: center;
  margin: auto 5%;
  grid-template-columns: 30% 30% 30%;
  gap: 30px;
}

.gridItem {
  width: 95%;
  cursor: pointer;
  justify-self: center;
  position: relative;
}

.gridItemImg {
  width: 100%;
  position: relative;
}

.hoverDiv {
  visibility: hidden;
  width: 100%;
  height: 100%;
  transition: all ease-in-out 0.5s;

  position: absolute;
  bottom: 0;
  left: 0;

  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hoverDiv span {
  font-size: 24px;
  font-weight: bold;
}

.gridItem:hover .hoverDiv {
  visibility: visible;
  background-color: rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: 660px) {
  .grid {
    grid-template-columns: 90%;
  }
}
</style>