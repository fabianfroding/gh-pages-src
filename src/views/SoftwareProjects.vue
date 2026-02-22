<template>
    <div>
      <div class="separator-line"></div>
      <section class="portfolio" id="portfolio">
          <div class="container">
              <SoftwareProjects/>
          </div>
      </section>
      <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>

import SoftwareProjects from '@/components/SoftwareProjects.vue';
import Footer from '@/components/Footer.vue'

export default {
    components: { SoftwareProjects, Footer }
}

</script>
