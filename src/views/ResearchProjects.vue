<template>
    <div>
      <div class="separator-line"></div>
      <section class="portfolio" id="portfolio">
          <div class="container">
              <ResearchProjects/>
          </div>
      </section>
      <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>

import ResearchProjects from '@/components/ResearchProjects.vue';
import Footer from '@/components/Footer.vue'

export default {
    components: { ResearchProjects, Footer }
}

</script>
