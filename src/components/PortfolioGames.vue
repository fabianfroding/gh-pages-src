<template>
    <div>
        <div id="portfolio-gd">
                <div class="portfolio-item">
                    <div class="portfolio-img has-margin-right">
                        <router-link to="/vaultofdarkness"><img src="../resources/project-images/vod-01.jpg" alt=""></router-link>
                    </div>
                    <div class="portfolio-description">
                        <h6>Warcraft 3 Mod</h6>
                        <h1>Vault of Darkness</h1>
                        <p>
                            A dungeon-crawler mod for Warcraft 3: The Frozen Throne
                            with scripted enemy AI, custom level design, dynamic hero selection system, custom UI and more.
                        </p>
                        <p class="cta">Highlights: <strong>Scripting</strong>, <strong>3D Level Design</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/vaultofdarkness"><strong>View Details</strong></router-link></p>
                        <br><br>
                        <a href="https://github.com/fabianfroding/wc3-vod-jass" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>

                <div class="separator-line"></div>

                <div class="portfolio-item">
                    <div class="portfolio-description has-margin-right">
                        <h6>2D Game Development (Group Project)</h6>
                        <h1>Clockwork Metroidvania</h1>
                        <p>
                            A metroidvania with a clockwork system. Inspired by Hollow Knight and The Legend of Zelda: Majora's Mask.
                            Features hand-drawn art and animations, equipment system, enemy AI with state machines and more.
                        </p>
                        <p class="cta">Highlights: <strong>Unity</strong>, <strong>C#</strong>, <strong>STATE MACHINES</strong>, <strong>2D ART</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/metroidvania"><strong>View Details</strong></router-link></p>
                    </div>
                    <div class="portfolio-img">
                        <router-link to="/metroidvania"><img src="../resources/project-images/metroidvania01.jpg" alt=""></router-link>
                    </div>
                </div>

                <div class="separator-line"></div>

                <div class="portfolio-item">
                    <div class="portfolio-img has-margin-right">
                        <router-link to="/planetaryrevelation"><img src="../resources/project-images/planetary-rev06.jpg" alt=""></router-link>
                    </div>
                    <div class="portfolio-description">
                        <h6>3D Game Development</h6>
                        <h1>Planetary Revelation</h1>
                        <p>
                            An interactable solar-system simulation with a custom gravity system based on real-time physics.
                        </p>
                        <p class="cta">Highlights: <strong>UNITY</strong>, <strong>C#</strong>, <strong>PARTICLE SYSTEMS</strong>, <strong>SCRIPTABLE OBJECTS</strong>, <strong>CUSTOM PHYSICS</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/planetaryrevelation"><strong>View Details</strong></router-link></p>
                        <br><br>
                        <a href="https://github.com/fabianfroding/unity-planetary-revelation/" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    
                </div>

                <div class="separator-line"></div>

                <div class="portfolio-item">
                    <div class="portfolio-description has-margin-right">
                        <h6>Game Prototyping</h6>
                        <h1>Bloodline</h1>
                        <p>
                            A dialogue-based game created with the Deig editor.
                            Features 4 different endings based on player choices, a custom-made map, 
                            and art and sprites from the Fire Emblem series.
                        </p>
                        <p class="cta">Highlights: <strong>Visual Scripting</strong>, <strong>Worldbuilding</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/bloodline"><strong>View Details</strong></router-link></p>
                    </div>
                    <div class="portfolio-img">
                        <router-link to="/bloodline"><img src="../resources/project-images/deig00.jpg" alt=""></router-link>
                    </div>
                </div>

                <div class="separator-line"></div>

            </div>
    </div>
</template>