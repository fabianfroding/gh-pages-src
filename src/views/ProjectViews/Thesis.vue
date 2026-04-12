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
              id: "thesis",
              title: "The Evolution of Role-Stereotypes and Related Design (Anti)Patterns",
              category: "Research",
              duration: "2020",
              displayOrder: 4,
              route: "https://www.researchgate.net/publication/358615420_The_Evolution_of_Role-Stereotypes_and_Related_Design_AntiPatterns",
              previewImage: "thesis00.jpg",
              company: "Bachelor Thesis",
              jobtitle: " • Assistant Researcher",
              tool: "",
              description: "Bachelor thesis investigating classifications of software classes and how related design anti-patterns evolve over time.",
              highlights: ["Software Architecture Research"],
              links: [],
              mainImage: {name: "thesis00.jpg", index: 0},
              images: [],
              descriptionComponent: "thesis-descript"
          }
      }
  }
}
</script>