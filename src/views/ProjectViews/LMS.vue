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
                id: "lms",
                title: "Last Man Sitting",
                category: "game",
                duration: "2026 - Present",
                displayOrder: 0,
                route: "/lms",
                previewImage: "lms00.jpg",
                company: "DoubleMoose Games",
                jobtitle: "Game Programmer, Software Engineer",
                tool: "Unreal Engine 5",
                description: "Last Man Sitting is a action survival shooter set in an office environment while scoping around on a chair.",
                highlights: ["Gameplay Programming", "UI Programming"],
                links:
                [
                { url: "https://store.steampowered.com/app/774291/Last_Man_Sitting/", icon: "fab fa-steam" },
                { url: "https://www.youtube.com/watch?v=ky4v4PFJCSw", icon: "fab fa-youtube" }
                ],
                mainImage: {name: "lms00.jpg", index: 0},
                images: [],
                descriptionComponent: "l-m-s-descript"
            }
      }
  }
}
</script>
