<template>
  <main class="min-h-screen mb-10">
    <TopNav />
    <section id="main">
      <h3 class="text-primary font-bold text-center mb-2">Current Load</h3>
      <div
        id="first-card"
        class="w-4/5 mx-auto border-8 border-solid border-primary rounded-md mb-2"
      >
        <div class="flex justify-between items-center p-1">
          <i class="fas fa-truck-moving fa-2x text-gray-500"></i>
          <h1 class="text-lg text-blue-700 font-semibold">1248YEB</h1>
          <p class="text-yellow-700 bg-yellow-200 px-2 text-sm">
            in transit- drop one
          </p>
        </div>
        <hr />
        <br />
        <div id="details">
          <section class="flex items-center text-sm pl-4">
            <div class="justify-center flex flex-col items-center">
              <h3 class="text-blue-700 -mt-4 pb-4">PICKUP</h3>
              <i class="fas fa-map-marker-alt text-gray-600"></i>
            </div>
            <div class="ml-2">
              <p>ADD LOCATION NAME</p>
              <p>1600 Pennysylvania ave, Washington DC 20500</p>
            </div>
          </section>
          <section class="flex items-center text-sm pl-4 mt-4">
            <div class="justify-center flex flex-col items-center">
              <h3 class="text-blue-700 -mt-4 pb-4">DELIVER</h3>
              <i class="fas fa-map-pin text-gray-600"></i>
            </div>
            <div class="ml-2">
              <p>ADD LOCATION NAME</p>
              <p>1600 Pennysylvania ave, Washington DC 20500</p>
            </div>
          </section>
          <section
            class="border-4 border-primary w-6/7 rounded-xl mx-auto mt-4"
          >
            <img src="@/assets/images/map.png" alt="" />
          </section>
          <section id="bottom">
            <h4 class="text-primary font-semibold my-2 p-1">Subtotal</h4>
            <div class="border-primary border-t-2">
              <h5 class="font-semibold text-gray-600 text-sm p-1">
                Stock Information
              </h5>
              <div id="items" class="ml-8">
                <p class="text-blue-700">32 boxes of ramen</p>
                <p class="text-blue-700">32 boxes of ramen</p>
                <p class="text-blue-700">32 boxes of ramen</p>
              </div>
            </div>
            <hr />
            <div class="flex justify-between p-1 text-blue-700 font-semibold">
              <h3>Weight</h3>
              <h3>23,000 LBS</h3>
            </div>
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
};
</script>

<style>
</style>