<template>
  <div class="galleryMainContainer">
    <media-list />
  </div>
</template>

<script>
import mediaList from "../components/gallery/mediaList.vue";
import axios from "axios";

export default {
  components: { mediaList },

  data() {
    return {
      mediaList: [],
    };
  },

  mounted() {
    this.getMedia();
  },

  methods: {
    getMedia() {
      axios
        .get("https://api.cloudinary.com/v1_1/dtrcg7rwu/image", {
          headers: {
            Authorization: `Basic 182242937219763:VPDWqG7D3meMJo0t9NAbfekA7nI`,
          },
        })
        .then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    },
  },
};
</script>

<style>
</style>