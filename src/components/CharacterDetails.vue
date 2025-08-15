<template>
  <div class="space-y-8">
    <!-- Back Button -->
    <div class="mb-8">
      <router-link 
        to="/characters" 
        class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
      >
        <i class="fas fa-arrow-left mr-2"></i>
        Back to Characters
      </router-link>
    </div>

    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <div v-else-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      <span class="ml-3 text-purple-400 text-lg">Loading character details...</span>
    </div>
    <div v-else>
      <!-- Character Header -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div class="flex-shrink-0">
            <img 
              :src="result.character.image" 
              :alt="result.character.name" 
              class="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-purple-500/50 shadow-2xl" 
            />
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ result.character.name }}</h1>
            <div class="mb-6">
              <FavoriteButton type="characters" :item="result.character" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div class="bg-gray-800/50 rounded-xl p-3 border border-gray-600">
                <div class="text-xs text-gray-400 mb-1">Species</div>
                <div class="text-white font-semibold text-sm">{{ result.character.species }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-xl p-3 border border-gray-600">
                <div class="text-xs text-gray-400 mb-1">Status</div>
                <div class="text-white font-semibold text-sm flex items-center">
                  <span 
                    class="w-2 h-2 rounded-full mr-2"
                    :class="{
                      'bg-green-400': result.character.status === 'Alive',
                      'bg-red-400': result.character.status === 'Dead',
                      'bg-gray-400': result.character.status === 'unknown'
                    }"
                  ></span>
                  {{ result.character.status }}
                </div>
              </div>
              <div class="bg-gray-800/50 rounded-xl p-3 border border-gray-600">
                <div class="text-xs text-gray-400 mb-1">Gender</div>
                <div class="text-white font-semibold text-sm">{{ result.character.gender }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-xl p-3 border border-gray-600">
                <div class="text-xs text-gray-400 mb-1">Location</div>
                <div class="text-white font-semibold text-sm truncate">{{ result.character.location.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Episodes Section -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Episodes featuring <span class="text-purple-400">{{ result.character.name }}</span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="episode in result.character.episode" :key="episode.id" class="border p-4 rounded shadow bg-gray-900 text-white ">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-semibold text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full border border-blue-500/30">
                  {{ episode.episode }}
                </span>
                <i class="fas fa-play-circle text-gray-600 hover:text-blue-400 transition-colors duration-300"></i>
              </div>
              <h3 class="text-lg font-bold text-white mb-3 line-clamp-2">{{ episode.name }}</h3>
              <div class="space-y-2 text-sm text-gray-400">
                <p class="flex items-center">
                  <i class="fas fa-calendar-alt mr-2 text-blue-400"></i>
                  {{ episode.air_date }}
                </p>
                <p class="flex items-center">
                  <i class="fas fa-clock mr-2 text-green-400"></i>
                  {{ new Date(episode.created).getFullYear() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import FavoriteButton from './FavoriteButton.vue'

const props = defineProps(['id']);

const CHARACTER_QUERY = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      status
      gender
      image
      location {
        name
      }
      episode {
        id
        name
        episode
        air_date
        created
      }
    }
  }
`

const { result, loading, error } = useQuery(CHARACTER_QUERY, { id: props.id });
</script>

