<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
        Characters
      </h1>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        Meet the diverse cast of beings from across the multiverse
      </p>
    </div>

    <p v-if="error" class="text-red-500">Something went wrong...</p>
    <div v-else-if="loading && allCharacters.length === 0" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      <span class="ml-3 text-purple-400 text-lg">Loading characters...</span>
    </div>
    <div v-else>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <div v-for="character in displayedCharacters" :key="character.id">
          <router-link 
            :to="{ name: 'CharacterDetails', params: { id: character.id }}" 
            class="group block"
          >
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-center">
              <div class="relative mb-4">
                <img 
                  :src="character.image" 
                  :alt="character.name" 
                  class="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover border-2 border-gray-600 group-hover:border-purple-400 transition-colors duration-300" 
                />
                <div class="absolute inset-0 rounded-full bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300"></div>
              </div>
              <h3 class="text-sm md:text-base font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                {{ character.name }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button 
          v-if="nextPage" 
          @click="loadMore" 
          class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          <i class="fas fa-plus mr-2"></i>
          Load More Characters
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const allCharacters = ref([])
const displayedCharacters = ref([])
const loading = ref(true)
const error = ref(null)
const nextPage = ref(1)

const CHARACTERS_QUERY = `
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        next
      }
      results {
        id
        name
        image
      }
    }
  }
`

const fetchCharacters = async (page) => {
  console.log('Fetching characters from page:', page)
  try {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CHARACTERS_QUERY,
        variables: { page },
      }),
    })
    
    const { data } = await response.json()
    
    if (data.errors) {
      throw new Error(data.errors[0].message)
    }
    
    allCharacters.value = [...allCharacters.value, ...data.characters.results]
    
    if (data.characters.info.next) {
      nextPage.value = data.characters.info.next
    } else {
      nextPage.value = null
      loading.value = false
    }
  } catch (err) {
    error.value = err.message
    loading.value = false
  }
}

const loadMore = () => {
  if (nextPage.value) {
    fetchCharacters(nextPage.value)
  }
}

onMounted(() => {
  fetchCharacters(nextPage.value)
})

watchEffect(() => {
  displayedCharacters.value = allCharacters.value.slice(0, displayedCharacters.value.length + 20)
})
</script>
