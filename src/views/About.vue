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
                        My skillset mainly consists of <strong>software engineering</strong> and <strong>game development</strong>, 
						with a specialization in <strong>Unity</strong>, <strong>C#</strong>, <strong>software architecture</strong> and <strong>data visualization</strong>.
                    </p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>
                        Outside of my time spent on development, I occasionally occupy myself with practicing martial arts, running, animals, reading non-fiction books and watching immersive movies and series.
                    </p>
					<br>
                    <div class="separator-line"></div>
                    <br>
					<p>Some of my favourite games are <strong>Hollow Knight</strong>, <strong>Metroid Prime</strong>, <strong>Shadow of the Colossus</strong>, and <strong>The Legend of Zelda: Majora's Mask</strong>, among other atmospheric and explorative games.</p>
                    <br>
                    <div class="separator-line"></div>
                    <br>
                    <p>Gamedev-youtubers that I actively follow to learn and keep up to date with the industry:</p>
                    <p class="global-link"> • <a href="https://www.youtube.com/channel/UCuHVjteDW9tCb8QqMrtGvwQ" target="_blank"><strong>Thomas Brush</strong></a></p>
                    <p class="global-link"> • <a href="https://www.youtube.com/c/LostRelicGames" target="_blank"><strong>Lost Relic Games</strong></a></p>
                    <p class="global-link"> • <a href="https://www.youtube.com/c/Unity3dCollege" target="_blank"><strong>Jason Weimann</strong></a></p>
                </div>
			</div>
		</section>
		<Footer :showArrow="false"></Footer>
	</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
