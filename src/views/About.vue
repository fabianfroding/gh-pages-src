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
					<p>Hello! I'm Fabian, a game programmer and software engineer with a specific interest in modular and scalable software design.
						My development skills are quite versatile, with core strengths in <strong>Unreal Engine and C++</strong>, and <strong>Unity and C#</strong>.
                    </p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>
                        My journey in programming began at age 13, when I first discovered modding in PC games. 
						That curiosity turned into a passion to learn, create and improve.
					</p>
					<br>
					<div class="separator-line"></div>
                    <br>
					<p>
						Whether I'm crafting immersive experiences or exploring innovative code architectures,  
						I'm always open to creative and technical collaborations.
					</p>
                </div>
			</div>
		</section>
		<div class="separator-line"></div>
            <div class="container">
                <div class="my-skills">
                    <div class="skill fav-games">
                        <h1>Favourite Games</h1>
						<ul>
							<li><h2>I enjoy playing a wide variety of games, such as:</h2></li>
							<br>
							<li><p> • Abzu</p></li>
							<li><p> • Banjo-Kazooie</p></li>
							<li><p> • Donkey Kong</p></li>
							<li><p> • Fire Emblem</p></li>
							<li><p> • Hollow Knight</p></li>
							<li><p> • Metroid</p></li>
							<li><p> • Octopath Traveler</p></li>
							<li><p> • Ori and the Blind Forest</p></li>
							<li><p> • Subnautica</p></li>
							<li><p> • Tales of Symphonia</p></li>
							<li><p> • The Pathless</p></li>
							<li><p> • The Legend of Zelda</p></li>
							<li><p> • Warcraft III</p></li>
							<li><p> • World of Warcraft</p></li>
						</ul>
                    </div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<h2>In my spare time, I occasionally occupy myself with:</h2>
							<br>
							<li><p> • Discussing cinematography and storytelling.</p></li>
							<li><p> • Exercise.</p></li>
							<li><p> • Following tech news.</p></li>
							<li><p> • Martial arts.</p></li>
							<li><p> • Reading novels, non-fiction book and poetry.</p></li>
							<li><p> • 2D art as a recreational activity.</p></li>
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
