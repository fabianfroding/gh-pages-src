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
              id: "crowdfunding",
              title: "Analyzing the crowdfunding performance of metroidvanias on Kickstarter",
              category: "misc",
              duration: "2022",
              displayOrder: 1,
              route: "https://www.researchgate.net/publication/359651696_Analyzing_the_crowdfunding_performance_of_'metroidvanias'_on_Kickstarter",
              previewImage: "crowdfunding00.jpg",
              company: "",
              jobtitle: "",
              tool: "Data Analysis",
              description: "A statistical data analysis of the performance of metroidvania games on Kickstarter.com.",
              highlights: ["Kickstarter Performance Analysis"],
              links: [],
              mainImage: {name: "crowdfunding00.jpg", index: 0},
              images: [],
              descriptionComponent: "crowdfunding"
          }
      }
  }
}
</script>