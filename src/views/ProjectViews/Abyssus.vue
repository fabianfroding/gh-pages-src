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
              subtitle: "Game Programming at DoubleMoose Games",
              mainImage: {name: "abyssus01.jpg", index: 0},
              images: [[
                    {name: "abyssus02.jpg", index: 1},
                    {name: "abyssus03.jpg", index: 2},
              ],[
                    {name: "abyssus04.jpg", index: 3},
                    {name: "abyssus05.jpg", index: 4},
              ],[
                    {name: "abyssus06.jpg", index: 5},
                    {name: "abyssus00.jpg", index: 6},
              ]],
              descriptionComponent: "abyssus-descript"
          }
      }
  }
}
</script>
