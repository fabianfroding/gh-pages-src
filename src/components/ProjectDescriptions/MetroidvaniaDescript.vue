<template>
    <div>
        <h6 class="job-title"><span><strong>Development Period</strong>: 2021 - Present</span>
        <span class="align-right"><strong>Engine</strong>: Unity 6</span></h6>
        <h6 class="job-title"><span><strong>Team Project</strong></span>
        <span class="align-right"><strong>Status</strong>: Alpha</span></h6>
        <div class="separator-line"></div>
        <p>
            'Emissary' is an experimental 2D action platformer sample inspired by Hollow Knight. 
            In this project I showcase various core game systems and gameplay mechanics that I coded.
            All systems were coded from scratch without any third-party frameworks.
            Below is a list examples of systems that I created with links to the specific parts of the project repository.
        </p>

        <br><br>

        <div class="repo-link">
            <span><p>Project Repository:</p></span>
            <a href="https://github.com/fabianfroding/project-jolly-src/blob/master/" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div>

        <br>
            <div class="separator-line"></div>
        <br>
        
        <h1>Code Architecture</h1>

        <p>
            One lesson I quickly realized when working in Unity's C# is how tightly coupled the codebase can become when using events and actions.
            To find a solution to this, I found 
            <a href="https://www.youtube.com/watch?v=raQ3iHhE_Kk" target="_blank" class="global-link">
                an interesting talk about using Scriptable Objects
            </a>
            as event delegates to prevent classes creating dependencies to each other. While this approach works, I found an even
            better alternative, the Event Bus. I wrote the event bus purely in C# to reduce Unity overhead and decoupled from the Unity ecosystem.
            In addition, when using many events in a game it can affect performance, so a pure C# solution contributes to that aspect as well.
        </p>

        <br>

        <details id="code-details">
            <summary>View Event Bus Script <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="event-bus">Loading...</code></pre>
            </div>
        </details>

        <br>

        <h1>State Machine System</h1>

        <p>
            For the player and AI-characters, I used a state machine system. These classes were made pure C# classes since they don't needed to
            represent game objects in the world, and to prevent unnecessary Unity overhead.
        </p>

        <br>

        <!--div class="repo-link">
            <span><p>Enemy State Machine Script:</p></span>
            <a href="https://github.com/fabianfroding/project-jolly-src/blob/master/EnemyStateMachine/StateMachine/FiniteStateMachine.cs" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div-->

        <details id="code-details">
            <summary>View Enemy State Machine Script <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="enemy-stm">Loading...</code></pre>
            </div>
        </details>

        <br>

        <details id="code-details">
            <summary>View Enemy Charge State Sample <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="enemy-charge-state">Loading...</code></pre>
            </div>
        </details>

        <br><br>

        <div>
            <img class="detail-img" :src="require(`@/resources/project-images/metroidvania08.gif`)" />
        </div>
        <p>The Ascend ability/state warps the player through terrain.</p>
        <details id="code-details">
            <summary>View Player Ascend State Sample <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="player-ascend-state">Loading...</code></pre>
            </div>
        </details>

        <br>

        <h1>Performance Optimization</h1>

        <br>

        <p>
            During the project, I explored various tips and tricks in Unity. One that I applied is called the Update Manager.
            In short, when individual MonoBehaviours in Unity run their Update() and FixedUpdate() functions, those execute with hidden Unity overhead
            checks.
            The Update Manager, which is a variant of the Observer programming pattern, is a clever way to bypass these overhead checks when having
            numerous game objects in a scene.
            <br><br>
            The update manager register and tracks each object that needs tp be updated, and runs a custom update function on each of them.
            This way, the only game object i nthe entire game using Unity's default Update() and FixedUpdate() functions is the update manager.
        </p>

        <br>

        <details id="code-details">
            <summary>View Update Manager Script <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="update-manager">Loading...</code></pre>
            </div>
        </details>

        <br>

        <div class="separator-line"></div>

        <br>

        <h1>UI Programming</h1>

        <br>

        <p>
            Using my professional experience in UI programming, I crafted my own UI stack and pooling system inspired by Epic Games plugin Common UI.
            <br><br>
            You may ask, why pooling for a UI system? Pooling closed menues is much more efficient since destroying and recreating the menu 
            game objects can be expensive for performance, especially if a user spams inputs and causing menues to toggle rapidly, which is something
            developers need to be aware of when creating interactble systems.
        </p>

        <br>

        <details id="code-details">
            <summary>View Widget Stack &amp; Pooling System <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="widget-manager">Loading...</code></pre>
            </div>
        </details>

        <br>

        <details id="code-details">
            <summary>View Widget Base Class <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="widget-base">Loading...</code></pre>
            </div>
        </details>

        <br>

        <div class="separator-line"></div>

        <br>

        <h1>Creating 2D Art</h1>

        <br>

        <p>
            Working as an engineer both professionally and for side projects, creating 2D art was a needed and fun task, and challenge.
            All the art in the images were drawn and animated by myself, and while it is far from professional art, it is incredibly fun.
            As with any craft, becoming better requires time and dedication, and is certainly gratifying when you see your skills improve.
        </p>

        <br>

        <div class="separator-line"></div>

        <br>

        <h1>Collaboration</h1>

        <p>External Contributor: </p><p class="global-link"><a href="https://niguelchaos.github.io/" target="_blank">Nigel</a></p>
        <p>Nigel and I worked together on this project. Before we parted ways, Nigel helped develop the camera system, 
            and contributed to various game design, level design, and combat design aspects of the game.</p>

        <section class="services" id="resume">
            <div class="container">
                <div class="my-skills">
                    <div class="skill">
                        <h1>Recommendations</h1>
                    </div>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <p><i>"I have worked with Fabian on projects during our Bachelor’s in Software Engineering as well as on a project in Unity since March 2021. 
                            I find that little fazes Fabian - when approaching a complex problem, he calmly tries to understand the problem, then forms a plan to solve it and executes it effectively. 
                            His eagerness to learn, enthusiasm and dedication to his craft can be seen when he continually tries to improve the code architecture, grasp new concepts, and learn new tools quickly.
                            <br><br>
                            Fabian can always be relied on to work independently, delivering quality work. 
                            He is often proactive, unafraid to bring up issues or his thoughts when he believes it is necessary. 
                            During our academic projects, his strong work ethic was also shown when put under pressure, completing his tasks within tight deadlines.
                            <br><br>
                            Fabian’s sense of maturity is not only shown when dealing with technical issues, but also with his tact and consideration in human relationships. 
                            This has not only contributed to a sense of safety and fun in a work atmosphere, but also a voice of insight and reason as a friend. 
                            I believe Fabian can be a core asset to any team he wishes to be part of. As such, I can confidently recommend him."</i> 
                        <br><br>- <strong>Nigel Chao, Software Engineer/Game Designer.</strong></p><p class="global-link"><a href="resources/QufuShaolinSchool_Certificate.pdf" target="_blank"></a></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.repo-link {
  display: flex;
  align-items: center;
  gap: 6px;
}

.repo-link a {
  display: flex;
  align-items: center;
}

.detail-img {
  max-width: 400px;
  width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  align-content: left;
}

</style>
    
<script setup>
    import { onMounted } from "vue";

    const eventBusURL = "https://raw.githubusercontent.com/fabianfroding/project-jolly-src/master/Events/EventBus.cs";
    const eventBusID = "event-bus";

    const enemySTMURL = "https://raw.githubusercontent.com/fabianfroding/project-jolly-src/refs/heads/master/EnemyStateMachine/StateMachine/FiniteStateMachine.cs";
    const enemySTMID = "enemy-stm";

    const enemyChargeStateURL = "https://raw.githubusercontent.com/fabianfroding/project-jolly-src/refs/heads/master/EnemyStateMachine/BaseStates/ChargeState.cs";
    const enemyChargeStateID = "enemy-charge-state";

    const playerAscendStateURL = "https://raw.githubusercontent.com/fabianfroding/project-jolly-src/refs/heads/master/Player/PlayerStates/SubStates/PlayerAscendState.cs";
    const playerAscendStateID = "player-ascend-state";

    const updateManagerURL = "https://raw.githubusercontent.com/fabianfroding/project-jolly-src/refs/heads/master/Game/UpdateManager.cs";
    const updateManagerID = "update-manager";

    const widgetManagerURL = "https://raw.githubusercontent.com/fabianfroding/project-jolly-src/refs/heads/master/UI/WidgetManager.cs";
    const widgetManagerID = "widget-manager";

    const widgetBaseURL = "https://raw.githubusercontent.com/fabianfroding/project-jolly-src/refs/heads/master/UI/WidgetBase.cs";
    const widgetBaseID = "widget-base";

    async function loadCode(Url, elementId) {
    try {
        const response = await fetch(Url);
        const text = await response.text();
        document.getElementById(elementId).textContent = text; 
    } catch (err) {
        document.getElementById(elementId).textContent = "Failed to load code: " + err;
    }
    }

    onMounted(() => {
        loadCode(eventBusURL, eventBusID);
        loadCode(enemySTMURL, enemySTMID);
        loadCode(enemyChargeStateURL, enemyChargeStateID);
        loadCode(playerAscendStateURL, playerAscendStateID);
        loadCode(updateManagerURL, updateManagerID);
        loadCode(widgetManagerURL, widgetManagerID);
        loadCode(widgetBaseURL, widgetBaseID);
    });
</script>
