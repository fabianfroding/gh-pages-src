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
            id: "metroidvania",
            title: "Emissary - 2D Action Platformer",
            category: "game",
            duration: "2022-2023",
            displayOrder: 2,
            route: "/nara",
            previewImage: "metroidvania05.jpg",
            company: "Team Project",
            jobtitle: "Various Roles",
            tool: "Unity",
            description: "A 2D action platformer codebase with a state machine system.",
            highlights: ["Programming", "Game Design", "2D Art", "Project Manager"],
            links: [ { url: "https://github.com/fabianfroding/project-jolly-src", icon: "fab fa-github" } ],
            mainImage: {name: "metroidvania07.gif", index: 0},
            images: [[
                {name: "metroidvania05.jpg", index: 1}
            ],
            [
                {name: "metroidvania06.jpg", index: 2}
            ]],
            descriptionComponent: "metroidvania-descript"
          }
      }
  }
}
</script>