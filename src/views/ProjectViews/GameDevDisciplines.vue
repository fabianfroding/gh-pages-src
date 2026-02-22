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
              id: "gamedevdisciplines",
              title: "Game Development Disciplines and their Perspectives on the Software Engineering Process",
              category: "misc",
              duration: "2022",
              displayOrder: 0,
              route: "https://www.researchgate.net/publication/361173684_Game_Development_Disciplines_and_their_Perspectives_on_the_Software_Engineering_Process_in_Game_Development",
              previewImage: "gamedevdisciplines00.jpg",
              company: "",
              jobtitle: "",
              tool: "Case Study",
              description: "A company case-study interviewing employees of their perspective of the software engineering process.",
              highlights: [],
              links: [],
              mainImage: {name: "gamedevdisciplines00.jpg", index: 0},
              images: [],
              descriptionComponent: "game-dev-disciplines"
          }
      }
  }
}
</script>