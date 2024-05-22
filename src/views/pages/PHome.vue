<template>
    <div class="PHome">
        <WellCome/>
        <LoremRest/>
        <FishDay/>
    </div>
</template>
<script>
    import WellCome from "@/views/components/WellCome.vue";
    import LoremRest from "@/views/components/LoremRest.vue";
    import FishDay from "@/views/components/FishDay.vue";

    export default {
        name: 'PHome',
        components:{
            WellCome,
            LoremRest,
            FishDay
        }
    }
</script>

<style scoped>
.PHome{
    align-items: center;
}
</style>
