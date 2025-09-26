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
            id: "portfoliosite",
            title: "My Website",
            subtitle: "",
            category: "software",
            duration: "2020 - Present",
            displayOrder: 0,
            route: "/portfoliosite",
            previewImage: "portfoliosite00.jpg",
            company: "Solo Project",
            jobtitle: "",
            tool: "Vue",
            description: "A personal portfolio website showcasing my projects and skills.",
            highlights: ["Vue", "CSS", "Javascript"],
            links: [ { url: "https://github.com/fabianfroding/gh-pages-src", icon: "fab fa-github" } ],
            mainImage: {name: "portfoliosite00.jpg", index: 0},
            images: [],
            descriptionComponent: "portfolio-site-descript"
          }
      }
  }
}
</script>