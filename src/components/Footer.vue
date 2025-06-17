<template>
    <footer class="copyright">
      <div v-if="showArrow" @click="scrollToTop" class="up" id="up">
          <i class="fas fa-chevron-up"></i>
      </div>
      <a href="https://www.linkedin.com/in/fabian-fr%C3%B6ding-7b52ab160/" target="_blank" class="project-link">
          <i class="fab fa-linkedin footer-icon"></i>
      </a>
      <a href="mailto:fabian.froding@gmail.com" target="_blank" class="project-link">
          <i class="fa fa-envelope footer-icon"></i>
      </a>
      <a href="https://github.com/fabianfroding" target="_blank" class="project-link">
          <i class="fab fa-github footer-icon"></i>
      </a>
      <p>Copyright &copy; 2020 - {{ new Date().getFullYear() }} Fabian Fröding. All rights reserved.</p>
      <br>
      <div style="color: #779DFF; opacity: 0.85; font-weight: bold; font-size: 1.1em;">Made with Vue and Github Pages</div>
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
