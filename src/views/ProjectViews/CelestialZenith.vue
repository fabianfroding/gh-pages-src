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
              title: "Celestial Zenith",
              subtitle: "Unity 2D Game",
              mainImage: {name: "2d-mini00.jpg", index: 0},
              images: [[
                    {name: "2d-mini01.jpg", index: 1},
              ]],
              descriptionComponent: "celestial-zenith-descript"
          }
      }
  }
}
</script>