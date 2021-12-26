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
              title: "Bloodline",
              subtitle: "",
              mainImage: {name: "deig00.jpg", index: 0},
              images: [[
                    {name: "deig01.jpg", index: 1},
              ],[
                    {name: "deig02.jpg", index: 2},
              ],[
                    {name: "deig03.jpg", index: 3},
              ]],
              descriptionComponent: "bloodline-descript"
          }
      }
  }
}
</script>
