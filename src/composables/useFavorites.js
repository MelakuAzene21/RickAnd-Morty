import { ref, computed } from 'vue'

const favorites = ref({
  characters: JSON.parse(localStorage.getItem('rick-morty-favorite-characters') || '[]'),
  episodes: JSON.parse(localStorage.getItem('rick-morty-favorite-episodes') || '[]'),
  locations: JSON.parse(localStorage.getItem('rick-morty-favorite-locations') || '[]')
})

export function useFavorites() {
  const addToFavorites = (type, item) => {
    if (!favorites.value[type].find(fav => fav.id === item.id)) {
      favorites.value[type].push(item)
      localStorage.setItem(`rick-morty-favorite-${type}`, JSON.stringify(favorites.value[type]))
    }
  }

  const removeFromFavorites = (type, itemId) => {
    favorites.value[type] = favorites.value[type].filter(fav => fav.id !== itemId)
    localStorage.setItem(`rick-morty-favorite-${type}`, JSON.stringify(favorites.value[type]))
  }

  const isFavorite = (type, itemId) => {
    return favorites.value[type].some(fav => fav.id === itemId)
  }

  const toggleFavorite = (type, item) => {
    if (isFavorite(type, item.id)) {
      removeFromFavorites(type, item.id)
    } else {
      addToFavorites(type, item)
    }
  }

  const favoriteCharacters = computed(() => favorites.value.characters)
  const favoriteEpisodes = computed(() => favorites.value.episodes)
  const favoriteLocations = computed(() => favorites.value.locations)

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    favoriteCharacters,
    favoriteEpisodes,
    favoriteLocations
  }
}