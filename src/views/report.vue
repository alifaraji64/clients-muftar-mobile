<template>
  <main class="min-h-screen mb-10">
    <!-- MODAL -->
    <article
      id="modal-1"
      class="h-screen absolute w-full flex justify-center items-center"
      v-if="isModalOpen"
    >
      <section
        id="overlay"
        class="bg-gray-700 opacity-70 w-full h-full z-20 fixed top-0 left-0"
      ></section>
      <section
        id="content"
        class="bg-white w-7/8 relative z-30 flex items-center flex-col"
      >
        <h2
          class="text-gray-700 text-2xl font-bold border-b-8 border-primary py-2"
        >
          YOU AREN'T DONE
        </h2>
        <p class="text-center mt-2 font-medium mb-2">
          Since this report is labeled as an accident, you must submit images of
          the accident and the police report(if available)
        </p>
        <button
          class="bg-primary px-6 py-1 text-white text-lg font-semibold my-3"
          @click="isModalOpen = !isModalOpen"
        >
          GO BACK
        </button>
      </section>
    </article>
    <!-- MODAL -->
    <TopNav />
    <section id="main">
      <h3 class="text-primary font-bold text-center">Report a Problem</h3>
      <div
        class="border-2 border-gray-400 rounded-lg py-2 px-2 w-7/8 mx-auto mt-4 font-semibold"
      >
        <div id="row" class="flex justify-between items-center my-3">
          <section id="item">
            <label class="text-blue-400 text-xs">DRIVER NAME</label>
            <h3 class="text-gray-600">Jason Morales</h3>
          </section>
          <section id="item">
            <label class="text-blue-400 text-xs">DRIVER ID</label>
            <h3 class="text-gray-600">42145873</h3>
          </section>
        </div>
        <div id="row" class="flex justify-between items-center my-3">
          <section id="item">
            <label class="text-blue-400 text-xs">ASSIGNED DISPATCHER</label>
            <h3 class="text-gray-600">Jack Frost</h3>
          </section>
        </div>
        <div id="row" class="flex items-center my-3">
          <section id="item">
            <label class="text-blue-400 text-xs">Was this an accident?</label>
            <select class="bg-primary text-white ml-4">
              <option value="null"></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </section>
        </div>

        <div id="row" class="my-3">
          <section id="item">
            <label class="text-blue-400 text-xs">What are you reporting?</label>
            <textarea
              id=""
              rows="2"
              class="block mx-auto border-2 border-gray-400 rounded-xl focus:outline-none w-6/7 text-sm text-center"
              placeholder="please be as detailed as possible. what happend?"
            ></textarea>
          </section>
        </div>
        <!-- BUTTONS -->
        <div id="row" class="my-3">
          <section
            id="item"
            class="relative border-2 border-gray-400 w-6/7 mx-auto rounded-2xl cursor-pointer text-sm"
          >
            <input
              type="file"
              accept="image/*"
              capture="camera"
              class="opacity-0 bg-red-200 absolute left-0 top-0 w-full h-full"
            />
            <div id="inner-button" class="flex items-center text-primary">
              <i class="fas fa-video fa-2x ml-4"></i>
              <p class="mx-auto">Take a video</p>
            </div>
          </section>
        </div>
        <div id="row" class="my-3">
          <section
            id="item"
            class="relative border-2 border-gray-400 w-6/7 mx-auto rounded-2xl cursor-pointer text-sm"
          >
            <input
              type="file"
              accept="image/*"
              capture="camera"
              class="opacity-0 bg-red-200 absolute left-0 top-0 w-full h-full"
            />
            <div id="inner-button" class="flex items-center text-primary">
              <i class="fas fa-video fa-2x ml-4"></i>
              <p class="mx-auto">Take a Picture</p>
            </div>
          </section>
        </div>
        <div id="row" class="my-3">
          <section
            id="item"
            class="relative border-2 border-gray-400 w-6/7 mx-auto rounded-2xl cursor-pointer text-sm"
          >
            <input
              type="file"
              accept="image/*"
              capture="camera"
              class="opacity-0 bg-red-200 absolute left-0 top-0 w-full h-full"
            />
            <div id="inner-button" class="flex items-center text-primary">
              <i class="fas fa-video fa-2x ml-4"></i>
              <p class="mx-auto">Select file from gallery</p>
            </div>
          </section>
        </div>
        <!-- !BUTTONS -->
        <div id="row" class="my-3">
          <section
            id="item"
            class="w-6/7 text-center mx-auto mt-12 text-primary"
          >
            <button @click="isModalOpen = !isModalOpen">
              <i class="fab fa-telegram-plane fa-2x"></i>
            </button>
          </section>
        </div>
      </div>
    </section>
    <NavBar />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TopNav from "@/components/TopNav.vue";
export default {
  components: { NavBar, TopNav },
  data() {
    return {
      isModalOpen: false,
    };
  },
};
</script>

<style>
</style>