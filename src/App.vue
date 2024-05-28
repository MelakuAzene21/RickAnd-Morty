<template>
  <div class="bg-gray-800">
    <!-- Header -->
    <div class="text-center   bg-gray-900    text-3xl md:text-5xl  p-4 text-green-600 font-extrabold italic fixed z-30 top-0 w-full font-serif">
    <span class="invisible  sm:visible">  RICK AND MORTY API TV SHOW</span>
    </div>

    <!-- Main Content -->
    <div class="grid bg-gray-700 text-white mt-20">
      <!-- Navigation -->
      <div class="    flex flex-wrap justify-center bg-gray-800 p-2 fixed w-full top-16 z-30">
        <span class="m-2"><router-link to="/" class="hover:underline hover:bg-gray-900 p-2 rounded-xl">Home</router-link></span>
        <span class="m-2"><router-link to="/episodes" class="hover:underline hover:bg-gray-900 p-2 rounded-xl">Episodes</router-link></span>
        <span class="m-2"><router-link to="/characters" class="hover:underline hover:bg-gray-900 p-2 rounded-xl">Characters</router-link></span>
        <span class="m-2"><router-link to="/location" class="hover:underline hover:bg-gray-900 p-2 rounded-xl">Locations</router-link></span>
      </div>
      <!-- Router View -->
      <main class="mt-32 p-4">
        <router-view />
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white w-full mt-4">
      <ul class=" block  ml-16  sm:flex flex-wrap justify-center p-8 gap-4 ">
        <li>
          <img src="./assets/Images/githubImage.png" alt="githubIcon" class="w-6 h-6 rounded-full">
          <span class="hover:bg-sky-600 hover:rounded-lg ml-2">
            <a href="https://github.com/MelakuAzene21/RickAnd-Morty" target="_blank">Github</a>
          </span>
        </li>
        <li>
          <img src="./assets/Images/figmaimageicon.png" alt="figmaIcon" class="w-6 h-6 rounded-full">
          <span class="hover:bg-sky-500 hover:rounded-lg ml-2">
            <a href="https://www.figma.com/design/AoWk7SqvEsEwNrFbZLGNLj/MINAB_PROJECT_FIGMA?node-id=0-1&t=CJqd8oeR52XhOEMP-0" target="_blank">Figma</a>
          </span>
        </li>
      </ul>
      <p class="text-center text-lg p-4">&copy;2024&nbsp; Developed By <span class="italic text-sky-500">Melaku Azene</span></p>
    </footer>
  </div>
</template>

<script setup>
</script>
