<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-4">
        Locations
      </h1>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        Explore planets, dimensions, and realities across the multiverse
      </p>
    </div>

    <p v-if="error" class="text-red-500">Something went wrong: {{ error }}</p>
    <div v-else-if="loading && allLocations.length === 0" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      <span class="ml-3 text-orange-400 text-lg">Loading locations...</span>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="location in displayedLocations" :key="location.id">
          <router-link 
            :to="{ name: 'LocationDetails', params: { id: location.id }}" 
            class="group block"
          >
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 h-full">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-map-marker-alt text-white text-lg"></i>
                </div>
                <i class="fas fa-arrow-right text-gray-600 group-hover:text-orange-400 transition-colors duration-300"></i>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                {{ location.name }}
              </h3>
              <p class="text-gray-400 text-sm mt-2">Click to explore</p>
            </div>
          </router-link>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button 
          v-if="nextPage" 
          @click="loadMore" 
          class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
        >
          <i class="fas fa-plus mr-2"></i>
          Load More Locations
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const allLocations = ref([])
const displayedLocations = ref([])
const loading = ref(true)
const error = ref(null)
const nextPage = ref(1)

const LOCATION_QUERY = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      info {
        next
      }
      results {
        id
        name
      }
    }
  }
`

const fetchLocations = async (page) => {
  console.log('Fetching locations from page:', page)
  try {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: LOCATION_QUERY.loc.source.body,
        variables: { page },
      }),
    })

    const { data, errors } = await response.json()
    
    if (errors) {
      throw new Error(errors[0].message)
    }

    allLocations.value = [...allLocations.value, ...data.locations.results]
    
    if (data.locations.info.next) {
      nextPage.value = data.locations.info.next
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
    fetchLocations(nextPage.value)
  }
}

onMounted(() => {
  fetchLocations(nextPage.value)
})

watchEffect(() => {
  displayedLocations.value = allLocations.value.slice(0, displayedLocations.value.length + 20)
})
</script>
