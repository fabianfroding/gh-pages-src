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
              id: "onlylead",
              title: "Only Lead Can Stop Them",
              category: "game",
              duration: "2021 - 2022",
              displayOrder: 3,
              route: "/onlylead",
              previewImage: "onlylead00.jpg",
              company: "Warcry Interactive",
              jobtitle: "QA Lead, UX Researcher",
              tool: "",
              description: "Only Lead Can Stop Them is a FPS game set in a fictional Spain during it's civil war era.",
              highlights: ["QA-Testing", "User Research"],
              links: [],
              mainImage: {name: "onlylead00.jpg", index: 0},
              images: [[
                    {name: "onlylead01.jpg", index: 1},
                ],
                [
                    {name: "onlylead02.png", index: 2},
                ],
                [
                    {name: "onlylead03.png", index: 3},
                ]],
              descriptionComponent: "only-lead-descript"
          }
      }
  }
}
</script>