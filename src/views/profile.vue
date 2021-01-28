<template>
  <main class="min-h-screen mb-10">
    <TopNav />
    <section id="main">
      <h3 class="text-primary font-bold text-center">Account</h3>
      <div id="avatar" class="w-28 h-28 relative my-2 mx-auto">
        <img
          src="@/assets/images/morgan-avatar.jpeg"
          class="object-cover object-center w-full h-full visible rounded-full"
          alt=""
        />
      </div>
      <div id="info" class="px-8 font-semibold">
        <div id="row" class="flex justify-between items-center my-2">
          <section id="item">
            <label class="text-blue-400 text-xs">DRIVER NAME</label>
            <h3 class="text-gray-600">Jason Morales</h3>
          </section>
          <section id="item">
            <label class="text-blue-400 text-xs">DRIVER ID</label>
            <h3 class="text-gray-600">42145873</h3>
          </section>
        </div>
        <div id="row" class="flex justify-between items-center my-2">
          <section id="item">
            <label class="text-blue-400 text-xs">ASSIGNED DISPATCHER</label>
            <h3 class="text-gray-600">Jack Frost</h3>
          </section>
          <section id="item">
            <label class="text-blue-400 text-xs">DISPATCHER'S ID</label>
            <h3 class="text-gray-600">42145873</h3>
          </section>
        </div>
        <div id="row" class="flex items-center my-2">
          <section id="item">
            <label class="text-blue-400 text-xs"
              >CONTACT EMAIL <i class="far fa-edit text-gray-600 ml-1"></i
            ></label>
            <h3 class="text-gray-600">morgan@morganlogistics.com</h3>
          </section>
        </div>
        <div id="row" class="flex items-center my-2">
          <section id="item">
            <label class="text-blue-400 text-xs"
              >PHONE NUMBER<i class="far fa-edit text-gray-600 ml-1"></i
            ></label>
            <h3 class="text-gray-600">1 (800) 555-5555</h3>
          </section>
        </div>
        <div id="row" class="flex items-center my-2">
          <section id="item">
            <label class="text-blue-400 text-xs"
              >HOME ADDRESS<i class="far fa-edit text-gray-600 ml-1"></i
            ></label>
            <h3 class="text-gray-600">
              1234 Big Boy RD. <br />
              Dallas,TX 30193
            </h3>
          </section>
        </div>
        <div id="row" class="flex justify-center items-center my-2">
          <button
            class="bg-primary text-white font-semibold px-2 py-1 rounded-sm mt-10"
          >
            <i class="fas fa-sign-out-alt mr-2"></i>LOGOUT
          </button>
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