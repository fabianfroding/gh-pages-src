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
            id: "parallelcar",
            title: "Autonomous Vehicle: Parallel Parking",
            subtitle: "Group Project in Systems Development",
            category: "software",
            duration: "2018",
            displayOrder: 11,
            route: "/parallelcar",
            previewImage: "parallel-car01.jpg",
            company: "Team Project",
            jobtitle: "",
            tool: "C++",
            description: "Autonomous Vehicle: Parallel Parking is the behavior for a self-driving miniature vehicle programmed to be able to parallel-park autonomously.",
            highlights: ["C++", "Arduino", "OpenCV", "Project Management"],
            links: [ { url: "https://github.com/fabianfroding/parallel-car", icon: "fab fa-github" } ],
            mainImage: {name: "parallel-car01.jpg", index: 0},
            images: [[
                {name: "parallel-car02.jpg", index: 1},
            ]],
            descriptionComponent: "parallel-car-descript"
          }
      }
  }
}
</script>