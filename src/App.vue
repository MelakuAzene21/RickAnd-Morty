
<template >
 <div class="bg-gray-800">
    <div class=" text-center text-5xl bg-gray-900 p-4 text-green-600 font-extrabold italic h-15 fixed z-30  top-0 w-full mt-0 font-serif ">
        RICK AND MORTY API TV SHOW
    </div> 
   
    <div class=" grid bg-gray-700 text-white ml-0 mt-14  " >
  <div class=" flex text-white  w-full bg-gray-800 pl-5 mt-2 fixed z-30 pb-5">
            <span class=" mt-4 ml-3  mr-3"><router-link to="/"  class=" hover:underline hover:bg-gray-900  p-4 rounded-xl h-1   ">Home</router-link></span>     
            <span class=" mt-4 ml-3 "><router-link to="/episodes"  class=" hover:underline hover:bg-gray-900 p-4 rounded-xl h-1   ">Episodes</router-link></span>     
           <span class=" mt-4 ml-12"> <router-link to="/characters/" class=" hover:underline hover:bg-gray-900 p-4 rounded-xl h-1    ">Characters</router-link></span>   
           <span class=" mt-4 ml-12"> <router-link to="/location"    class="  hover:underline hover:bg-gray-900  p-4  rounded-xl h-1   ">Locations</router-link></span>
     </div> 
   <router-view/>  
  </div> 
 
  
   
  <footer class=" bg-gray-900 text-white  w-full ">
     
   <ul class=" flex  mb-2 p-8 gap-2 justify-center">
         <span > <img src="./assets/Images/githubImage.png" alt="githubIcon" class="w-6 h-6 rounded-full"></span>
        <span class="mr-6 hover:bg-sky-600 hover:rounded-lg "><a href="https://github.com/MelakuAzene21/RickAnd-Morty" target="_blank"> Github</a></span>
        <span><img src="./assets/Images/figmaimageicon.png" alt="figmaIcon" class="w-6 h-6 ml-4 rounded-full" ></span>
         <span class="hover:bg-sky-500 hover:rounded-lg"><a href="https://www.figma.com/design/AoWk7SqvEsEwNrFbZLGNLj/MINAB_PROJECT_FIGMA?node-id=0-1&t=CJqd8oeR52XhOEMP-0" target="_blank">  Figma</a></span>
    </ul>
    <p class="text-center text-lg">&copy;2024&nbsp; Developed By <span class="italic text-sky-500">Melaku Azene</span></p>
    </footer>
  </div>
 </template>

<script setup>

</script>
