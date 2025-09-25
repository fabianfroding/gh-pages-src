<template>
    <div>
        <h6 class="job-title"><span><strong>Game</strong>: Abyssus</span>
        <span class="align-right"><strong>Engine</strong>: Unreal Engine 5</span></h6>
        <h6 class="job-title"><span><strong>Job Title</strong>: Game Programmer/Software Engineer</span>
        <span class="align-right"><strong>Release Date</strong>: 12 August 2025</span></h6>
        <h6 class="job-title"><span><strong>Studio Project at DoubleMoose Games</strong></span></h6>
        <div class="separator-line"></div>

        <div class="video-container">
            <iframe 
                width="400" 
                height="225" 
                src="https://www.youtube.com/embed/nUaW1SlwEi0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>

        <br><br>

        <p>
            My primary responsibilities have included developing both core gameplay systems and the complete UI stack. The game is built using a custom implementation of Unreal Engine’s 
            Gameplay Ability System (GAS), which serves as the architectural foundation for most of the gameplay features.
            <br><br>

            I’ve worked across multiple technical areas—from gameplay programming and UI to networking, telemetry, and asset management.
            Below is a breakdown of some of the technologies I’ve worked with and how they were applied in the project.
            
            <br><br><br>
            <!-- Asset Management -->
            <div>
            <h1>
                Asset Loading
            </h1>
            <br>
            <p>
                I used Unreal’s Asset Manager and Primary Asset system to organize and load game content:
                <br><br>
                <ul>
                <li>Structured and organized assets to load and unload when changing areas.</li>
                <li>Used soft references and async loading to reduce load times and memory usage.</li>
                </ul>
            </p>
            </div>

            <br>
            <!--div>
                <img :src="require(`@/resources/project-images/abyssus02.jpg`)" />
            </div>
            <p>Picture description.</p-->

            <br><br>
            <!-- Gameplay Ability System -->
            <div>
            <h1>
                Gameplay Programming &amp; GAS
            </h1>
            <br>
            <p>
                Abyssus is built on a custom implementation of Unreal Engine’s GAS.
                I designed and implemented several core gameplay features using this framework:
                <br><br>
                <ul>
                <li>Abilities and effects for various player powers.</li>
                <li>Difficulty modifiers.</li>
                <li>Objectives and objective tracking system.</li>
                <li>Skill tree modifiers.</li>
                <li>Weapons and weapon mods.</li>
                </ul>
                <br>

                Various other features that I developed from the ground up:
                <br><br>
                <ul>
                <li>Cosmetic system with player customization.</li>
                <li>FPS aim assist system.</li>
                <li>Loot system.</li>
                <li>Pickupables.</li>
                <li>Player emote system with gestures and songs.</li>
                <li>Radar minimap.</li>
                <li>Shop system.</li>
                </ul>
            </p>
            </div>

            <br><br>
            <!-- Common UI -->
            <div>
            <h1>
                UI Programming
            </h1>
            <br>
            <p>
                During development I was tasked to take on full responsibility of the UI systems in the game:
                <br><br>
                <ul>
                <li>Developed modular widgets for HUD, inventory, menus, and in-game notifications.</li>
                <li>Full controller navigation using input routing and focus management.</li>
                <li>Replaced an entire legacy UI system previously used by the studio and implemented the Common UI plugin instead.</li>
                </ul>
            </p>
            </div>

            <br><br>
            <!-- Level Streaming -->
            <div>
            <h1>
                Procedural Level Generation &amp; Level Streaming
            </h1>
            <br>
            <p>
                Early in development I acquired full responsibility of the procedural level generation system,
                which was both a challenge and craft itself.
                <br><br>
                <ul>
                <li>Developed several algorithms related to generating the layout of different rooms.</li>
                <li>Integrated procedural generation logic with level loading/unloading to load rooms, lighting and specific objects.</li>
                <li>Structured the game into areas, level sequences and rooms.</li>
                </ul>
            </p>
            </div>

            <br><br>
            <!-- Telemetry -->
            <div>
            <h1>
                Telemetry Services
            </h1>
            <br>
            <p>
                During development, I also worked on integrating telemetry services to track player behavior, 
                aiding the design department to make informed decisions:
                <br><br>
                <ul>
                <li>Implemented Amazon Web Servives.</li>
                <li>Implemented Azure Playfab.</li>
                <li>Handled communication with external partner related to player data collection.</li>
                </ul>
            </p>
            </div>
    </div>
</template>

<style scoped>

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
