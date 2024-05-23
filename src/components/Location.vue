<template>
  <div class="mt-16">
    <p v-if="error" class="text-red-500">Something went wrong: {{ error }}</p>
    <p v-else-if="loading && allLocations.length === 0" class="text-green-500">Loading...</p>
    <div v-else>
      <h1 class="mt-6 mb-2 text-center font-serif italic font-extralight underline text-green-400">LOCATIONS</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="location in displayedLocations" :key="location.id">
          <router-link :to="{ name: 'LocationDetails', params: { id: location.id }}" class="cursor-pointer hover:underline">
            <div class="mt-2 text-lg font-semibold border-2 w-auto border-gray-800 h-24 text-center p-6 bg-gray-900 rounded-lg hover:bg-green-500 ml-5">{{ location.name }}</div>
          </router-link>
        </div>
      </div>
      <div class="text-center">  <button v-if="nextPage" @click="loadMore" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg mx-auto  hover:bg-sky-800">Load More</button>
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
