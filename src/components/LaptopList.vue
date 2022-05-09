<template>
    
     <div class="laptopbox">
         
        <div v-for="laptop in laptops" :key="laptop.id" >
                <Laptop :laptop="laptop"/>
        </div>

        

     </div>

</template>

<script>

import Laptop from "./MyLaptop.vue"
export default{

    name: 'LaptopList',
    components: {
        Laptop
    },
    props: {
        laptops: Array
    }

}

</script>


<style>


</style>