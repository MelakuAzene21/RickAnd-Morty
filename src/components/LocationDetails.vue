<template>
  <div class="mt-16">
    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <p v-else-if="loading" class="text-green-600">Loading...</p>
    <div v-else class="text-center">
      <h1 class="text-xl font-bold text-sky-600">{{ result.location.name }}</h1>
      <p class="text-lg ">Location ID: {{ result.location.id }}</p>
      <p class="text-lg">Location Type: {{ result.location.type }}</p>
      <p class="text-lg">Location Dimension: {{ result.location.dimension }}</p>
      <p class="text-lg">Location Created: {{ result.location.created }}</p>
      <h2 class="text-lg font-semibold mt-4">Residents in  <span class="text-sky-500 italic">{{  result.location.name  }} </span>    Location</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="resident in result.location.residents" :key="resident.id" class="border p-4 rounded shadow">
          <img :src="resident.image" alt="resident image" class="w-full h-auto rounded mb-2"/>
          <p class="text-lg font-semibold">{{ resident.name }}</p>
          <p class="text-sm">Status: {{ resident.status }}</p>
          <p class="text-sm">Species: {{ resident.species }}</p>
          <p class="text-sm">Gender: {{ resident.gender }}</p>
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
