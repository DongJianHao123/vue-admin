<template>
  <div class="bg-video">
    <video autoplay src="../../../../assets/skinsUpgrade/bg.mp4" type="video/mp4"></video>
  </div>
</template>
<script lang="ts">
export default {
  name: "BgVideo",
};
</script>
<script lang="ts" setup></script>

<style scoped lang="less">
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
