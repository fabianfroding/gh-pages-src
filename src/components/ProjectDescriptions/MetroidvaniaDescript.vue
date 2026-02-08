<template>
    <div>
        <h6 class="job-title"><span><strong>Development Period</strong>: 2021 - Present</span>
        <span class="align-right"><strong>Engine</strong>: Unity 6</span></h6>
        <h6 class="job-title"><span><strong>Team Project</strong></span>
        <span class="align-right"><strong>Status</strong>: Alpha</span></h6>
        <div class="separator-line"></div>
        <p>
            Emissary is a 2D action-platformer project, 
            developed as an ongoing exploration of gameplay systems and code architectures in Unity. 
            Throughout the project I focused on building all core systems from scratch. 
            The project currently remains in active development state.
            <br>
            Below, I highlight some of the systems I implemented, with links to the relevant sections of the project repository.
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
            Early in development, I encountered one of Unity’s common architectural challenges: 
            the tendency for event-driven systems to become tightly coupled when implemented through delegates and actions. 
            While ScriptableObjects provided a partial solution, I ultimately developed a custom C# Event Bus, 
            fully decoupled from Unity-specific constructs. 
            This approach reduces engine overhead, improves testability, and provides a scalable event-dispatching mechanism 
            suitable for complex gameplay systems.
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
            Both player and enemy behaviors are driven by a state machine framework written in pure C#. 
            Since these classes do not need to represent in-world objects, 
            keeping them independent of Unity’s MonoBehaviour architecture avoids unnecessary overhead.
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
        <p>
            This system supports various gameplay states—from navigation and combat logic to more specialized abilities 
            such as the player’s Ascend ability, which temporarily phases the character through terrain.
        </p>
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
            I've explored several performance-oriented techniques within Unity. 
            One of the most impactful was the implementation of a centralized Update Manager, based on the Observer pattern. 
            Instead of allowing numerous MonoBehaviours to individually execute Update() and FixedUpdate()—each 
            incurring engine-side overhead—objects subscribe to a unified manager that invokes their update logic directly.
            <br><br>
            This reduces costs, improves predictability, and ensures that the only object relying on Unity’s default update loops is the manager itself.
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
            Drawing on my professional experiencein Unreal Engine, I designed a custom UI stack and pooling system inspired by Epic Games' Common UI framework.

            Pooling UI elements dramatically improves performance, 
            especially in fast-paced or input-heavy gameplay where menus may be opened and closed in rapid succession.
            Avoiding frequent destruction and instantiation ensures smoother interactions and reduces frame spikes.
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
            Although my primary role is engineering, Emissary has a range of custom 2D assets. 
            All art and animations showcased in the project were created by me. 
            While I do not consider myself a professional artist, the process has been both challenging and rewarding, 
            and has broadened my appreciation for the craft and its iterative nature.
        </p>

        <br>

        <div class="separator-line"></div>

        <br>

        <h1>Collaboration</h1>

        <p>External Contributor: </p><p class="global-link"><a href="https://niguelchaos.github.io/" target="_blank">Nigel</a></p>
        <p>Nigel contributed to early development, including the camera system, and supported several aspects of game, level, and combat design. 
            His collaboration helped shape the project’s initial identity before our paths diverged.</p>

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
