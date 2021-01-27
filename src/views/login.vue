<template>
  <main class="max-w-full bg-hero-pattern h-screen bg-bottom flex justify-center items-center flex-col sm:bg-none sm:bg-gray-800">
    <div id="overlay" class="bg-blue-800 sm:hidden h-full w-full opacity-20 absolute top-0 left-0"></div>
    <section id="text_logo" class="relative flex text-white strokeme">
      <i class="fas fa-moon fa-7x sm:fa-3x"></i>
      <div class="">
        <h1 class="text-7xl font-extrabold sm:text-4xl">MUFTAR</h1>
        <h2 class="float-right font-bold tracking-wider">DIGITAL</h2>
      </div>
    </section>
        <!-- middle-text and button -->
    <section class="text-white mt-4 relative font-semibold flex flex-col justify-center items-center">
      <h2 class="text-xl tracking-wide">Bringing Logistics Online</h2>
    </section>
      <!-- !middle-text and button -->

      <!-- form for login -->
      <section class=" sm:w-3/5 sm:mt-4 bg-gray-100 absolute rounded-lg flex flex-col items-center justify-center z-10 sm:relative">
          <div class="border-primary border-solid border-b-4 mb-6">
            <h2 class="text-gray-700 p-3 text-2xl font-semibold">LOGIN</h2>
          </div>
          <div class="w-full">
            <form class="flex justify-center items-center flex-col w-2/3 mx-auto">
              <input type="text" placeholder="MC number" class="w-4/5 my-1 bg-transparent border-solid border-gray-400 border-2">
              <input type="text" placeholder="dispatch ID" class="w-4/5 my-1 bg-transparent border-solid border-gray-400 border-2">
              <input type="password" placeholder="password" class="w-4/5 my-1 bg-transparent border-solid border-gray-400 border-2">
              <button class="mt-8 bg-primary text-white px-6 py-1 mb-4 rounded-lg">LOGIN</button>
            </form>
          </div>
      </section>
      <p class="hidden sm:block text-white mt-2">Don't have an account? <span class="text-yellow-500"> Contact us</span></p>
      <!-- !form for login -->
  </main>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
    }
  },
  components: {
  },
  methods:{
  },
  mounted(){
  }

}
</script>
<style>
.strokeme {
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}
</style>
