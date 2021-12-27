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
              title: "C# Code Analyzer",
              subtitle: "Visualization Tool for Software Architecture",
              mainImage: {name: "code-analyzer00.gif", index: 0},
              images: [[
                    {name: "code-analyzer01.jpg", index: 1},
              ],[
                    {name: "code-analyzer02.jpg", index: 2},
              ],[
                    {name: "code-analyzer03.jpg", index: 3},
              ]],
              descriptionComponent: "code-analyzer-descript"
          }
      }
  }
}
</script>