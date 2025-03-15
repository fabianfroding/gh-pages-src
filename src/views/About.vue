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
					<p>Hello! I'm Fabian.</p>
					<p>
						I've been passionate about programming since I was 13, when I first discovered modding in PC games. 
						That early fascination turned into a lifelong drive to build, optimize, and innovate.
                    </p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>
                        Today, I'm a game programmer and software architect specializing in scalable software design and complex algorithms. 
						I have professional expertise in <strong>Unreal Engine and C++</strong>, backed by years of experience and a certification in Unreal Engine's Gameplay Ability System. 
						I also have extensive experience developing my own games in <strong>Unity and C#</strong>.
					</p>
					<br>
					<div class="separator-line"></div>
                    <br>
					<p>
						Whether I’m crafting intricate gameplay systems or optimizing performance, I’m always looking for creative and technical challenges to push my skills further.
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
							<li><p>
								I love games that emphasize exploration, especially Metroidvanias and immersive adventure titles. 
								The thrill of uncovering secrets and mastering intricate level designs is what inspires me as both a player and a developer.
							</p></li>
							<br>
							<li><h2>Some of my favorite titles are:</h2></li>
							<br>
							<li><p> • Metroid</p></li>
							<li><p> • Hollow Knight</p></li>
							<li><p> • Subnautica</p></li>
							<li><p> • The Legend of Zelda</p></li>
							<li><p> • Banjo-Kazooie</p></li>
							<li><p> • Shadow of the Colossus</p></li>
							<li><p> • Ori and the Blind Forest</p></li>
							<li><p> • Abzu</p></li>
							<li><p> • The Pathless</p></li>
							<li><p> • Octopath Traveler</p></li>
							<li><p> • Tales of Symphonia</p></li>
							<li><p> • Warcraft III</p></li>
							<li><p> • World of Warcraft</p></li>
						</ul>
                    </div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<h2>Outside of my time spent on development, I occasionally occupy myself with:</h2>
							<br>
							<li><p> • <strong>Cooking &amp; fitness</strong> – balancing creativity in the kitchen with staying active.</p></li>
							<li><p> • <strong>Movies &amp; series</strong> – especially discussing storytelling and cinematography.</p></li>
							<li><p> • <strong>Interior design</strong> – I love creating aesthetically pleasing and functional spaces.</p></li>
							<li><p> • <strong>Reading</strong> – topics like entrepreneurship, psychology, philosophy, and health.</p></li>
							<li><p> • <strong>Martial arts</strong> – both practicing and studying different styles.</p></li>
							<li><p> • <strong>Learning from game developers</strong> – always exploring new techniques on YouTube.</p></li>
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
