<template>
    <div>
      <div class="separator-line"></div>
      <section class="portfolio" id="portfolio">
          <div class="container">
              <GameProjects/>
          </div>
      </section>
      <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>

import GameProjects from '@/components/GameProjects.vue';
import Footer from '@/components/Footer.vue'

export default {
    components: { GameProjects, Footer }
}

</script>
