<template>
    <footer class="copyright">
      <div v-if="showArrow" @click="scrollToTop" class="up" id="up">
          <i class="fas fa-chevron-up"></i>
      </div>
      <p>&copy; 2020 - {{ new Date().getFullYear() }} Fabian F.</p>
    </footer>
</template>

<script>
export default {
    props: ['showArrow'],
    methods: {
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  }
}
</script>
