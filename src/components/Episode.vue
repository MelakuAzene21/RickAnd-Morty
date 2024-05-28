 <template>
<div class="mt-10">
    <p v-if="error" class="text-red-500">Something went wrong: {{ error.message }}</p>
    <p v-else-if="loading && allEpisodes.length === 0" class="text-red-600">Loading...</p>
    <div v-else>
      <h1 class="mt-12 text-center font-serif italic font-extralight">EPISODES</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="episode in allEpisodes" :key="episode.id">
          <router-link :to="{ name: 'EpisodeDetails', params: { id: episode.id }}" class="cursor-pointer hover:underline p-2">    
            <div class="mt-2 text-lg font-semibold border-2 w-autho h-28 text-center p-5 shadow-sm rounded-lg ml-3 bg-gray-900 border-gray-800 hover:text-green-500">{{ episode.name }}</div>
          </router-link>
        </div>
      </div>
      <div class="text-center rounded-lg  text-lg"> 
        
        <button v-if="nextPage" @click="loadMore" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg   hover:bg-sky-800">Load More</button>
        
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

