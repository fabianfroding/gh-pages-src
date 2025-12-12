<template>
    <div>
        <div>
        <h6 class="job-title"><span><strong>Development Period</strong>: 2019</span>
        <span class="align-right"><strong>Engine</strong>: Warcraft 3 World Editor</span></h6>
        <h6 class="job-title"><span><strong>Solo Project</strong></span>
        <span class="align-right"><strong>Status</strong>: Completed Prototype</span></h6>
        <div class="separator-line"></div>
        <p>
            Vault of Darkness is a dungeon-crawler mod for Warcraft 3: The Frozen Throne.
            The mod allows 1-6 players to control a group of custom heroes and descend into a dark desert dungeon.
            Players must collaborate to solve puzzles, and strategize to overcome coordination-demanding and reaction-based boss fights.
            The mod was scripted using JASS, Warcraft III's native scripting language.
        </p>
        <br>
        </div>

        <div>
            <h2>Media:</h2>
            <ul>
                <li class="global-link">
                    <p>
                        <a href="/resources/project-files/VoD0.1k.w3x" download>
                            Download: Vault of Darkness.w3x
                        </a>
                    </p>
                </li>
            </ul>
            <p>
                Requires Warcraft III: The Frozen Throne to play.
            </p>
            <br>
            <p>
                In order to play the mod put the VoD0.1k.w3x file into your Warcraft 3 Maps folder, 
                then start it in the game by locating "Vault of Darkness".
            </p>
        </div>
        <br>

        <div>
        <h1>
            Features Developed
        </h1>
        <br>
            <h2>Scripting</h2>
            <br>
            <p>
                <ul>
                <li>Developed a dynamic hero selection system suited for a dungeon crawler.</li>
                <li>Scripted a custom damage system.</li>
                <li>Implemented 50+ scripted custom abilities for heroes and enemies.</li>
                <li>Custom enemy AI behavior.</li>
                </ul>
            </p>

            <br>
            <p>Sample Ability Script "Radiant Nova". Heals targets in an area where the amount is split among the number of targets.</p>
            <details id="code-details">
                <summary>View Radiant Nova Sample Script <i class="fab fa-github"></i></summary>
                <div class="code-editor">
                    <pre><code id="radiant-nova">Loading...</code></pre>
                </div>
            </details>
            <br>

            <br>
            <p>Sample AI script to determine when an enemy should use an ability based on remaining HP and cooldown states.</p>
            <details id="code-details">
                <summary>View Enemy AI Sample Script <i class="fab fa-github"></i></summary>
                <div class="code-editor">
                    <pre><code id="enemy-ai">Loading...</code></pre>
                </div>
            </details>
            <br>

            <br>
            <p>Sample script that fetches a custom stat, Spell Power, based on the unit's status and equipped items.</p>
            <details id="code-details">
                <summary>View Fetch Custom Stat Script <i class="fab fa-github"></i></summary>
                <div class="code-editor">
                    <pre><code id="fetch-stat">Loading...</code></pre>
                </div>
            </details>
            <br>

            <p>Script Repository:</p>
            <a href="https://github.com/fabianfroding/wc3-vod-jass" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
            <br><br><br><br>

            <h2>Game and Level Design</h2>
            <br>
            <p>
                <ul>
                <li>Designed 7 custom heroes with custom abilities.</li>
                <li>Created 20+ custom enemies/bosses with custom abilities.</li>
                <li>Designed dungeon layout, encounter rooms and a progression system.</li>
                </ul>
            </p>

            <br>
            <p>Dungeon Layout Birdsview</p>
            <details id="code-details">
                <summary>View Dungeon Layout <i class="fab fa-github"></i></summary>
                <div class="code-editor">
                    <img src="/resources/project-files/vod-06.png">
                </div>
            </details>
            <br>

            <br>
            <p>Maze Room</p>
            <details id="code-details">
                <summary>View Maze Room <i class="fab fa-github"></i></summary>
                <div class="code-editor">
                    <img src="/resources/project-files/vod-07.png">
                </div>
            </details>
            <br>

            <br><br><br>

            <h2>Art</h2>
            <br>
            <p>
                <ul>
                <li>Created a custom UI be puzzling together various textures from World of Warcraft.</li>
                <li>Used references from Metroid Prime and Temple of Ahn'Qiraj (World of Warcraft) for the theme of the dungeon.</li>
                <li>Decorated and styled the environment using custom assets that I modified using textures from World of Warcraft.</li>
                </ul>
            </p>
            <br>

            <p class="tool-used">Tools Used:
                <br> • <strong>WARCRAFT 3 WORLD EDITOR</strong>
                <br> • <a href="http://jass.sourceforge.net/doc/" target="_blank"><strong>VJASS</strong></a> (Warcraft 3's enhanced scripting language)
                <br> • <a href="https://www.hiveworkshop.com/threads/war3-model-editor.62876/" target="_blank"><strong>WAR3 MODEL EDITOR</strong></a> (For model editing)
                <br> • <a href="https://www.hiveworkshop.com/threads/mdlvis-1-41.244082/" target="_blank"><strong>MDLVIS</strong></a> (Also for model editing)
                <br> • <a href="https://www.hiveworkshop.com/threads/mdlx-converter.62991/" target="_blank"><strong>MDLX CONVERTER</strong></a> (For converting model formats)
                <br> • <a href="https://krita.org/en/" target="_blank"><strong>KRITA</strong></a> (For texture editing)
                <br> • <a href="https://www.hiveworkshop.com/threads/blp-lab-v0-5-0.137599/" target="_blank"><strong>BLP LAB</strong></a> (For converting texture formats)
                <br> • <a href="https://www.hiveworkshop.com/threads/ladiks-casc-viewer.331540/" target="_blank"><strong>CASC VIEWER</strong></a> (For extracting raw Warcraft 3 files)
                <br> • <a href="https://www.hiveworkshop.com/threads/mpq-master-v1-2-0.62935/" target="_blank"><strong>MPQ MASTER</strong></a> (Also for extracting raw Warcraft 3 files)
            </p>

            <!--p class="global-link">
                Credits to the <a href="https://www.hiveworkshop.com" target="_blank">hiveworkshop.com</a> for their support and their third-party tools.
            </p-->
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";

    const radiantNovaURL = "https://raw.githubusercontent.com/fabianfroding/wc3-vod-jass/refs/heads/master/CustomAbilityRadiantNova_Sample.txt";
    const radiantNovaID = "radiant-nova";

    const enemyAIURL = "https://raw.githubusercontent.com/fabianfroding/wc3-vod-jass/refs/heads/master/EnemyAbilityUsageAI_Sample.txt";
    const enemyAIID = "enemy-ai";

    const fetchStatURL = "https://raw.githubusercontent.com/fabianfroding/wc3-vod-jass/refs/heads/master/FetchCustomStat_Sample.txt";
    const fetchStatID = "fetch-stat";

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
        loadCode(radiantNovaURL, radiantNovaID);
        loadCode(enemyAIURL, enemyAIID);
        loadCode(fetchStatURL, fetchStatID);
    });
</script>

