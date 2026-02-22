
<template>
    <div>
        <!-- Project list -->
        <div id="portfolio-se">
            <h1>Software Projects</h1>
            <div class="separator-line"></div>
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

</style>

<script>
import CodeAnalyzer from '@/views/ProjectViews/CodeAnalyzer.vue';
import CyberCar from '@/views/ProjectViews/CyberCar.vue';
import MediaShop from '@/views/ProjectViews/MediaShop.vue';
import ParallelCar from '@/views/ProjectViews/ParallelCar.vue';
import SourceCodeModeler from '@/views/ProjectViews/SourceCodeModeler.vue';

export default {
    data() {
        return {
        projects: [
            CodeAnalyzer.data().projectDetails,
            CyberCar.data().projectDetails,
            MediaShop.data().projectDetails,
            ParallelCar.data().projectDetails,
            SourceCodeModeler.data().projectDetails
        ]};
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
