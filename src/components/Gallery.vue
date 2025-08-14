<template>
  <div class="relative w-full max-w-6xl mx-auto">
    <!-- Main Carousel -->
    <div class="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-gray-900 to-black">
      <Carousel 
        id="gallery" 
        :items-to-show="1" 
        :wrap-around="true" 
        v-model="currentSlide" 
        :autoplay="autoplayEnabled"
        :autoplay-timeout="6000"
        :transition="1200"
        class="relative"
      >
        <Slide v-for="(slide, index) in slides" :key="index">
          <div class="relative h-96 md:h-[500px] w-full group">
            <img 
              :src="slide.image" 
              :alt="slide.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <!-- Character Info Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-center mb-2">
                <span class="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold mr-2">OFFICIAL</span>
                <span class="bg-red-500 px-2 py-1 rounded text-xs font-bold">ADULT SWIM</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-2 text-shadow">{{ slide.name }}</h3>
              <p class="text-gray-300 text-sm md:text-base mb-2">{{ slide.species }} • {{ slide.status }}</p>
              <div class="flex items-center space-x-4 text-xs text-gray-400">
                <span><i class="fas fa-tv mr-1"></i>{{ slide.episodes }} Episodes</span>
                <span><i class="fas fa-star mr-1 text-yellow-400"></i>{{ slide.rating }}/10</span>
                <span><i class="fas fa-calendar mr-1"></i>{{ slide.firstAppearance }}</span>
              </div>
            </div>
            
            <!-- Slide Number Indicator -->
            <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              {{ index + 1 }} / {{ slides.length }}
            </div>
          </div>
        </Slide>
        
        <!-- Navigation Buttons -->
        <template #addons>
          <!-- Play/Pause Button -->
          <button 
            @click="toggleAutoplay" 
            class="absolute top-4 left-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 group"
          >
            <i :class="autoplayEnabled ? 'fas fa-pause' : 'fas fa-play'" class="text-lg group-hover:text-green-400"></i>
          </button>
          
          <button 
            @click="prev" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 group"
          >
            <i class="fas fa-chevron-left text-lg group-hover:text-green-400"></i>
          </button>
          <button 
            @click="next" 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 group"
          >
            <i class="fas fa-chevron-right text-lg group-hover:text-green-400"></i>
          </button>
        </template>
      </Carousel>
    </div>

    <!-- Thumbnail Navigation -->
    <div class="mt-6">
      <Carousel
        id="thumbnails"
        :items-to-show="5"
        :items-to-scroll="1"
        :wrap-around="false"
        v-model="currentSlide"
        :breakpoints="{
          768: { itemsToShow: 3 },
          1024: { itemsToShow: 5 }
        }"
        class="thumbnails-carousel"
      >
        <Slide v-for="(slide, index) in slides" :key="index">
          <div 
            class="mx-2 cursor-pointer group"
            @click="slideTo(index)"
          >
            <div class="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105">
              <img 
                :src="slide.image" 
                :alt="slide.name"
                class="w-full h-20 md:h-24 object-cover transition-all duration-300"
                :class="currentSlide === index ? 'ring-2 ring-green-400 brightness-100' : 'brightness-75 hover:brightness-90'"
              >
              <div 
                v-if="currentSlide === index"
                class="absolute inset-0 bg-green-400/20 border-2 border-green-400 rounded-lg"
              ></div>
            </div>
            <p class="text-xs text-center mt-2 text-gray-400 group-hover:text-white transition-colors duration-300 truncate">
              {{ slide.name }}
            </p>
          </div>
        </Slide>
      </Carousel>
    </div>

    <!-- Progress Bar -->
    <div class="mt-4 w-full bg-gray-700 rounded-full h-1">
      <div 
        class="bg-gradient-to-r from-green-400 to-blue-500 h-1 rounded-full transition-all duration-300"
        :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
      autoplayEnabled: true,
      slides: [
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive',
          episodes: 51,
          rating: 9.2,
          firstAppearance: '2013'
        },
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          name: 'Morty Smith',
          species: 'Human',
          status: 'Alive',
          episodes: 51,
          rating: 8.9,
          firstAppearance: '2013'
        },
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
          name: 'Summer Smith',
          species: 'Human',
          status: 'Alive',
          episodes: 42,
          rating: 8.5,
          firstAppearance: '2013'
        },
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
          name: 'Beth Smith',
          species: 'Human',
          status: 'Alive',
          episodes: 45,
          rating: 8.7,
          firstAppearance: '2013'
        },
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
          name: 'Jerry Smith',
          species: 'Human',
          status: 'Alive',
          episodes: 43,
          rating: 7.8,
          firstAppearance: '2013'
        },
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
          name: 'Birdperson',
          species: 'Bird-Person',
          status: 'Alive',
          episodes: 8,
          rating: 9.1,
          firstAppearance: '2014'
        },
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/71.jpeg',
          name: 'Squanch',
          species: 'Squanch',
          status: 'Alive',
          episodes: 6,
          rating: 8.3,
          firstAppearance: '2014'
        },
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/158.jpeg',
          name: 'Mr. Meeseeks',
          species: 'Meeseeks',
          status: 'unknown',
          episodes: 3,
          rating: 9.5,
          firstAppearance: '2014'
        }
      ]
    }
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
    next() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prev() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
    },
    toggleAutoplay() {
      this.autoplayEnabled = !this.autoplayEnabled
    }
  },
})
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

/* Custom carousel styles */
:deep(.carousel__viewport) {
  perspective: 2000px;
}

:deep(.carousel__track) {
  transform-style: preserve-3d;
}

:deep(.carousel__slide) {
  opacity: 1;
  transform: rotateY(0deg);
}

:deep(.carousel__slide--sliding) {
  transition: 0.6s ease-in-out;
}

/* Thumbnail carousel styles */
.thumbnails-carousel :deep(.carousel__viewport) {
  overflow: visible;
}

.thumbnails-carousel :deep(.carousel__track) {
  align-items: center;
}
</style>