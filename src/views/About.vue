<template>
	<div>
		<section class="about" id="about">
			<div class="container">
				<div class="profile-img">
					<img src="../resources/profile-pic.png">
				</div>

				<div class="about-details">
					<div class="about-heading">
						<h1>About</h1>
						<h6>Me</h6>
					</div>
					<p>My skillset consists of <strong>software engineering</strong>, <strong>gameplay programming</strong>, <strong>game design</strong>, <strong>project management</strong> and <strong>playtesting</strong>,
					making me a generalized specialist in these fields.</p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>Outside of my time spent on development, I occasionally occupy myself with martial arts, running, animals, reading non-fiction books and watching immersive movies and series.</p>
					<br>
                    <div class="separator-line"></div>
                    <br>
					<p>Some of my favourite games are The Legend of Zelda: Majora's Mask, Hollow Knight, Metroid Prime and Shadow of the Colossus, among others.</p>
                    <br>
                    <div class="separator-line"></div>
                    <br>
                    <p>Gamedev Youtubers that I actively follow to learn and keep up to date with the industry:</p>
                    <p class="global-link"> • <a href="https://www.youtube.com/channel/UCuHVjteDW9tCb8QqMrtGvwQ" target="_blank"><strong>Thomas Brush</strong></a></p>
                    <p class="global-link"> • <a href="https://www.youtube.com/c/LostRelicGames" target="_blank"><strong>Lost Relic Games</strong></a></p>
                    <p class="global-link"> • <a href="https://www.youtube.com/c/Unity3dCollege" target="_blank"><strong>Jason Weimann</strong></a></p>
                </div>
			</div>
		</section>
		<section class="services" id="services">
            <div class="container">
                <div class="section-heading">
                    <h1>Skillset</h1>
                    <h6>What I Can Do</h6>
                </div>
                <div class="my-skills">

                    <div class="skill">
                        <div class="icon-container">
                            <i class="fa fa-cogs"></i>
                        </div>
                        <h1>Software Development</h1>
                        <p>Experienced in developing tools, web applications, and in software architecture. Main languages include C# and Javascript.</p>
                    </div>

                    <div class="skill">
                        <div class="icon-container">
                            <i class="fas fa-gamepad"></i>
                        </div>
                        <h1>Gameplay Programming</h1>
                        <p>Cunning in Unity, C#, and scripting mods.</p>
                    </div>

                    <div class="skill">
                        <div class="icon-container">
                            <i class="fa fa-dungeon"></i>
                        </div>
                        <h1>Game Design</h1>
                        <p>I can do level design, texturing/model editing and worldbuilding.</p>
                    </div>

                </div>
                <div class="my-skills">

                    <div class="skill">
                        <div class="icon-container">
                            <i class="fa fa-chalkboard-teacher"></i>
                        </div>
                        <h1>Project Management</h1>
                        <p>My time managing teams in various group projects has made me a task-oriented leader with a love for platforms such as Trello.</p>
                    </div>

                    <div class="skill">
                        <div class="icon-container">
                            <i class="fas fa-search"></i>
                        </div>
                        <h1>Playtesting</h1>
                        <p>Capable of performing user experience-tests consisting of data collection, analyzation and visualization.</p>
                    </div>

                </div>
            </div>
        </section>
		<Footer :showArrow="true"></Footer>
	</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
