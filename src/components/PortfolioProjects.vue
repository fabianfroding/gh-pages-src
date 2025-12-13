
<template>
    <div>
        <!-- Filter buttons -->
        <div class="filter-buttons">
            <ul class="nav-list">
                <li class="nav-link" @click="setFilter('game')" :class="{ active: filter === 'game' }">Games</li>
                <li class="nav-link" @click="setFilter('software')" :class="{ active: filter === 'software' }">Software</li>
                <!--li class="nav-link" @click="setFilter('misc')" :class="{ active: filter === 'misc' }">Research</li-->
                <li class="nav-link" @click="setFilter('all')" :class="{ active: filter === 'all' }">All</li>
            </ul>
        </div>

        <div class="separator-line"></div>

        <!-- Project list -->
        <div id="portfolio-se">
            <div v-for="(project, index) in sortedProjects" :key="index">
                <div class="portfolio-item" :data-category="project.category">
                    <div class="portfolio-img has-margin-right">
                        <router-link :to="project.route">
                            <img 
                                v-if="project.previewImage" 
                                :src="require(`@/resources/project-images/${project.previewImage}`)" 
                                :alt="project.title" 
                            />
                            <div v-else></div>
                        </router-link>
                    </div>
                    <div class="portfolio-description">
                        <h1><strong>{{ project.title }}</strong></h1>
                        <h6 class="job-title"><strong><span>{{ project.company }}</span></strong>
                        <strong><span class="align-right">{{ project.jobtitle }}</span></strong></h6>
                        <h6 class="job-title"><strong><span>{{ project.tool }}</span></strong>
                        <strong><span class="align-right">{{ project.duration }}</span></strong></h6>
                        <br />
                        <p>{{ project.description }}</p>
                        <p class="cta">
                            <strong>Highlights</strong>:
                            <span v-for="(highlight, h) in project.highlights" :key="h">
                            {{ highlight }}<span v-if="h < project.highlights.length - 1">, </span>
                            </span>
                        </p>
                        <br />
                        <p class="cta viewdetails">&gt;<router-link :to="project.route"><strong> Project Overview </strong></router-link>&lt;</p>
                    </div>
                </div>
                <div v-if="index < sortedProjects.length - 1" class="separator-line"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.nav-link.active {
  color: var(--text-theme-link-active);
}

</style>

<script>
import Abyssus from '@/views/ProjectViews/Abyssus.vue';
import OnlyLead from '@/views/ProjectViews/OnlyLead.vue';
import CodeAnalyzer from '@/views/ProjectViews/CodeAnalyzer.vue';
import CyberCar from '@/views/ProjectViews/CyberCar.vue';
import MediaShop from '@/views/ProjectViews/MediaShop.vue';
import Metroidvania from '@/views/ProjectViews/Metroidvania.vue';
import ParallelCar from '@/views/ProjectViews/ParallelCar.vue';
import PlanetaryRevelation from '@/views/ProjectViews/PlanetaryRevelation.vue';
import PortfolioSite from '@/views/ProjectViews/PortfolioSite.vue';
import SourceCodeModeler from '@/views/ProjectViews/SourceCodeModeler.vue';
import VaultOfDarkness from '@/views/ProjectViews/VaultOfDarkness.vue';

export default {
    data() {
        return {
        projects: [
            Abyssus.data().projectDetails,
            OnlyLead.data().projectDetails,
            CodeAnalyzer.data().projectDetails,
            CyberCar.data().projectDetails,
            MediaShop.data().projectDetails,
            Metroidvania.data().projectDetails,
            ParallelCar.data().projectDetails,
            PlanetaryRevelation.data().projectDetails,
            PortfolioSite.data().projectDetails,
            SourceCodeModeler.data().projectDetails,
            VaultOfDarkness.data().projectDetails
        ],
        filter: 'game',
        };
    },
    methods: {
        setFilter(value) {
        this.filter = value;
        localStorage.setItem('selectedFilter', value);
        }
    },
    created() {
        const savedFilter = localStorage.getItem('selectedFilter');
        if (savedFilter) {
        this.filter = savedFilter;
        }
    },
    computed: {
        filteredProjects() {
        if (this.filter === 'all') {
            return this.projects;
        }
        return this.projects.filter(p => p.category === this.filter);
        },
        sortedProjects() {
        return [...this.filteredProjects].sort((a, b) => {
            return a.displayOrder - b.displayOrder;
        });
        }
    }
};
</script>
