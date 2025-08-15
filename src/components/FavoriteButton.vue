<template>
  <button
    @click="handleToggle"
    :class="[
      'inline-flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105',
      isFavorite(type, item.id)
        ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25'
        : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white border border-gray-600'
    ]"
  >
    <i 
      :class="[
        'mr-2 transition-all duration-300',
        isFavorite(type, item.id) ? 'fas fa-heart text-white' : 'far fa-heart'
      ]"
    ></i>
    {{ isFavorite(type, item.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
  </button>
</template>

<script setup>
import { useFavorites } from '../composables/useFavorites.js'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['characters', 'episodes', 'locations'].includes(value)
  },
  item: {
    type: Object,
    required: true
  }
})

const { isFavorite, toggleFavorite } = useFavorites()

const handleToggle = () => {
  toggleFavorite(props.type, props.item)
}
</script>