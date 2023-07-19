<template>
  <div class="upgrade-container">
    <EventController />
    <MaterialSelect />
    <TargetSelect />
    <TargetUpgrade />
    <BgVideo />
  </div>
</template>
<script lang='ts'>
export default {
  name: 'UpgradeView'
}
</script>
<script lang='ts' setup>
import EventController from './components/EventController/index.vue';
import MaterialSelect from './components/MaterialSelect/index.vue';
import TargetSelect from './components/TargetSelect/index.vue';
import TargetUpgrade from './components/TargetUpgrade/index.vue';
import BgVideo from './components/Bgvideo/index.vue';
</script>

<style scoped lang='less'>
.upgrade-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
</style>