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
                id: "codeanalyzer",
                title: "C# Code Analyzer",
                subtitle: "Visualization Tool for Software Architecture",
                category: "software",
                duration: "2020",
                displayOrder: 0,
                route: "/codeanalyzer",
                previewImage: "code-analyzer03.jpg",
                company: "Solo Project",
                jobtitle: "",
                tool: "C# .NET",
                description: "C# Code Analyzer is a tool that visualizes dependencies between classes.",
                highlights: ["C# .NET", "WPF", "LiveCharts", "D3.js"],
                links:
                [ { url: "https://github.com/fabianfroding/code-analyzer", icon: "fab fa-github" } ],
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