 <template>
<div class="space-y-8">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
        Episodes
      </h1>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        Dive into the chaotic adventures across multiple dimensions and realities
      </p>
    </div>

    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <div v-else-if="loading && allEpisodes.length === 0" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      <span class="ml-3 text-blue-400 text-lg">Loading episodes...</span>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="episode in allEpisodes" :key="episode.id">
          <router-link 
            :to="{ name: 'EpisodeDetails', params: { id: episode.id }}" 
            class="group block"
          >    
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-semibold text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full border border-blue-500/30">
                  {{ episode.episode }}
                </span>
                <i class="fas fa-play-circle text-gray-600 group-hover:text-blue-400 transition-colors duration-300 text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {{ episode.name }}
              </h3>
              <div class="flex items-center text-gray-400 text-sm">
                <i class="fas fa-calendar-alt mr-2"></i>
                <span>Click to view details</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button 
          v-if="nextPage" 
          @click="loadMore" 
          class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <i class="fas fa-plus mr-2"></i>
          Load More Episodes
        </button>
      </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const allEpisodes = ref([])
const loading = ref(true)
const error = ref(null)
const nextPage = ref(1)

const EPISODE_QUERY = `
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        next
      }
      results {
        id
        name
        episode
      
      }
    }
  }
`

const fetchEpisodes = async (page) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: EPISODE_QUERY,
        variables: { page },
      }),
    })
    
    const { data } = await response.json()
    
    if (data.errors) {
      throw new Error(data.errors[0].message)
    }
    
    allEpisodes.value = [...allEpisodes.value, ...data.episodes.results]
    
    if (data.episodes.info.next) {
      nextPage.value = data.episodes.info.next
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
    fetchEpisodes(nextPage.value)
  }
}

onMounted(() => {
  fetchEpisodes(nextPage.value)
})

</script>

