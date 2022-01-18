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
              title: "Autonomous Vehicle: Intersection",
              subtitle: "Group Project in Cyber-Physical Systems",
              mainImage: {name: "cyber-car00.gif", index: 0},
              images: [[
                    {name: "cyber-car01.jpg", index: 1},
              ]],
              descriptionComponent: "cyber-car-descript"
          }
      }
  }
}
</script>