<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-white mb-2 flex items-center justify-center">
        <i class="fas fa-dice text-green-400 mr-3"></i>
        Random Generator
      </h2>
      <p class="text-gray-400">Discover random characters and episodes from the multiverse</p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Random Character -->
      <div class="text-center">
        <button
          @click="getRandomCharacter"
          :disabled="loadingCharacter"
          class="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 mb-4"
        >
          <i class="fas fa-user mr-2" :class="{ 'fa-spin': loadingCharacter }"></i>
          {{ loadingCharacter ? 'Loading...' : 'Random Character' }}
        </button>

        <div v-if="randomCharacter" class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
          <router-link :to="{ name: 'CharacterDetails', params: { id: randomCharacter.id }}" class="block group">
            <img
              :src="randomCharacter.image"
              :alt="randomCharacter.name"
              class="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-purple-400 group-hover:border-purple-300 transition-colors duration-300"
            />
            <h3 class="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
              {{ randomCharacter.name }}
            </h3>
            <p class="text-gray-400 text-sm">{{ randomCharacter.species }}</p>
          </router-link>
        </div>
      </div>

      <!-- Random Episode -->
      <div class="text-center">
        <button
          @click="getRandomEpisode"
          :disabled="loadingEpisode"
          class="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 mb-4"
        >
          <i class="fas fa-tv mr-2" :class="{ 'fa-spin': loadingEpisode }"></i>
          {{ loadingEpisode ? 'Loading...' : 'Random Episode' }}
        </button>

        <div v-if="randomEpisode" class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
          <router-link :to="{ name: 'EpisodeDetails', params: { id: randomEpisode.id }}" class="block group">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-blue-300 group-hover:to-cyan-400 transition-colors duration-300">
              <i class="fas fa-play text-white text-xl"></i>
            </div>
            <h3 class="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
              {{ randomEpisode.name }}
            </h3>
            <p class="text-gray-400 text-sm">{{ randomEpisode.episode }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const randomCharacter = ref(null)
const randomEpisode = ref(null)
const loadingCharacter = ref(false)
const loadingEpisode = ref(false)

const getRandomCharacter = async () => {
  loadingCharacter.value = true
  try {
    const randomId = Math.floor(Math.random() * 826) + 1
    const query = `
      query GetCharacter($id: ID!) {
        character(id: $id) {
          id
          name
          species
          image
        }
      }
    `

    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { id: randomId.toString() }
      })
    })

    const { data } = await response.json()
    randomCharacter.value = data.character
  } catch (error) {
    console.error('Error fetching random character:', error)
  } finally {
    loadingCharacter.value = false
  }
}

const getRandomEpisode = async () => {
  loadingEpisode.value = true
  try {
    const randomId = Math.floor(Math.random() * 51) + 1
    const query = `
      query GetEpisode($id: ID!) {
        episode(id: $id) {
          id
          name
          episode
        }
      }
    `

    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { id: randomId.toString() }
      })
    })

    const { data } = await response.json()
    randomEpisode.value = data.episode
  } catch (error) {
    console.error('Error fetching random episode:', error)
  } finally {
    loadingEpisode.value = false
  }
}
</script>