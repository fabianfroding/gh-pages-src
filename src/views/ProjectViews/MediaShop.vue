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
                id: "mediashop",
                title: "Media Shop & Integrator",
                subtitle: "Product Registry & Conversion System",
                category: "software",
                duration: "2020",
                displayOrder: 7,
                route: "/mediashop",
                previewImage: "media-shop01.jpg",
                company: "Solo Project",
                jobtitle: "",
                tool: "C# .NET",
                description: "Media Shop &amp; Integrator is a shop system that handles a product register, with an integrator that can convert the register into the format of other systems.",
                highlights: ["C# .NET", "Windows Forms", "Entity Framework Core", "SQL"],
                links: [ { url: "https://github.com/fabianfroding/media-shop-and-integrator", icon: "fab fa-github" } ],
                mainImage: {name: "media-shop01.jpg", index: 0},
                images: [],
                descriptionComponent: "media-shop-descript"
            }
        }
    }
}
</script>