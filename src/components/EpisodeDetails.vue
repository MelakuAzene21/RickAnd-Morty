<template>
  <div class="space-y-8">
    <!-- Back Button -->
    <div class="mb-8">
      <router-link 
        to="/episodes" 
        class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
      >
        <i class="fas fa-arrow-left mr-2"></i>
        Back to Episodes
      </router-link>
    </div>

    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <div v-else-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      <span class="ml-3 text-blue-400 text-lg">Loading episode details...</span>
    </div>
    <div v-else>
      <!-- Episode Header -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
        <div class="text-center mb-6">
          <span class="inline-block text-sm font-semibold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30 mb-4">
            {{ result.episode.episode }}
          </span>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ result.episode.name }}</h1>
          <div class="mb-6">
            <FavoriteButton type="episodes" :item="result.episode" />
          </div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <i class="fas fa-calendar-alt text-blue-400 text-2xl mb-2"></i>
            <div class="text-sm text-gray-400 mb-1">Air Date</div>
            <div class="text-white font-semibold">{{ result.episode.air_date }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <i class="fas fa-users text-purple-400 text-2xl mb-2"></i>
            <div class="text-sm text-gray-400 mb-1">Characters</div>
            <div class="text-white font-semibold">{{ result.episode.characters.length }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <i class="fas fa-clock text-green-400 text-2xl mb-2"></i>
            <div class="text-sm text-gray-400 mb-1">Created</div>
            <div class="text-white font-semibold">{{ new Date(result.episode.created).getFullYear() }}</div>
          </div>
        </div>
      </div>

      <!-- Characters Section -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Characters in <span class="text-blue-400">{{ result.episode.name }}</span>
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <div v-for="character in result.episode.characters" :key="character.id" class="border p-4 rounded shadow">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center">
              <img 
                :src="character.image" 
                :alt="character.name" 
                class="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-gray-600"
              />
              <h3 class="text-sm font-semibold text-white mb-2 line-clamp-2">{{ character.name }}</h3>
              <div class="space-y-1 text-xs text-gray-400">
                <p><span class="text-green-400">●</span> {{ character.status }}</p>
                <p>{{ character.species }}</p>
                <p>{{ character.gender }}</p>
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

const EPISODE_QUERY = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      air_date
      created
      characters {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

const { result, loading, error } = useQuery(EPISODE_QUERY, { id: props.id });

</script>
