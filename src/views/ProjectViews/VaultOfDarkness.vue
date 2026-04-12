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
              id: "vaultofdarkness",
              title: "Vault of Darkness",
              category: "Games",
              duration: "2019",
              displayOrder: 8,
              route: "/vod",
              previewImage: "vod-00.jpg",
              company: "Solo Project",
              jobtitle: "",
              tool: "Gameplay Mod",
              description: "Vault of Darkness is a 4-player co-op dungeon crawler mod for Warcaft 3.",
              highlights: ["Scripting", "Game Design"],
              links: [ { url: "https://github.com/fabianfroding/wc3-vod-jass", icon: "fab fa-github" } ],
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
