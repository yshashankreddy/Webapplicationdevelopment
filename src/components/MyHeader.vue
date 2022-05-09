<template>
<div class="myHeader">
    <h1>
        <b>{{Title}}</b>
       
            <img src="../assets/hp.jpg">
            <img src="../assets/acer.jpg">
             <img src="../assets/lenovo.png">
             <img src="../assets/asus.jpg">
             <img src="../assets/dell.jpg">

        </h1>
    
</div>
 
</template>

<script>

export default{ 
    name: 'MyHeader',
    props:{
        Title: String,
    }
}

</script>

<style scoped>

.myHeader{
    text-align: center;
     background-color: rgb(33, 14, 65);
     color: white;
     height: 75px;
}
img{
    padding-top: 15px;
    height: 50px;
    float: right;
}
b{
    padding-top: 15px;
    float: left;
}
@media only screen and (max-width:500px){
   img{
       display: none;
   }
   
}


</style>