<template>
  <nav class="sm:flex justify-between items-center py-2 px-4 hidden">
    <div id="logo" class="w-1/2 border-gray-700 border-b-2">
      <i class="fas fa-moon text-5xl mb-1"></i>
    </div>
    <div id="icons" class="flex">
      <div class="mx-2" id="link">
        <router-link to="/notifications" class="text-primary">
          <i class="far fa-bell text-3xl"></i>
        </router-link>
      </div>
      <div class="mx-2" id="link">
        <router-link to="/profile" class="text-primary">
          <i class="far fa-user-circle text-3xl"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    let activeLink = document.querySelector("#link> .router-link-exact-active");
    console.log(activeLink);
    activeLink.classList.remove("text-primary");
    activeLink.classList.add("text-white");
    activeLink.classList.add("bg-primary");
    activeLink.classList.add("pt-2");
    activeLink.classList.add("rounded-full");
    activeLink.classList.add("border-2");
    activeLink.classList.add("border-primary");
  },
};
</script>

<style>
</style>