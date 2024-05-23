<template>
  <div class="mt-20">
    <p v-if="error" class="text-red-500">Something went wrong...</p>
    <p v-else-if="loading && allCharacters.length === 0" class="text-green-600">Loading...</p>
    <div v-else>
      <h1 class="mt-8 mb-3 text-center font-serif italic font-extralight text-green-400  underline ">CHARACTERS</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div v-for="character in displayedCharacters" :key="character.id">
          <router-link :to="{ name: 'CharacterDetails', params: { id: character.id }}" class="cursor-pointer hover:underline">
            <img :src="character.image" :alt="character.name" class="w-36 h-36 rounded-full mx-auto" />
            <p class="mt-2 text-lg font-semibold text-center">{{ character.name }}</p>
          </router-link>
        </div>
      </div>
      <div class="text-center"><button v-if="nextPage" @click="loadMore" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg mx-auto  hover:bg-sky-800 ">Load More</button></div>
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
