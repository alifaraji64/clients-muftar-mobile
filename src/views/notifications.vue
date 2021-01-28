<template>
  <main class="min-h-screen mb-20">
    <TopNav />
    <section id="main">
      <h3 class="text-primary font-bold text-center mb-2">Notifications</h3>
      <div class="border-2 border-gray-400 rounded-xl w-4/5 mx-auto text-sm">
        <div
          id="item"
          class="border-gray-400 p-2"
          :class="index !== items.length - 1 ? 'border-b-2' : 'border-none'"
          v-for="(item, index) in items"
          :key="index"
        >
          <h3 class="text-red-500 font-semibold mb-2">
            BoL - Load 34127 Rejected
          </h3>
          <h3 class="text-primary font-bold mb-3">NOTE:</h3>
          <p class="text-gray-600">
            Bol document has been submited blurry. Please resubmit
          </p>
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
      items: [
        { approved: false },
        { approved: false },
        { approved: false },
        { approved: true },
        { approved: true },
      ],
    };
  },
};
</script>

<style>
</style>