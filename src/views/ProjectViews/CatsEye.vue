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
              title: "Cat's Eye",
              subtitle: "Unity 3D Group Project",
              mainImage: {name: "catseye05.gif", index: 0},
              images: [[
                    {name: "catseye00.jpg", index: 1},
                    {name: "catseye01.jpg", index: 2},
              ],[
                    {name: "catseye03.jpg", index: 3},
                    {name: "catseye04.jpg", index: 4},
              ],[
                    {name: "catseye02.jpg", index: 5},
              ]],
              descriptionComponent: "cats-eye-descript"
          }
      }
  }
}
</script>