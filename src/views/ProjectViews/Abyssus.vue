<template>
    <div>
        <ProjectDetails :projectDetails="projectDetails"></ProjectDetails>
        <!--section class="project-details">
            <div class="container">
                <div class="section-heading">
                    <h1>{{ projectDetails.title }}</h1>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-img has-margin-right">
                    <div>
                        <img @click="openLightboxGallery(0)" :src="require(`../../resources/project-images/${projectDetails.mainImage.name}`)" alt="">
                    </div>
                    <div class="project-thumbnail-gallery">
                        <div class="project-thumbnail-gallery-row">
							<div v-for="(col, index1) in projectDetails.images" v-bind:key="index1" class="project-thumbnail-gallery-col">
								<div v-for="image in col" v-bind:key="image.id">
									<img @click="openLightboxGallery(image.index)" class="project-img-thumbnail" :src="require(`../../resources/project-images/${image.name}`)"/>
								</div>
							</div>
                        </div>
                    </div>
                </div>
                    <div class="portfolio-description">
                        <AbyssusDescript :projectDetails="projectDetails"></AbyssusDescript>
                    </div>
                </div>
            </div>
        </section-->
    </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectDetails.vue';

export default {
    components: { ProjectDetails },
    data: () => {
        return {
            projectDetails: {
                id: "abyssus",
                title: "Abyssus",
                category: "game",
                duration: "2022 - Present",
                displayOrder: 1,
                route: "/abyssus",
                previewImage: "abyssus00.jpg",
                company: "DoubleMoose Games",
                jobtitle: "Game Programmer, Software Engineer",
                tool: "Unreal Engine 5",
                description: "Abyssus is a 4-player co-op brinepunk roguelike FPS game set in an underwater world where you explore the ruins of a lost civilization.",
                highlights: ["Gameplay Programming", "UI Programming", "Telemetry Integration"],
                links:
                [
                { url: "https://store.steampowered.com/app/1721110/Abyssus/", icon: "fab fa-steam" },
                { url: "https://www.youtube.com/watch?v=nUaW1SlwEi0", icon: "fab fa-youtube" }
                ],
                mainImage: {name: "abyssus01.jpg", index: 0},
                images: [],
                descriptionComponent: "abyssus-descript"
            }
      }
  }
}
</script>
