<template>
  <nav class="fixed bottom-0 left-0 h-16 w-full bg-primary p-1">
      <section class="flex justify-around text-white" id="links">
          <router-link to="/load" class="link relative px-2 py-3 -mt-1"><i class="fas fa-road fa-2x"></i></router-link>
          <router-link to="#" class="relative px-2 py-3 -mt-1"><i class="fas fa-history fa-2x"></i></router-link>
          <router-link to="#" class="relative px-2 py-3 -mt-1"><i class="fas fa-dollar-sign fa-2x"></i></router-link>
          <router-link to="#" class="relative px-2 py-3 -mt-1"><i class="fas fa-exclamation-triangle fa-2x"></i></router-link>
      </section>
  </nav>
</template>

<script>
export default {
    mounted(){
        let activeLink = document.querySelector('#links> .router-link-exact-active');
        if(activeLink){
            activeLink.classList.add('bg-white');
            activeLink.classList.add('text-primary');
            activeLink.classList.add('border-b-l');
            activeLink.classList.add('rounded-br-2xl');
            activeLink.classList.add('rounded-bl-2xl');
        }
    }
}
</script>

<style>

</style>