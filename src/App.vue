<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <!-- Header -->
    <header class="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-green-500/30 shadow-lg shadow-green-500/10">
      <div class="container mx-auto px-4 py-4">
        <!-- Search Bar -->
        <div class="mb-4">
          <SearchBar />
        </div>
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
          <router-link 
            to="/favorites" 
            class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25 text-gray-300 hover:scale-105"
          >
            <i class="fas fa-heart mr-2"></i>Favorites
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-44 md:pt-48 min-h-screen">
      <div class="container mx-auto px-4">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-green-500/30 mt-16">
      <div class="container mx-auto px-4 py-8">
        <!-- Main Footer Content -->
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- About Section -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <i class="fas fa-atom text-black text-lg"></i>
              </div>
              <h3 class="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Rick and Morty Explorer
              </h3>
            </div>
            <p class="text-gray-400 mb-4 leading-relaxed">
              Your ultimate companion to the Rick and Morty multiverse. Explore 826+ characters, 71 episodes, 
              and 126+ locations across infinite dimensions. Built with Vue.js and powered by the official Rick and Morty API.
            </p>
            <div class="flex items-center space-x-4 text-sm text-gray-500">
              <span class="flex items-center">
                <i class="fas fa-tv mr-2 text-green-400"></i>
                Official Adult Swim Series
              </span>
              <span class="flex items-center">
                <i class="fas fa-award mr-2 text-yellow-400"></i>
                Emmy Nominated
              </span>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
              <i class="fas fa-link text-blue-400 mr-2"></i>
              Quick Links
            </h4>
            <ul class="space-y-2">
              <li>
                <router-link to="/" class="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
                  <i class="fas fa-home mr-2 text-xs"></i>Home
                </router-link>
              </li>
              <li>
                <router-link to="/characters" class="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center">
                  <i class="fas fa-users mr-2 text-xs"></i>Characters
                </router-link>
              </li>
              <li>
                <router-link to="/episodes" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <i class="fas fa-tv mr-2 text-xs"></i>Episodes
                </router-link>
              </li>
              <li>
                <router-link to="/location" class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <i class="fas fa-map-marker-alt mr-2 text-xs"></i>Locations
                </router-link>
              </li>
              <li>
                <router-link to="/favorites" class="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center">
                  <i class="fas fa-heart mr-2 text-xs"></i>Favorites
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Developer & Resources -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
              <i class="fas fa-code text-purple-400 mr-2"></i>
              Resources
            </h4>
            <ul class="space-y-2">
              <li>
                <a 
                  href="https://github.com/MelakuAzene21/RickAnd-Morty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i class="fab fa-github mr-2 text-sm group-hover:text-green-400"></i>
                  Source Code
                </a>
              </li>
              <li>
                <a 
                  href="https://www.figma.com/design/AoWk7SqvEsEwNrFbZLGNLj/MINAB_PROJECT_FIGMA?node-id=0-1&t=CJqd8oeR52XhOEMP-0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i class="fab fa-figma mr-2 text-sm group-hover:text-purple-400"></i>
                  Design System
                </a>
              </li>
              <li>
                <a 
                  href="https://rickandmortyapi.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i class="fas fa-database mr-2 text-sm group-hover:text-blue-400"></i>
                  Rick & Morty API
                </a>
              </li>
              <li>
                <a 
                  href="https://vuejs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i class="fab fa-vuejs mr-2 text-sm group-hover:text-green-400"></i>
                  Vue.js
                </a>
              </li>
              <li>
                <a 
                  href="https://tailwindcss.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i class="fas fa-palette mr-2 text-sm group-hover:text-cyan-400"></i>
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 mb-8 border border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div class="group">
              <div class="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">826+</div>
              <div class="text-sm text-gray-400">Characters</div>
            </div>
            <div class="group">
              <div class="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">71</div>
              <div class="text-sm text-gray-400">Episodes</div>
            </div>
            <div class="group">
              <div class="text-2xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors duration-300">126+</div>
              <div class="text-sm text-gray-400">Locations</div>
            </div>
            <div class="group">
              <div class="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">7</div>
              <div class="text-sm text-gray-400">Seasons</div>
            </div>
          </div>
        </div>

        <!-- Social & Official Links -->
        <div class="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a 
              href="https://www.adultswim.com/videos/rick-and-morty" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              <i class="fas fa-tv"></i>
              <span>Watch on Adult Swim</span>
            </a>
            <a 
              href="https://shop.adultswim.com/collections/rick-and-morty" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <i class="fas fa-shopping-cart"></i>
              <span>Official Merch</span>
            </a>
            <a 
              href="https://twitter.com/RickandMorty" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <i class="fab fa-twitter"></i>
              <span>@RickandMorty</span>
            </a>
          </div>
          
          <div class="text-center md:text-right">
            <p class="text-gray-400 text-sm mb-2">
              &copy; 2024 Developed with ❤️ by 
              <a 
                href="https://github.com/MelakuAzene21" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-green-400 font-semibold hover:text-green-300 transition-colors duration-300"
              >
                Melaku Azene
              </a>
            </p>
            <p class="text-gray-500 text-xs">
              Built with Vue.js • Powered by Rick and Morty API
            </p>
            <div class="flex justify-center md:justify-end items-center mt-2 space-x-2 text-xs text-gray-500">
              <span class="flex items-center">
                <i class="fas fa-code mr-1 text-green-400"></i>
                Open Source
              </span>
              <span>•</span>
              <span class="flex items-center">
                <i class="fas fa-heart mr-1 text-red-400"></i>
                Made for Fans
              </span>
            </div>
          </div>
        </div>
        
        <!-- Wubba Lubba Dub Dub -->
        <div class="text-center mt-6 pt-6 border-t border-gray-800">
          <p class="text-green-400 font-bold text-lg mb-2">🛸 Wubba Lubba Dub Dub! 🛸</p>
          <p class="text-gray-400 text-sm italic">
            "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV." - Morty Smith
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import SearchBar from './components/SearchBar.vue'
</script>

<style scoped>
.router-link-active {
  @apply bg-green-500 text-black shadow-lg shadow-green-500/25 scale-105;
}
</style>