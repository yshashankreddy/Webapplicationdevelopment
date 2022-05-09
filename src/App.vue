<template>
  <div class="container">
    <!-- #3 must use the component-->
    <MyHeader Title="Laptop-Mag"/>

 
    <LaptopList :laptops="laptops.laptops"  />


   <MyFooter copyrightname="ShashankReddyYalala" />

  </div>
</template>
<script>

  


import MyHeader from './components/MyHeader.vue'
import LaptopList from './components/LaptopList.vue'
import MyFooter from './components/MyFooter.vue'


// data url: https://laptop-magbackend.herokuapp.com/api , this might be different for you
export default {
  name: 'App',
  components: {
    //  register the component 
    MyHeader,
    LaptopList,
    MyFooter,
  },

  data(){
    return {
      laptops: []
    }
  },
  methods: {
    // promises

      async fetchLaptops(){
         const res= await fetch('https://laptop-magbackend.herokuapp.com/api')
         const data= await res.json();
         console.log(data);
         return data
      }

  },

  async created(){
    this.laptops = await this.fetchLaptops()
    console.log(this.laptops)
  }
}
</script>










<style>


 

</style>


