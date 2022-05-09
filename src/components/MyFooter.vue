<template>
<div class="myFooter">
   
    
    @copyright <b>{{copyrightname}}</b>
    
</div>
 
</template>

<script>

export default{ 
    name: 'MyFooter',
    props:{
        copyrightname: String,
    }
}

</script>

<style scoped>


.myFooter{
    background-color: rgb(33, 14, 65);
    text-align: center;
    color: white;
    height: 30px;
}

</style>