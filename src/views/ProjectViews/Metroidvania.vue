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
              title: "Clockwork Metroidvania",
              subtitle: "Unity 2D Game Group Project",
              mainImage: {name: "metroidvania03.gif", index: 0},
              images: [[
                    {name: "metroidvania00.jpg", index: 1},
                    {name: "metroidvania03.jpg", index: 2},
              ],
              [
                    {name: "metroidvania01.jpg", index: 3},
              ],
              [
                    {name: "metroidvania02.jpg", index: 4},
              ]],
              descriptionComponent: "metroidvania-descript"
          }
      }
  }
}
</script>