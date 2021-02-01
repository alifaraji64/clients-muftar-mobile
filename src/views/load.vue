<template>
  <main class="min-h-screen mb-20">
    <!-- MODAL -->
    <article
      id="modal-1"
      class="h-screen absolute w-full flex justify-center items-center"
      v-if="false"
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
          STOP!
        </h2>
        <p class="text-center mt-2 font-medium">
          To proceed to the next load, you must submit the BoL for your last
          load!
        </p>
        <button
          class="bg-primary px-3 py-1 text-white text-lg font-semibold my-1"
        >
          Submit
        </button>
        <button
          class="bg-primary px-3 py-1 text-white text-lg font-semibold mt-1 mb-3"
        >
          Return
        </button>
      </section>
    </article>
    <!-- MODAL -->

    <TopNav />
    <section id="main">
      <h3 class="text-primary font-bold text-center mb-2">Current Load</h3>
      <div
        class="w-7/8 mx-auto border-8 border-solid border-primary rounded-md mb-2"
      >
        <header class="flex justify-between items-center p-1">
          <i class="fas fa-truck-moving fa-2x text-gray-500"></i>
          <h1 class="text-lg text-blue-700 font-semibold">1248YEB</h1>
          <p class="text-yellow-700 bg-yellow-200 px-2 text-sm">
            in transit- drop one
          </p>
        </header>
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
            id="image"
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
      <div id="buttons" class="">
        <section
          id="first-button-row"
          class="w-3/4 mx-auto flex justify-center my-4"
        >
          <button
            class="w-full bg-primary text-white border-4 rounded-md border-black py-1 text-lg font-semibold block"
          >
            MARK ARRIVED
          </button>
        </section>
        <section
          id="second-button-row"
          class="w-3/4 mx-auto flex items-center justify-between my-4"
        >
          <button
            class="bg-primary text-white border-4 rounded-md border-black py-1 px-2 text-lg font-semibold"
          >
            SUBMIT BOL
          </button>
          <i class="far fa-copy fa-2x text-primary"></i>
        </section>
        <section
          id="first-button-row"
          class="w-3/4 mx-auto flex justify-center my-4"
        >
          <button
            class="w-full bg-red-700 text-yellow-400 border-4 rounded-md border-black py-1 text-lg font-semibold block"
          >
            MARK ARRIVED
          </button>
        </section>
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