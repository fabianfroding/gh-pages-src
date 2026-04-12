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
                id: "cybercar",
                title: "Autonomous Vehicle: Intersection",
                subtitle: "Group Project in Cyber-Physical Systems",
                category: "Software",
                duration: "2019",
                displayOrder: 9,
                route: "/cybercar",
                previewImage: "cyber-car01.jpg",
                company: "Team Project",
                jobtitle: "",
                tool: "C++",
                description: "Autonomous Vehicle: Intersection is the behavior for a self-driving miniature vehicle designed to handle a traffic situation in an intersection.",
                highlights: ["C++", "Raspberry Pi", "Beagle Bone", "OpenCV", "Machine Learning", "Docker", "Project Management"],
                links: [ { url: "https://github.com/fabianfroding/dit638-cyber-car/tree/master/microservices", icon: "fab fa-github" } ],
                mainImage: {name: "cyber-car00.gif", index: 0},
                images: [[
                    {name: "cyber-car01.jpg", index: 1},
                ]],
                descriptionComponent: "cyber-car-descript"
            }
        }
    }
}
</script>