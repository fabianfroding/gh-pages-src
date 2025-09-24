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
              id: "catseye",
              title: "Cat's Eye",
              category: "game",
              duration: "2022",
              displayOrder: 5,
              route: "/catseye",
              previewImage: "catseye00.jpg",
              company: "Team Project",
              jobtitle: "Various Roles",
              tool: "Unity",
              description: "Cat's Eye is a game jam project inspired by Poppy Playtime for the Global Game Jam 2022 in a team of 7 people.",
              highlights: ["Programming", "Project Manager"],
              links: [],
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