<template>
    <footer class="copyright">
      <div v-if="showArrow" @click="scrollToTop" class="up" id="up">
          <i class="fas fa-chevron-up"></i>
      </div>
      <a href="https://www.linkedin.com/in/fabian-fr%C3%B6ding-7b52ab160/" target="_blank" class="project-link">
          <i class="fab fa-linkedin footer-icon"></i>
      </a>
      <a href="https://github.com/fabianfroding" target="_blank" class="project-link">
          <i class="fab fa-github footer-icon"></i>
      </a>
      <a href="https://www.researchgate.net/profile/Fabian-Froeding-2" target="_blank" class="project-link">
          <i class="fab fa-researchgate footer-icon"></i>
      </a>
      <a href="mailto:fabian.froding@gmail.com" target="_blank" class="project-link">
          <i class="fa fa-envelope footer-icon"></i>
      </a>
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
