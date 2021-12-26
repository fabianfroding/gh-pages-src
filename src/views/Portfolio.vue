<template>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <div class="section-heading">
                <h1>Portfolio</h1>
            </div>
            <div class="project-buttons">
                <button id="gd-projects-btn" @click="toggleProjectsClicked(true)">
                    Game Development
                </button>
                <button id="se-projects-btn" @click="toggleProjectsClicked(false)">
                    Software Engineering
                </button>
            </div>
            <PortfolioGames v-if="toggleProjects"></PortfolioGames>
            <PortfolioSoftwares v-if="!toggleProjects"></PortfolioSoftwares>
        </div>
        <Footer :showArrow="true"></Footer>
    </section>
</template>

<script>
import PortfolioGames from '@/components/PortfolioGames.vue';
import PortfolioSoftwares from '@/components/PortfolioSoftwares.vue';
import Footer from '@/components/Footer.vue'
export default {
    components: { PortfolioGames, PortfolioSoftwares, Footer },
    data: () => {
        return {
            toggleProjects: true
        }
    },
    methods: {
            toggleProjectsClicked(games) {
                if (games) {
                        this.toggleProjects = true;
                        const el = document.getElementById("gd-projects-btn");
                        el.style.backgroundColor = '#577efd44';
                        const el2 = document.getElementById("se-projects-btn");
                        el2.style.backgroundColor = '#00000000';
                }
                else {
                        this.toggleProjects = false;
                        const el = document.getElementById("se-projects-btn");
                        el.style.backgroundColor = '#577efd44';
                        const el2 = document.getElementById("gd-projects-btn");
                        el2.style.backgroundColor = '#00000000';
                }
            }
    },
    mounted() {
        this.toggleProjectsClicked(true);
    }
}
</script>
