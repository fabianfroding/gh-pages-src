<template>
	<div>
		<section class="about" id="about">
			<div class="container">
				<div class="profile-img">
					<img src="../resources/profile-pic.jpg">
				</div>
				<div class="about-details">
					<h3>Background:</h3>
					<p>
						I'm a developer efficient at creating features, systems and rapid prototyping.
						My journey in programming started by scripting mods for games, which evolved into a curiosity for problem-solving.
						After earning my degree in software engineering, I've now worked both in the tech and game industry.
						Apart from bringing expertise in technical areas, and also assist and support the team I work with.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3>User-Centric Approach:</h3>
					<p>
						I’m big on user experience — not just for end users, but for the people working alongside me. 
						If I can make a tool faster to use, a workflow easier to follow, or a teammate’s task easier to achieve, 
						I’m doing my job right.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3>Soft Skills:</h3>
					<p>
						I value clarity, trust and empathy as much as technical skill. 
						I’m at my best when I get to blend them all - collaborating openly and building thoughtfully. 
						If I can make both the project and the process better, I’m happy.
                    </p>
                </div>
			</div>
		</section>

		<div class="separator-line"></div>
            <div class="container">
                <div class="my-skills">
                    <div class="skill fav-games">
						<h1>Currently busy with</h1>
						<div class="busy-grid">
							<div class="skill">
								<div class="icon-container">
									<i class="fa-solid fa-dungeon"></i>
								</div>
								<h3>Working on Post-game content for Abyssus at DoubleMoose Games</h3>
							</div>

							<div class="skill">
								<div class="icon-container">
									<i class="fa-brands fa-unity"></i>
								</div>
								<h3>Developing a 2D game in Unity</h3>
							</div>

							<div class="skill">
								<div class="icon-container">
									<i class="fa-solid fa-gear"></i>
								</div>
								<h3>Exploring and tinkering with features in UE 5.7</h3>
							</div>
						</div>
					</div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<p>Outside of my time spent on development, I occupy myself with:</p>
							<li><p> • Hiking and outdoor exploration</p></li>
							<li><p> • Movies &amp; cinematography</p></li>
							<li><p> • Reading philosophy, psychology, and entrepreneurship</p></li>
							<li><p> • Fitness and nutrition</p></li>
							<li><p> • Cooking</p></li>
							<li><p> • Attending conferences and meeting new people</p></li>
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
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
	}
	.fav-games h2 {
		color: var(--text-theme-generic);
	}
	.skill h3 {
		padding-top: 0rem;
		font-weight: 100;
	}
	.icon-container {
		width: 8.5rem;
		height: 8.5rem;
		border: solid var(--gradient-theme-start);
		background-color: var(--gradient-theme-end);
		margin-bottom: 2rem;
		display: flex;
		transform: rotate(0deg);
		border-radius: 45px;
	}
	.icon-container i {
		transform: rotate(0deg);
	}
	.busy-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	}

	.busy-grid .skill {
	text-align: center;
	}

	.busy-grid .skill:last-child:nth-child(odd) {
	grid-column: 1 / -1;
	justify-self: center;
	}

	.about-details p {
		font-weight: 400;
	}
</style>

<script>

import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}

</script>