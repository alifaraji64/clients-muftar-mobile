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
          WARNING
        </h2>
        <p class="text-center mt-2 font-medium mb-2">
          You're about to log out. Are you sure you wish to logout?
        </p>
        <button
          class="bg-primary px-6 py-1 text-white text-lg font-semibold my-1"
        >
          Logout
        </button>
        <button
          class="bg-primary px-6 py-1 text-white text-lg font-semibold mt-1 mb-3"
          @click="isModalOpen = !isModalOpen"
        >
          Return
        </button>
      </section>
    </article>
    <!-- MODAL -->
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
            class="bg-primary text-white font-semibold px-2 py-1 rounded-sm mt-4"
            @click="isModalOpen = !isModalOpen"
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
  data() {
    return {
      isModalOpen: false,
    };
  },
};
</script>

<style>
</style>