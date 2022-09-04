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
					<p>
						My time in the industry and academia have contributed to a diverse yet useful set of skills mainly consisting of 
						<strong>software engineering</strong> and <strong>game development</strong>, with a specialization in 
						<strong>software architecture</strong> and <strong>AI for games</strong>.
                    </p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>
                        My journey in game development began at the age of 13 when I discovered the Warcraft 3 World Editor.
						Since then, I've had somewhat of an obsession with creating things.
						Now, I'm experienced in both <strong>Unity</strong> and <strong>Unreal Engine</strong>.
						<br>I occasionally like to play my favourite games and try out new ones, 
						but most of my time I prefer to <strong>develop things</strong>, 
						be it programming complex gameplay systems or creating immersive experiences.
                    </p>
                </div>
			</div>
		</section>
		<div class="separator-line"></div>
            <div class="container">
                <div class="my-skills">
                    <div class="skill">
                        <h1></h1>
                    </div>
                </div>
                <div class="my-skills">

                    <div class="skill fav-games">
                        <h1>Favourite Games</h1>
						<ul>
							<li><h2>Some of my favourite games include:</h2></li>
							<br>
							<li><p> • Metroid</p></li>
							<li><p> • Subnautica</p></li>
							<li><p> • The Legend of Zelda</p></li>
							<li><p> • Hollow Knight</p></li>
							<li><p> • Banjo-Kazooie</p></li>
							<li><p> • Little Nightmares</p></li>
							<li><p> • Donkey Kong</p></li>
							<li><p> • Ori and the Blind Forest</p></li>
							<li><p> • Celeste</p></li>
							<li><p> • Dead Cells</p></li>
							<li><p> • Abzu</p></li>
							<li><p> • Octopath Traveler</p></li>
							<li><p> • Tales of Symphonia</p></li>
							<li><p> • Warcraft 3</p></li>
							<li><p> • World of Warcraft</p></li>
						</ul>
                    </div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<h2>Outside of my time spent on development, I occasionally occupy myself with:</h2>
							<br>
							<li><p> • Practicing martial arts</p></li>
							<li><p> • Reading books about entrepreneurship, psychology, philosophy, and health</p></li>
							<li><p> • Watching immersive movies &amp; series</p></li>
							<li><p> • Cooking</p></li>
							<li><p> • Exercising</p></li>
							<li><p> • Learning from game developers on Youtube</p></li>
							<!--li>
								<ul>
									<li><p class="global-link"> • <a href="https://www.youtube.com/channel/UCuHVjteDW9tCb8QqMrtGvwQ" target="_blank"><strong>Thomas Brush</strong></a></p></li>
									<li><p class="global-link"> • <a href="https://www.youtube.com/c/LostRelicGames" target="_blank"><strong>Lost Relic Games</strong></a></p></li>
									<li><p class="global-link"> • <a href="https://www.youtube.com/c/Unity3dCollege" target="_blank"><strong>Jason Weimann</strong></a></p></li>
								</ul>
							</li-->
						</ul>
                    </div>

                </div>
            </div>
			<br><br><br><br><br>
		<Footer :showArrow="true"></Footer>
	</div>
</template>

<style scoped>
	.fav-games {
		text-align:left;
	}
	.fav-games li {
		list-style-type: none;
	}
	.fav-games h2 {
		color: #638dccdd;
	}
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
