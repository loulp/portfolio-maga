<template>
  <div class="mediaListContainer">
    <div class="grid">
      <img
        v-for="item in getList"
        :key="item"
        class="gridItem"
        :src="require('@/assets/ex' + item + '.jpg')"
        alt=""
        @click="zoomOnImg(item)"
      />
    </div>
    <!-- <cld-image public-id="cld-sample-5" /> -->
    <div id="zoomContainer" v-if="isZooming" @click="isZooming = !isZooming">
      <img
        class="zoomMedia"
        :src="require('@/assets/ex' + zoomImg + '.jpg')"
        alt=""
      />
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isZooming: false,
      zoomImg: null,
    };
  },
  computed: {
    getList() {
      const list = [];
      for (let i = 1; i < 9; i++) {
        list.push(i);
      }
      return list;
    },
  },

  methods: {
    zoomOnImg(url) {
      this.zoomImg = url;
      this.isZooming = true;
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
}

#zoomContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.zoomMedia {
  height: 90vh;
}

@media screen and (max-width: 660px) {
  .grid {
    grid-template-columns: 90%;
  }

  .zoomMedia {
    height: auto;
    width: 95%;
  }
}
</style>