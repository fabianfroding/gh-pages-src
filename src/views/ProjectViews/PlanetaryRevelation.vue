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
              title: "Planetary Revelation",
              subtitle: "Unity 3D Game",
              mainImage: {name: "planetary-rev00.jpg", index: 0},
              images: [[
                    {name: "planetary-rev01.jpg", index: 1},
              ],[
                    {name: "planetary-rev02.jpg", index: 2},
              ],[
                    {name: "planetary-rev03.jpg", index: 3},
              ]],
              descriptionComponent: "planetary-revelation-descript"
          }
      }
  }
}
</script>