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
              title: "Media Shop & Integrator",
              subtitle: "Product Registry & Conversion System",
              mainImage: {name: "media-shop01.jpg", index: 0},
              images: [],
              descriptionComponent: "media-shop-descript"
          }
      }
  }
}
</script>