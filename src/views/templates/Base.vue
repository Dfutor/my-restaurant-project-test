<template>
  <div >
    <MenuTop/>

    <router-view />

    <FooterDown/>
  </div>
</template>

<script>

import MenuTop from "@/views/components/MenuTop.vue";
import FooterDown from "@/views/components/FooterDown.vue";
export default {
  name: 'HelloWorld',
  components: {
    MenuTop,
    FooterDown
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background:#FF6E0D;
}
</style>
