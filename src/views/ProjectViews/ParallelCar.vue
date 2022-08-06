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
              title: "Autonomous Vehicle: Parallel Parking",
              subtitle: "Group Project in Systems Development",
              mainImage: {name: "parallel-car01.jpg", index: 0},
              images: [[
                    {name: "parallel-car02.jpg", index: 1},
              ]],
              descriptionComponent: "parallel-car-descript"
          }
      }
  }
}
</script>