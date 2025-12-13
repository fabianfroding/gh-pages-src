<template>
    <div>
        <h6 class="job-title"><span><strong>Development Period</strong>: 2020</span>
        <span class="align-right"><strong>Engine</strong>: Unity</span></h6>
        <h6 class="job-title"><span><strong>Solo Project</strong></span>
        <span class="align-right"><strong>Status</strong>: Complete</span></h6>
        <div class="separator-line"></div>
        <p>
            This project is an interactive simulation of a fictional solar system, 
            built to showcase dynamic orbital behaviour in an explorable environment.
            <br><br>
            All celestial bodies in the simulation are governed by Newton’s law of universal gravitation, 
            allowing planets and their sun to exert realistic gravitational forces upon one another. 
            The user can freely navigate the system using intuitively designed mouse controls, 
            and may select individual planets to view detailed information. 
            Upon selection, the camera locks onto the chosen body and follows it until the interface is closed.
            <br><br>
            The project draws inspiration from Outer Wilds and Metroid, 
            combining a fascination with space exploration and the desire to craft a visually distinct, atmospheric solar system. 
            The audio landscape incorporates synth samples from the Metroid Prime series, 
            resampled by the YouTuber <a class="temp-text-link" href="https://www.youtube.com/playlist?list=PLiqpukU6_PxuTKGV46tZFzGDcDSHSvcVb" target="_blank">Synamax</a>.
            <br><br>
            
            Developing this simulation allowed me to explore physics-driven systems, camera interaction design, 
            and the challenge of presenting complex motion in an accessible, aesthetically cohesive format.
        </p>
        <br><br>

        <div>
            <h2>Media:</h2>
            <ul>
                <li class="global-link">
                    <p>
                        <a href="https://drive.google.com/file/d/1yFzOjrIcC0XxKmOUlpRUGBGn5dmA4Y6w/view?usp=sharing" download>
                            Download: SolarSystemSim.zip
                        </a>
                    </p>
                </li>
            </ul>
            <br>
            <p>
                In order to play the simulation download the .zip-file and extract it, then run SolarSystemSim.exe.
            </p>
        </div>

        <br><br>
        <h2>Script Samples</h2>
        <br>

        <p>Simulation script to update all velocities and then all positions.</p>
        <details id="code-details">
            <summary>View Body Simulator Script <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="body-simulator">Loading...</code></pre>
            </div>
        </details>
        <br>

        <p>Celestial Body script.</p>
        <details id="code-details">
            <summary>View Celestial Body Script <i class="fab fa-github"></i></summary>
            <div class="code-editor">
                <pre><code id="celestial-body">Loading...</code></pre>
            </div>
        </details>
        <br>

        <br><br>
        <p>Project Repository:</p>
        <a href="https://github.com/fabianfroding/unity-planetary-revelation/" target="_blank" class="project-link">
            <i class="fab fa-github"></i>
        </a>
        <br><br>

        <p class="tool-used">Tools Used:
            <br> • <strong>UNITY</strong>
            <br> • <a href="https://docs.unity3d.com/ScriptReference/ParticleSystem.html" target="_blank"><strong>PARTICLE SYSTEMS</strong></a>
            <br> • <a href="https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation" target="_blank"><strong>CUSTOM GRAVITY PHYSICS</strong></a>
            <br> • <a href="https://docs.unity3d.com/Manual/class-ScriptableObject.html" target="_blank"><strong>SCRIPTABLE OBJECTS</strong></a>
        </p>
        <br><br>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";

    const bodySimulatorURL = "https://raw.githubusercontent.com/fabianfroding/unity-planetary-revelation/refs/heads/master/Assets/Scripts/SolarSystem/BodySimulator.cs";
    const bodySimulatorID = "body-simulator";

    const celestialBodyURL = "https://raw.githubusercontent.com/fabianfroding/unity-planetary-revelation/refs/heads/master/Assets/Scripts/SolarSystem/CelestialBody.cs";
    const celestialBodyID = "celestial-body";

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
        loadCode(bodySimulatorURL, bodySimulatorID);
        loadCode(celestialBodyURL, celestialBodyID);
    });
</script>
