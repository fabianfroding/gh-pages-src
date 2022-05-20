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
              images: [[
                    {name: "abyssus01.jpg", index: 1},
                    {name: "abyssus02.jpg", index: 2},
              ],[
                    {name: "abyssus03.jpg", index: 3},
                    {name: "abyssus04.jpg", index: 4},
              ],[
                    {name: "abyssus05.jpg", index: 5},
              ]],
              descriptionComponent: "abyssus-descript"
          }
      }
  }
}
</script>
