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
                id: "abyssus",
                title: "Abyssus",
                category: "game",
                duration: "2022 - Present",
                displayOrder: 0,
                route: "/abyssus",
                previewImage: "abyssus00.jpg",
                company: "DoubleMoose Games",
                jobtitle: "Game Programmer, Software Engineer",
                tool: "Unreal Engine 5",
                description: "Abyssus is a 4-player co-op brinepunk roguelike FPS game set in an underwater world where you explore the ruins of a lost civilization.",
                highlights: ["Gameplay Programming", "UI Programming", "Telemetry Integration"],
                links:
                [
                { url: "https://store.steampowered.com/app/1721110/Abyssus/", icon: "fab fa-steam" },
                { url: "https://www.youtube.com/watch?v=nUaW1SlwEi0", icon: "fab fa-youtube" }
                ],
                mainImage: {name: "abyssus01.jpg", index: 0},
                images: [[
                    {name: "abyssus02.jpg", index: 1},
                    {name: "abyssus03.jpg", index: 2},
                ],[
                    {name: "abyssus04.jpg", index: 3},
                    {name: "abyssus05.jpg", index: 4},
                ],[
                    {name: "abyssus06.jpg", index: 5},
                    {name: "abyssus00.jpg", index: 6},
                ]],
                descriptionComponent: "abyssus-descript"
            }
      }
  }
}
</script>
