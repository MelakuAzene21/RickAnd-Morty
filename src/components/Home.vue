
 <template>
  <div>
    <Gallery class="relative top-1 bg-gray-700"/>

    <div class="mt-20 mx-auto max-w-4xl p-8 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 class="text-4xl font-bold mb-6 text-center text-green-400">Rick and Morty</h1>
      <div class="space-y-4">
        <p class="text-lg leading-relaxed">
          <strong class="text-green-500">Rick and Morty</strong> is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon. The series follows the misadventures of Rick Sanchez, a cynical and alcoholic mad scientist, and his good-hearted but fretful grandson Morty Smith. The duo splits their time between domestic life and interdimensional adventures, exploring the bizarre and the absurd.
        </p>

        <p class="text-lg leading-relaxed">
          Since its debut, <em>Rick and Morty</em> has gained a massive following and critical acclaim for its originality, wit, and complex characters. It's a journey through the cosmos filled with laughter, existential dread, and unforgettable moments.
        </p>
      </div>

      <div class="mt-12">
        <h2 class="text-3xl font-semibold mb-4 text-center text-green-400">Genre</h2>
        <div class="flex justify-center space-x-4">
          <span class="bg-gray-800 text-white py-2 px-4 rounded-lg">Science Fiction</span>
          <span class="bg-gray-800 text-white py-2 px-4 rounded-lg">Comedy</span>
          <span class="bg-gray-800 text-white py-2 px-4 rounded-lg">Adventure</span>
          <span class="bg-gray-800 text-white py-2 px-4 rounded-lg">Animated</span>
        </div>
      </div>

      <div class="mt-12">
        <h2 class="text-3xl font-semibold mb-4 text-center text-green-400">Creators</h2>
        <div class="flex justify-center space-x-4">
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Justin Roiland</p>
            <p class="text-sm">Co-Creator, Voice Actor</p>
          </div>
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Dan Harmon</p>
            <p class="text-sm">Co-Creator, Writer</p>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <h2 class="text-3xl font-semibold mb-4 text-center text-green-400">Stars</h2>
        <div class="flex justify-center space-x-4">
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Justin Roiland</p>
            <p class="text-sm">Rick Sanchez, Morty Smith</p>
          </div>
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Chris Parnell</p>
            <p class="text-sm">Jerry Smith</p>
          </div>
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Spencer Grammer</p>
            <p class="text-sm">Summer Smith</p>
          </div>
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Sarah Chalke</p>
            <p class="text-sm">Beth Smith</p>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <h2 class="text-3xl font-semibold mb-4 text-center text-green-400">Rating</h2>
        <div class="flex justify-center space-x-4">
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">IMDb</p>
            <p class="text-sm">9.2/10</p>
          </div>
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Rotten Tomatoes</p>
            <p class="text-sm">95%</p>
          </div>
          <div class="bg-gray-800 text-white py-4 px-6 rounded-lg text-center">
            <p class="font-bold text-lg">Metacritic</p>
            <p class="text-sm">87/100</p>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="text-center mt-6">
          <router-link to="/episodes" class="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Explore Episodes
          </router-link>
        </div>
        <div class="text-center mt-6">
          <router-link to="/characters/" class="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Explore Characters
          </router-link>
        </div>
        <div class="text-center mt-6">
          <router-link to="/location" class="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Explore Locations
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Gallery from './Gallery.vue';
</script>

<style scoped>
/* Add any scoped styles here */
</style>
