<template>
    <div>
      <div class="separator-line"></div>
      <section class="portfolio" id="portfolio">
          <div class="container">
              <PortfolioProjects/>
          </div>
      </section>
      <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>

import PortfolioProjects from '@/components/PortfolioProjects.vue';
import Footer from '@/components/Footer.vue'

export default {
    components: { PortfolioProjects, Footer }
}

</script>
