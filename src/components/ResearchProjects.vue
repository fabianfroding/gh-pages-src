
<template>
    <div>
        <!-- Project list -->
        <div id="portfolio-se">
            <h1>Research Projects</h1>
            <div class="separator-line"></div>
            <div v-for="(project, index) in sortedProjects" :key="index">
                <div class="portfolio-item" :data-category="project.category">
                    <div class="portfolio-img has-margin-right">
                        <a v-if="isExternalLink(project.route)" :href="project.route" target="_blank" rel="noopener noreferrer">
                            <img 
                                v-if="project.previewImage" 
                                :src="require(`@/resources/project-images/${project.previewImage}`)" 
                                :alt="project.title" 
                            />
                            <div v-else></div>
                        </a>
                        <router-link v-else :to="project.route">
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
                        <p v-if="project.highlights && project.highlights.length > 0" class="cta">
                            <strong>Highlights</strong>:
                            <span v-for="(highlight, h) in project.highlights" :key="h">
                                {{ highlight }}<span v-if="h < project.highlights.length - 1">, </span>
                            </span>
                        </p>
                        <br />
                        <p class="cta viewdetails">
                            &gt;
                            <a v-if="isExternalLink(project.route)" :href="project.route" target="_blank" rel="noopener noreferrer"><strong> Details </strong></a>
                            <router-link v-else :to="project.route"><strong> Details </strong></router-link>
                            &lt;
                        </p>
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
import GameDevDisciplines from '@/views/ProjectViews/GameDevDisciplines.vue';
import GameGenreProblems from '@/views/ProjectViews/GameGenreProblems.vue';
import OnlyLead from '@/views/ProjectViews/OnlyLead.vue';
import MetroidvaniaCrowdfunding from '@/views/ProjectViews/MetroidvaniaCrowdfunding.vue';
import Thesis from '@/views/ProjectViews/Thesis.vue';

export default {
    data() {
        return {
        projects: [
            GameDevDisciplines.data().projectDetails,
            GameGenreProblems.data().projectDetails,
            OnlyLead.data().projectDetails,
            MetroidvaniaCrowdfunding.data().projectDetails,
            Thesis.data().projectDetails
        ]};
    },
    methods: {
        isExternalLink(route) {
            return typeof route === 'string' && route.startsWith('http');
        }
    },
    computed: {
        sortedProjects() {
        return [...this.projects].sort((a, b) => {
            return a.displayOrder - b.displayOrder;
        });
        }
    }
};
</script>
