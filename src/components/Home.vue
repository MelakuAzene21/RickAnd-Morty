<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <!-- Official TV Show Badge -->
      <div class="flex justify-center items-center space-x-4 mb-6">
        <div class="bg-gradient-to-r from-green-400 to-blue-500 text-black px-4 py-2 rounded-full font-bold text-sm">
          <i class="fas fa-tv mr-2"></i>OFFICIAL TV SERIES
        </div>
        <div class="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
          <i class="fas fa-broadcast-tower mr-2"></i>ADULT SWIM
        </div>
        <div class="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
          <i class="fas fa-award mr-2"></i>EMMY NOMINATED
        </div>
      </div>
      
      <div class="mb-8">
        <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Welcome to the Multiverse
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The official companion to the Emmy-nominated Adult Swim series. Dive into the chaotic and brilliant world of Rick and Morty across infinite dimensions.
        </p>
      </div>
      
      <!-- Season Info Banner -->
      <div class="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 rounded-2xl p-6 border border-green-500/30 mb-8 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-center md:text-left mb-4 md:mb-0">
            <h3 class="text-2xl font-bold text-green-400 mb-2">Season 7 Now Available</h3>
            <p class="text-gray-300">New episodes featuring interdimensional chaos and scientific mayhem</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">10</div>
              <div class="text-xs text-gray-400">Episodes</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-400">9.2</div>
              <div class="text-xs text-gray-400">IMDb Rating</div>
            </div>
            <button class="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105">
              <i class="fas fa-play mr-2"></i>Watch Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Carousel -->
    <section class="mb-16">
      <RandomGenerator class="mb-8"/>
      <Gallery class="mb-8"/>
    </section>

    <!-- Show Information Cards -->
    <section class="grid md:grid-cols-2 gap-8 mb-16">
      <!-- About Card -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
            <i class="fas fa-tv text-white text-xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-white">Official Series Info</h2>
        </div>
        <p class="text-gray-300 leading-relaxed mb-6">
          Rick and Morty is the Emmy-nominated Adult Swim series created by Justin Roiland and Dan Harmon. Follow the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted grandson Morty Smith as they explore infinite realities across the multiverse.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Sci-Fi</span>
          <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Comedy</span>
          <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Adventure</span>
          <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">Animation</span>
          <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30">Adult Swim</span>
        </div>
        <div class="flex items-center space-x-4 text-sm text-gray-400">
          <span><i class="fas fa-calendar mr-1"></i>2013 - Present</span>
          <span><i class="fas fa-clock mr-1"></i>22 min episodes</span>
          <span><i class="fas fa-tv mr-1"></i>7 Seasons</span>
        </div>
      </div>

      <!-- Stats Card -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
            <i class="fas fa-chart-bar text-white text-xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-white">Show Statistics</h2>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="text-2xl font-bold text-green-400 mb-1">826</div>
            <div class="text-sm text-gray-400">Characters</div>
          </div>
          <div class="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="text-2xl font-bold text-blue-400 mb-1">71</div>
            <div class="text-sm text-gray-400">Episodes</div>
          </div>
          <div class="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="text-2xl font-bold text-purple-400 mb-1">126</div>
            <div class="text-sm text-gray-400">Locations</div>
          </div>
          <div class="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="text-2xl font-bold text-orange-400 mb-1">7</div>
            <div class="text-sm text-gray-400">Seasons</div>
          </div>
        </div>
        <div class="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
          <div class="flex items-center justify-center space-x-6 text-sm">
            <div class="text-center">
              <i class="fas fa-trophy text-yellow-400 text-xl mb-1"></i>
              <div class="text-white font-semibold">Emmy Nominated</div>
              <div class="text-gray-400 text-xs">Outstanding Animated Program</div>
            </div>
            <div class="text-center">
              <i class="fas fa-users text-blue-400 text-xl mb-1"></i>
              <div class="text-white font-semibold">50M+ Fans</div>
              <div class="text-gray-400 text-xs">Global Viewership</div>
            </div>
            <div class="text-center">
              <i class="fas fa-globe text-purple-400 text-xl mb-1"></i>
              <div class="text-white font-semibold">190+ Countries</div>
              <div class="text-gray-400 text-xs">Worldwide Broadcast</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creators & Cast Section -->
    <section class="grid md:grid-cols-3 gap-8 mb-16">
      <!-- Creators -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <i class="fas fa-user-tie text-green-400 mr-3"></i>
          Creators
        </h2>
        <div class="space-y-4">
          <div class="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
            <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-bold">JR</span>
            </div>
            <div>
              <h3 class="font-bold text-white">Justin Roiland</h3>
              <p class="text-sm text-gray-400">Co-Creator, Voice Actor</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-bold">DH</span>
            </div>
            <div>
              <h3 class="font-bold text-white">Dan Harmon</h3>
              <p class="text-sm text-gray-400">Co-Creator, Writer</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Ratings -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <i class="fas fa-star text-yellow-400 mr-3"></i>
          Ratings
        </h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="flex items-center">
              <i class="fab fa-imdb text-yellow-400 text-2xl mr-3"></i>
              <span class="text-white font-semibold">IMDb</span>
            </div>
            <div class="text-right">
              <div class="text-xl font-bold text-yellow-400">9.2</div>
              <div class="text-sm text-gray-400">/10</div>
            </div>
          </div>
          <div class="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="flex items-center">
              <i class="fas fa-tomato text-red-400 text-2xl mr-3"></i>
              <span class="text-white font-semibold">Rotten Tomatoes</span>
            </div>
            <div class="text-right">
              <div class="text-xl font-bold text-red-400">95</div>
              <div class="text-sm text-gray-400">%</div>
            </div>
          </div>
          <div class="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="flex items-center">
              <i class="fas fa-chart-line text-green-400 text-2xl mr-3"></i>
              <span class="text-white font-semibold">Metacritic</span>
            </div>
            <div class="text-right">
              <div class="text-xl font-bold text-green-400">87</div>
              <div class="text-sm text-gray-400">/100</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Network Info -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <i class="fas fa-broadcast-tower text-red-400 mr-3"></i>
          Network & Streaming
        </h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold text-xs">AS</span>
              </div>
              <div>
                <div class="text-white font-semibold">Adult Swim</div>
                <div class="text-gray-400 text-sm">Original Network</div>
              </div>
            </div>
            <div class="text-green-400 font-semibold">Live</div>
          </div>
          <div class="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold text-xs">HBO</span>
              </div>
              <div>
                <div class="text-white font-semibold">HBO Max</div>
                <div class="text-gray-400 text-sm">Streaming Platform</div>
              </div>
            </div>
            <div class="text-blue-400 font-semibold">Available</div>
          </div>
          <div class="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-600">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <span class="text-white font-bold text-xs">HU</span>
              </div>
              <div>
                <div class="text-white font-semibold">Hulu</div>
                <div class="text-gray-400 text-sm">Streaming Platform</div>
              </div>
            </div>
            <div class="text-orange-400 font-semibold">Available</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-2">Explore the Official Multiverse</h2>
        <p class="text-gray-400">Dive deep into the Rick and Morty universe with official content</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <router-link 
          to="/episodes" 
          class="group bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-center hover:from-blue-500 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
        >
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
            <i class="fas fa-tv text-3xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Episodes</h3>
          <p class="text-blue-100 text-sm">Watch all 71 episodes across 7 seasons of interdimensional chaos</p>
        </router-link>

        <router-link 
          to="/characters" 
          class="group bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-center hover:from-purple-500 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        >
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
            <i class="fas fa-users text-3xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Characters</h3>
          <p class="text-purple-100 text-sm">Meet 826+ characters from across infinite realities and dimensions</p>
        </router-link>

        <router-link 
          to="/location" 
          class="group bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-6 text-center hover:from-orange-500 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
        >
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
            <i class="fas fa-map-marker-alt text-3xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Locations</h3>
          <p class="text-orange-100 text-sm">Visit 126+ locations spanning multiple universes and dimensions</p>
        </router-link>
      </div>
      
      <!-- Official Links -->
      <div class="mt-8 pt-8 border-t border-gray-700">
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#" class="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-300">
            <i class="fas fa-play text-red-400"></i>
            <span class="text-white text-sm">Watch on Adult Swim</span>
          </a>
          <a href="#" class="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-300">
            <i class="fas fa-shopping-cart text-green-400"></i>
            <span class="text-white text-sm">Official Merchandise</span>
          </a>
          <a href="#" class="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-300">
            <i class="fab fa-twitter text-blue-400"></i>
            <span class="text-white text-sm">@RickandMorty</span>
          </a>
          <a href="#" class="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-300">
            <i class="fab fa-instagram text-pink-400"></i>
            <span class="text-white text-sm">Official Instagram</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Gallery from './Gallery.vue';
import RandomGenerator from './RandomGenerator.vue';
</script>

<style scoped>
/* Additional custom styles if needed */
</style>