<template>
    


<div id="laptop">  
   <h3 class="Name"> {{laptop.name}}</h3>
  <img class="image" :src="laptop.image">
   <ul class="list"> 
       <li>
          <b> Screen-Size:</b>{{laptop.Screensize}}
       </li>
        <li>
          <b>  Storage:</b>{{laptop.Storage}}
       </li>
        <li>
           <b> Processor:</b>{{laptop.Processor}}
       </li>
        <li>
           <b> RAM:</b>{{laptop.RAM}}
       </li>
        <li>
           <b> Operating-System:</b>{{laptop.OperatingSystem}}
       </li>
        <li>
           <b> Battery-life:</b>{{laptop.Batterylife}}
       </li>
        <li>
            <div v-if="laptop.Touchscreen== true">
             <b> Touch-Screen:</b>YES
           </div>
           <div v-else> <b>Touch-Screen:</b>NO
           </div>
       </li>
   </ul>
</div>

</template>

<script>

export default{
    name: 'MyLaptop',
    props:{
        laptop: Array
    }
}
</script>

<style scoped>





#laptop{
   background-color:#e5e3e9;
    border-radius: 10px;
    border:1px solid black;
    display: grid;
    grid-template-rows: 0.5fr 0.5fr;
    grid-template-columns: 0.5fr 1fr;
    grid-template-areas:
    "name name" 
    "image list"; 
    grid-gap:0.3rem;
}

.image{
     width: 350px;
    height: 300px;
    grid-area: image;
}

.list{
    grid-area: list;
}

.Name{
    grid-area: name;
}
li{
    padding: 10px;
}


@media only screen and (max-width:500px){
    #laptop{
        background-color:#e5e3e9;
    border-radius: 10px;
    border:1px solid black;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
    "name" 
    "image"
    "list"; 
    grid-gap:0.3rem;
    }
    .image{
    
    grid-area: image;
}

.list{
    grid-area: list;
}

.Name{
    grid-area: name;
}
}

</style>