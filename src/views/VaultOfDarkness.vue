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
              title: "Vault of Darkness",
              subtitle: "Warcraft 3 Mod",
              mainImage: {name: "vod-05.gif", index: 0},
              images: [[
                    {name: "vod-00.jpg", index: 1},
                    {name: "vod-02.jpg", index: 2},
              ],[
                    {name: "vod-01.jpg", index: 3},
                    {name: "vod-03.jpg", index: 4},
              ],[
                    {name: "vod-04.jpg", index: 5},
              ]],
              descriptionComponent: "vault-of-darkness-descript"
          }
      }
  }
}
</script>
