<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent mb-4">
        Your Favorites
      </h1>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        Your saved characters, episodes, and locations from across the multiverse
      </p>
    </div>

    <!-- Favorite Characters -->
    <section v-if="favoriteCharacters.length">
      <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
        <i class="fas fa-users text-purple-400 mr-3"></i>
        Favorite Characters ({{ favoriteCharacters.length }})
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-12">
        <div v-for="character in favoriteCharacters" :key="character.id">
          <router-link :to="{ name: 'CharacterDetails', params: { id: character.id }}" class="group block">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center">
              <img 
                :src="character.image" 
                :alt="character.name" 
                class="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-gray-600 group-hover:border-purple-400 transition-colors duration-300"
              />
              <h3 class="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                {{ character.name }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Favorite Episodes -->
    <section v-if="favoriteEpisodes.length">
      <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
        <i class="fas fa-tv text-blue-400 mr-3"></i>
        Favorite Episodes ({{ favoriteEpisodes.length }})
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        <div v-for="episode in favoriteEpisodes" :key="episode.id">
          <router-link :to="{ name: 'EpisodeDetails', params: { id: episode.id }}" class="group block">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-semibold text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full border border-blue-500/30">
                  {{ episode.episode }}
                </span>
                <i class="fas fa-play-circle text-gray-600 group-hover:text-blue-400 transition-colors duration-300 text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {{ episode.name }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Favorite Locations -->
    <section v-if="favoriteLocations.length">
      <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
        <i class="fas fa-map-marker-alt text-orange-400 mr-3"></i>
        Favorite Locations ({{ favoriteLocations.length }})
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        <div v-for="location in favoriteLocations" :key="location.id">
          <router-link :to="{ name: 'LocationDetails', params: { id: location.id }}" class="group block">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-map-marker-alt text-white text-lg"></i>
                </div>
                <i class="fas fa-arrow-right text-gray-600 group-hover:text-orange-400 transition-colors duration-300"></i>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                {{ location.name }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Empty State -->
    <div v-if="!favoriteCharacters.length && !favoriteEpisodes.length && !favoriteLocations.length" class="text-center py-20">
      <div class="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
        <i class="far fa-heart text-4xl text-gray-600"></i>
      </div>
      <h3 class="text-2xl font-bold text-white mb-4">No Favorites Yet</h3>
      <p class="text-gray-400 mb-8 max-w-md mx-auto">
        Start exploring characters, episodes, and locations to add them to your favorites!
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <router-link to="/characters" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
          Browse Characters
        </router-link>
        <router-link to="/episodes" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
          Browse Episodes
        </router-link>
        <router-link to="/location" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
          Browse Locations
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavorites } from '../composables/useFavorites.js'

const { favoriteCharacters, favoriteEpisodes, favoriteLocations } = useFavorites()
</script>