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
              title: "Portfolio Website",
              subtitle: "Fabian Fröding's Portfolio",
              mainImage: {name: "portfoliosite00.jpg", index: 0},
              images: [],
              descriptionComponent: "portfolio-site-descript"
          }
      }
  }
}
</script>