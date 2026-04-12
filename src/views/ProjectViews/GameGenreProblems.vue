<template>
    <div>
        <ProjectDetails :projectDetails="projectDetails"></ProjectDetails>
    </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectDetails.vue';

export default {
  components: { ProjectDetails },
  data: () => {
      return {
          projectDetails: {
              id: "gamegenreproblems",
              title: "Investigating Game Development Problems among Genres and Platforms",
              category: "Research",
              duration: "2022",
              displayOrder: 2,
              route: "https://www.researchgate.net/publication/359414301_Investigating_Video_Game_Development_Problems_among_Genres_and_Platforms",
              previewImage: "gamegenreproblems00.jpg",
              company: "",
              jobtitle: "",
              tool: "Data Analysis",
              description: "A statistical data analysis of how different categories of game development problems correlates to genres and platforms.",
              highlights: ["Statistical Correlation Analysis"],
              links: [],
              mainImage: {name: "gamegenreproblems00.jpg", index: 0},
              images: [],
              descriptionComponent: "game-genre-problems"
          }
      }
  }
}
</script>