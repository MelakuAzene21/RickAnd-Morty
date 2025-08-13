<template>
  <div class="space-y-8">
    <!-- Back Button -->
    <div class="mb-8">
      <router-link 
        to="/location" 
        class="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300"
      >
        <i class="fas fa-arrow-left mr-2"></i>
        Back to Locations
      </router-link>
    </div>

    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <div v-else-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      <span class="ml-3 text-orange-400 text-lg">Loading location details...</span>
    </div>
    <div v-else>
      <!-- Location Header -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-map-marker-alt text-white text-2xl"></i>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ result.location.name }}</h1>
        </div>
        
        <div class="grid md:grid-cols-4 gap-6 text-center">
          <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <i class="fas fa-hashtag text-orange-400 text-2xl mb-2"></i>
            <div class="text-sm text-gray-400 mb-1">ID</div>
            <div class="text-white font-semibold">{{ result.location.id }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <i class="fas fa-tag text-blue-400 text-2xl mb-2"></i>
            <div class="text-sm text-gray-400 mb-1">Type</div>
            <div class="text-white font-semibold">{{ result.location.type }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <i class="fas fa-globe text-purple-400 text-2xl mb-2"></i>
            <div class="text-sm text-gray-400 mb-1">Dimension</div>
            <div class="text-white font-semibold">{{ result.location.dimension }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <i class="fas fa-users text-green-400 text-2xl mb-2"></i>
            <div class="text-sm text-gray-400 mb-1">Residents</div>
            <div class="text-white font-semibold">{{ result.location.residents.length }}</div>
          </div>
        </div>
      </div>

      <!-- Residents Section -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Residents of <span class="text-orange-400">{{ result.location.name }}</span>
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <div v-for="resident in result.location.residents" :key="resident.id" class="border p-4 rounded shadow">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center">
              <img 
                :src="resident.image" 
                :alt="resident.name" 
                class="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-gray-600"
              />
              <h3 class="text-sm font-semibold text-white mb-2 line-clamp-2">{{ resident.name }}</h3>
              <div class="space-y-1 text-xs text-gray-400">
                <p><span class="text-green-400">●</span> {{ resident.status }}</p>
                <p>{{ resident.species }}</p>
                <p>{{ resident.gender }}</p>
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

const props = defineProps(['id']);

const LOCATION_QUERY = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      created
      residents {
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

const { result, loading, error } = useQuery(LOCATION_QUERY, { id: props.id });
</script>
