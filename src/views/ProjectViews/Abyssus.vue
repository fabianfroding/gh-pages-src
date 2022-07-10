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
              title: "Abyssus",
              subtitle: "A Roguelike FPS",
              mainImage: {name: "abyssus00.jpg", index: 0},
              images: [],
              descriptionComponent: "abyssus-descript"
          }
      }
  }
}
</script>
