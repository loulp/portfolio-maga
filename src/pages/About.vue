<template>
  <div class="aboutMainContainer">
    <presentation />
    <sale-point />
  </div>
</template>

<script>
import presentation from "../components/about/presentation.vue";
import SalePoint from "../components/about/salePoint.vue";
export default {
  components: { presentation, SalePoint },
};
</script>

<style scoped>
</style>