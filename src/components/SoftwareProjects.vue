
<template>
    <div>
        <!-- Project list -->
        <div id="portfolio-se">
            <h1>Work Projects</h1>
            <div class="separator-line"></div>

            <!-- Filter Buttons -->
            <div class="filter-buttons">
                <button 
                    v-for="filter in filters" 
                    :key="filter"
                    :class="['filter-btn', { active: selectedFilter === filter }]"
                    @click="selectedFilter = filter"
                >
                    {{ filter }}
                </button>
            </div>

            <div v-for="(project, index) in filteredProjects" :key="index">
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
                        <div class="title-row">
                            <h1><strong>{{ project.title }}</strong></h1>
                            <span class="duration-jobtitle">
                                <strong>
                                    <span class="duration">{{ project.duration }}</span>{{ project.jobtitle }}
                                </strong>
                            </span>
                        </div>
                        <!--h6 class="job-title"><strong>{{ project.company }}</strong></h6-->
                        <!--h6 class="job-title"><strong><span>{{ project.tool }}</span></strong>
                        <strong><span class="align-right">{{ project.duration }}</span></strong></h6-->
                        <br />
                        <p>{{ project.description }}</p>
                        <p class="cta">
                            <span class="highlight-tags">
                                <span v-for="(highlight, h) in project.highlights" :key="h" class="highlight-tag">
                                    <strong>{{ highlight }}</strong>
                                </span>
                            </span>
                        </p>
                        <br />
                        <p class="cta viewdetails">&gt;<router-link :to="project.route"><strong> Details </strong></router-link>&lt;</p>
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

.filter-buttons {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: flex-start;
}

.filter-btn {
    padding: 0.4rem 1rem;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 1.75rem;
    font-weight: 0.1rem;
}

.filter-btn:hover {
    color: var(--text-theme-link-active, #555);
}

.filter-btn.active {
    color: var(--text-theme-link-active, #555);
}

.no-results {
    text-align: center;
    opacity: 0.6;
    margin-top: 2rem;
}

.highlight-tags {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-left: 0.3rem;
}

.highlight-tag {
    background-color: rgba(42, 47, 88, 0);
    border: 1px solid currentColor;
    border-radius: 20px;
    padding: 0.15rem 0.65rem;
    font-size: 0.9em;
    font-weight: 500;
    opacity: 0.8;
}

.title-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
}

.duration-jobtitle {
    white-space: nowrap;
    font-size: 1.3rem;
    opacity: 0.9;
}

.duration {
    opacity: 0.5;
}

</style>

<script>
import Abyssus from '@/views/ProjectViews/Abyssus.vue';
import CatsEye from '@/views/ProjectViews/CatsEye.vue';
import LMS from '@/views/ProjectViews/LMS.vue';
import Metroidvania from '@/views/ProjectViews/Metroidvania.vue';
import PlanetaryRevelation from '@/views/ProjectViews/PlanetaryRevelation.vue';
import VaultOfDarkness from '@/views/ProjectViews/VaultOfDarkness.vue';

import CodeAnalyzer from '@/views/ProjectViews/CodeAnalyzer.vue';
import CyberCar from '@/views/ProjectViews/CyberCar.vue';
import MediaShop from '@/views/ProjectViews/MediaShop.vue';
import ParallelCar from '@/views/ProjectViews/ParallelCar.vue';
import SourceCodeModeler from '@/views/ProjectViews/SourceCodeModeler.vue';

import GameDevDisciplines from '@/views/ProjectViews/GameDevDisciplines.vue';
import GameGenreProblems from '@/views/ProjectViews/GameGenreProblems.vue';
import OnlyLead from '@/views/ProjectViews/OnlyLead.vue';
import MetroidvaniaCrowdfunding from '@/views/ProjectViews/MetroidvaniaCrowdfunding.vue';
import Thesis from '@/views/ProjectViews/Thesis.vue';

export default {
    data() {
        return {
        selectedFilter: null,
        projects: [
            Abyssus.data().projectDetails,
            CatsEye.data().projectDetails,
            LMS.data().projectDetails,
            Metroidvania.data().projectDetails,
            PlanetaryRevelation.data().projectDetails,
            VaultOfDarkness.data().projectDetails,

            CodeAnalyzer.data().projectDetails,
            CyberCar.data().projectDetails,
            MediaShop.data().projectDetails,
            ParallelCar.data().projectDetails,
            SourceCodeModeler.data().projectDetails,

            GameDevDisciplines.data().projectDetails,
            GameGenreProblems.data().projectDetails,
            OnlyLead.data().projectDetails,
            MetroidvaniaCrowdfunding.data().projectDetails,
            Thesis.data().projectDetails
        ]};
    },
    created() {
        const categories = [...new Set(this.projects.map(p => p.category).filter(Boolean))];
        this.selectedFilter = categories[0] || null;
    },
    computed: {
        filters() {
            const categories = this.projects.map(p => p.category).filter(Boolean);
            return [...new Set(categories)];
        },
        sortedProjects() {
        return [...this.projects].sort((a, b) => {
            return a.displayOrder - b.displayOrder;
        });
        },
        filteredProjects() {
            if (this.selectedFilter === 'All') return this.sortedProjects;
            return this.sortedProjects.filter(p => p.category === this.selectedFilter);
        }
    }
};
</script>
