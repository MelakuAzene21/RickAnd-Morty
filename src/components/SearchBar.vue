<template>
  <div class="relative">
    <div class="relative">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        type="text"
        placeholder="Search characters, episodes, locations..."
        class="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
      />
      <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>

    <!-- Search Results Dropdown -->
    <div
      v-if="showResults && (characters.length || episodes.length || locations.length)"
      class="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto"
    >
      <!-- Characters -->
      <div v-if="characters.length" class="p-4 border-b border-gray-700">
        <h3 class="text-sm font-semibold text-purple-400 mb-3 flex items-center">
          <i class="fas fa-users mr-2"></i>Characters
        </h3>
        <div class="space-y-2">
          <router-link
            v-for="character in characters.slice(0, 3)"
            :key="character.id"
            :to="{ name: 'CharacterDetails', params: { id: character.id }}"
            @click="clearSearch"
            class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <img :src="character.image" :alt="character.name" class="w-10 h-10 rounded-full object-cover" />
            <div>
              <div class="text-white font-medium">{{ character.name }}</div>
              <div class="text-gray-400 text-sm">{{ character.species }}</div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Episodes -->
      <div v-if="episodes.length" class="p-4 border-b border-gray-700">
        <h3 class="text-sm font-semibold text-blue-400 mb-3 flex items-center">
          <i class="fas fa-tv mr-2"></i>Episodes
        </h3>
        <div class="space-y-2">
          <router-link
            v-for="episode in episodes.slice(0, 3)"
            :key="episode.id"
            :to="{ name: 'EpisodeDetails', params: { id: episode.id }}"
            @click="clearSearch"
            class="block p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <div class="text-white font-medium">{{ episode.name }}</div>
            <div class="text-gray-400 text-sm">{{ episode.episode }}</div>
          </router-link>
        </div>
      </div>

      <!-- Locations -->
      <div v-if="locations.length" class="p-4">
        <h3 class="text-sm font-semibold text-orange-400 mb-3 flex items-center">
          <i class="fas fa-map-marker-alt mr-2"></i>Locations
        </h3>
        <div class="space-y-2">
          <router-link
            v-for="location in locations.slice(0, 3)"
            :key="location.id"
            :to="{ name: 'LocationDetails', params: { id: location.id }}"
            @click="clearSearch"
            class="block p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <div class="text-white font-medium">{{ location.name }}</div>
            <div class="text-gray-400 text-sm">{{ location.type }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const searchQuery = ref('')
const showResults = ref(false)
const characters = ref([])
const episodes = ref([])
const locations = ref([])
const searchTimeout = ref(null)

const handleSearch = () => {
  if (searchTimeout.value) {
    clearTimeout(searchTimeout.value)
  }

  searchTimeout.value = setTimeout(async () => {
    if (searchQuery.value.trim().length < 2) {
      showResults.value = false
      return
    }

    await performSearch()
    showResults.value = true
  }, 300)
}

const performSearch = async () => {
  const query = `
    query Search($name: String!) {
      characters(filter: { name: $name }) {
        results {
          id
          name
          species
          image
        }
      }
      episodes(filter: { name: $name }) {
        results {
          id
          name
          episode
        }
      }
      locations(filter: { name: $name }) {
        results {
          id
          name
          type
        }
      }
    }
  `

  try {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { name: searchQuery.value }
      })
    })

    const { data } = await response.json()
    characters.value = data.characters.results || []
    episodes.value = data.episodes.results || []
    locations.value = data.locations.results || []
  } catch (error) {
    console.error('Search error:', error)
  }
}

const clearSearch = () => {
  searchQuery.value = ''
  showResults.value = false
  characters.value = []
  episodes.value = []
  locations.value = []
}

// Close search results when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.relative')) {
    showResults.value = false
  }
})
</script>