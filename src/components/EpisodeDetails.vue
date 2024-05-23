<template>
  <div class="mt-16">
    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <p v-else-if="loading" class="text-green-600">Loading...</p>
    <div v-else class="text-center">
      <p class="text-lg ">Episode ID: {{ result.episode.id }}</p>
      <p class="text-lg  ">Episode Name: <span class="text-sky-500">{{ result.episode.name }}</span>   </p>
      <p class="text-lg">Episode Number: {{ result.episode.episode }}</p>
      <p class="text-lg">Air Date: {{ result.episode.air_date }}</p>
      <p class="text-lg">Created: {{ result.episode.created }}</p>
      <h2 class="text-lg font-semibold mt-4 mb-3 italic text-center">Characters Pariticipated in <span class="text-sky-500">{{ result.episode.name }}</span> Episode:</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        <div v-for="character in result.episode.characters" :key="character.id" class="border p-4 rounded shadow">
          <img :src="character.image" alt="character image" class="w-full h-auto rounded mb-2"/>
          <p class="text-lg font-semibold  underline italic">{{ character.name }}</p>
          <p class="text-sm">Status: {{ character.status }}</p>
          <p class="text-sm">Species: {{ character.species }}</p>
          <p class="text-sm">Gender: {{ character.gender }}</p>
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
