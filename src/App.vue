<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <!-- Header -->
    <header class="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-green-500/30 shadow-lg shadow-green-500/10">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-center space-x-4">
          <div class="hidden md:flex items-center space-x-2">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <i class="fas fa-atom text-black text-sm"></i>
            </div>
            <span class="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">ADULT SWIM</span>
          </div>
          <div class="text-center">
            <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              RICK AND MORTY
            </h1>
            <p class="text-gray-400 text-xs mt-1 hidden sm:block">Official Adult Swim Series • Interdimensional Adventures</p>
          </div>
          <div class="hidden md:flex items-center space-x-2">
            <span class="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">EMMY NOMINATED</span>
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i class="fas fa-tv text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="fixed top-20 md:top-24 w-full z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      <div class="container mx-auto px-4 py-3">
        <div class="flex flex-wrap justify-center gap-2 md:gap-6">
          <router-link 
            to="/" 
            class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-green-500 hover:text-black hover:shadow-lg hover:shadow-green-500/25 text-gray-300 hover:scale-105"
          >
            <i class="fas fa-home mr-2"></i>Home
          </router-link>
          <router-link 
            to="/episodes" 
            class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 text-gray-300 hover:scale-105"
          >
            <i class="fas fa-tv mr-2"></i>Episodes
          </router-link>
          <router-link 
            to="/characters" 
            class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 text-gray-300 hover:scale-105"
          >
            <i class="fas fa-users mr-2"></i>Characters
          </router-link>
          <router-link 
            to="/location" 
            class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/25 text-gray-300 hover:scale-105"
          >
            <i class="fas fa-map-marker-alt mr-2"></i>Locations
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-36 md:pt-40 min-h-screen">
      <div class="container mx-auto px-4">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-black border-t border-gray-800 mt-16">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/MelakuAzene21/RickAnd-Morty" 
              target="_blank" 
              class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105"
            >
              <i class="fab fa-github text-xl"></i>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.figma.com/design/AoWk7SqvEsEwNrFbZLGNLj/MINAB_PROJECT_FIGMA?node-id=0-1&t=CJqd8oeR52XhOEMP-0" 
              target="_blank" 
              class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105"
            >
              <i class="fab fa-figma text-xl"></i>
              <span>Figma</span>
            </a>
          </div>
          <div class="text-center text-gray-400">
            <p>&copy; 2024 Developed by <span class="text-green-400 font-semibold">Melaku Azene</span></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-active {
  @apply bg-green-500 text-black shadow-lg shadow-green-500/25 scale-105;
}
</style>