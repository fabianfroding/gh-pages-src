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
              title: "Source Code Modeler",
              subtitle: "Distributed UML Generation Tool",
              mainImage: {name: "src-code-modeler01.jpg", index: 0},
              images: [],
              descriptionComponent: "source-code-modeler-descript"
          }
      }
  }
}
</script>