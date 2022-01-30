<template>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <div class="section-heading">
                <h1>Software Projects</h1>
                <br><br>
            </div>
            <PortfolioSoftwares></PortfolioSoftwares>
        </div>
        <Footer :showArrow="true"></Footer>
    </section>
</template>

<script>
import PortfolioSoftwares from '@/components/PortfolioSoftwares.vue';
import Footer from '@/components/Footer.vue'
export default {
    components: { PortfolioSoftwares, Footer }
}
</script>
