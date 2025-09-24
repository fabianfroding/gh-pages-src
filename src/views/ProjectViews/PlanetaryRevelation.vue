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
              id: "planetaryrevelation",
              title: "Solar System Simulation",
              category: "game",
              duration: "2020",
              displayOrder: 3,
              route: "/solarsystemsim",
              previewImage: "planetary-rev06.jpg",
              company: "Solo Project",
              jobtitle: "",
              tool: "Unity",
              description: "An interactable solar-system simulation with a custom gravity system based on real-time physics.",
              highlights: ["Programming", "Physics Simulation", "VFX"],
              links: [ { url: "https://github.com/fabianfroding/unity-planetary-revelation", icon: "fab fa-github" } ],
              mainImage: {name: "planetary-rev05.gif", index: 0},
              images: [[
                    {name: "planetary-rev00.jpg", index: 1},
                    {name: "planetary-rev01.jpg", index: 2},
              ],[
                    {name: "planetary-rev03.jpg", index: 3},
                    {name: "planetary-rev04.jpg", index: 4},
              ],[
                    {name: "planetary-rev02.jpg", index: 5},
                    {name: "planetary-rev06.jpg", index: 6},
              ]],
              descriptionComponent: "planetary-revelation-descript"
          }
      }
  }
}
</script>