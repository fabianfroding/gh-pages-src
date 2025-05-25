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
              title: "Solar System Simulation",
              subtitle: "Unity 3D",
              mainImage: {name: "planetary-rev05.gif", index: 0},
              images: [[
                    {name: "planetary-rev00.jpg", index: 1},
                    {name: "planetary-rev01.jpg", index: 2},
              ],[
                    {name: "planetary-rev03.jpg", index: 3},
                    {name: "planetary-rev04.jpg", index: 4},
              ],[
                    {name: "planetary-rev02.jpg", index: 5},
                    {name: "planetary-rev06.jpg", index: 6},
              ]],
              descriptionComponent: "planetary-revelation-descript"
          }
      }
  }
}
</script>