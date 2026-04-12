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
              id: "sourcecodemodeler",
              title: "Source Code Modeler",
              subtitle: "Group Project in Distributed Systems",
              category: "Software",
              duration: "2018",
              displayOrder: 10,
              route: "/sourcecodemodeler",
              previewImage: "src-code-modeler01.jpg",
              company: "Team Project",
              jobtitle: "",
              tool: "Java",
              description: "Source Code Modeler is a program that can generate a UML class-diagram based on source code input with a back-end distributed among three nodes in a WLAN network.",
              highlights: ["Java", "JavaFX", "SrcML", "Graphviz", "Project Management"],
              links: [ { url: "https://github.com/fabianfroding/distributed-systems", icon: "fab fa-github" } ],
              mainImage: {name: "src-code-modeler01.jpg", index: 0},
              images: [],
              descriptionComponent: "source-code-modeler-descript"
          }
      }
  }
}
</script>