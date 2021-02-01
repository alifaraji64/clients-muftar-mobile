<template>
  <main class="min-h-screen mb-20">
    <TopNav />
    <section id="main">
      <h3 class="text-primary font-bold text-center mb-2">Paystubs</h3>
      <div class="rounded-xl w-7/8 mx-auto text-sm">
        <div id="search" class="flex items-center mb-2">
          <div
            id="input-w-icon"
            class="border-2 border-gray-500 w-3/4 rounded-xl px-1"
          >
            <i class="fas fa-search text-primary"></i>
            <input
              type="text"
              class="w-11/12 focus:outline-none ml-1"
              placeholder="search..."
            />
          </div>
          <i class="fas fa-filter text-gray-400 ml-2"></i>
        </div>
        <div
          id="labels"
          class="flex justify-around mx-auto text-xs font-semibold"
        >
          <p>Week Start</p>
          <p>Week End</p>
          <p>Pay Date</p>
          <p>Paystub</p>
          <p>Info</p>
        </div>
        <div
          id="each-load"
          class="flex justify-around mx-auto text-xs font-semibold border-primary border-2 rounded-xl py-0.5 my-1"
          v-for="k in 20"
          :key="k"
        >
          <h3 class="text-gray-600 font-semibold">Dec 14,2020</h3>
          <h3 class="text-gray-600 font-semibold">Dec 14,2020</h3>
          <h3 class="text-gray-600 font-semibold">Dec 14,2020</h3>
          <h3 class="text-gray-600 font-semibold">
            <i
              class="fas fa-dollar-sign bg-primary text-white py-1 px-2 rounded-full"
            ></i>
            2,172
          </h3>
          <h3 class="bg-blue-200 text-primary px-1 rounded-md cursor-pointer">
            <i class="fas fa-search"></i>
          </h3>
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
};
</script>

<style>
</style>