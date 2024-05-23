<template>
  <div class="mt-16">
    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <p v-else-if="loading" class="text-green-600">Loading...</p>
    <div v-else>
      <div class="flex flex-col items-center">
        <img :src="result.character.image" alt="character image" class="w-24 h-24 rounded-full mb-4" />
        <h1 class="text-2xl font-bold  text-sky-500">{{ result.character.name }}</h1>
        <p class="text-lg">Species: {{ result.character.species }}</p>
        <p class="text-lg">Status: {{ result.character.status }}</p>
        <p class="text-lg">Gender: {{ result.character.gender }}</p>
        <p class="text-lg">Last Known Location: {{ result.character.location.name }}</p>
      </div>
      <h2 class="text-xl font-semibold mt-8 text-center"> List of Episodes  <span class="italic  text-sky-500">{{  result.character.name  }}</span> Paritipated :</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml -1/2m ">
        <div v-for="episode in result.character.episode" :key="episode.id" class="border p-4 rounded shadow bg-gray-900 text-white ">
          <p class="text-lg font-semibold text-green-400">{{ episode.name }}</p>
          <p class="text-sm">Episode: {{ episode.episode }}</p>
          <p class="text-sm">Air Date: {{ episode.air_date }}</p>
          <p class="text-sm">Created: {{ episode.created }}</p>
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

