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
						Over the years in the industry I’ve grown into a developer focused on designing modular architectures, 
						creating intuitive UI systems, and writing optimized and maintainable code. 
						My journey into development began with modding games as a child, which sparked a curiosity for learning and crafting.
						Through my recent roles, I’ve also developed an adaptable and attentive mindset that 
						support and meets the needs of my team.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3>User-Centric Approach:</h3>
					<p>
						Outside of work, I actively explore software engineering best practices, applying them to both 
						professional and personal projects. I believe the best systems are those that feel supportive 
						to the people using them. Collaborating with cross-functional teams has taught me the importance of 
						delivering solutions that empower others to work more smoothly and efficiently.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3>Soft Skills:</h3>
					<p>
						Beyond technical expertise, I value empathy, transparency, and trust as the foundation of strong teamwork. 
						I believe that leadership should care as much about people as it does about results. By bringing together technical skill, 
						thoughtful insight, and a positive, team-oriented attitude, I strive to contribute to both the success of the project 
						and the well-being of the people behind it.
						<br><br>
						I aim to bring a mix of technical expertise, thoughtful insights, and a positive, 
						collaborative attitude to every team I join.
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
									<i class="fa-brands fa-unity"></i>
								</div>
								<h3>Developing my own game in Unity</h3>
							</div>

							<div class="skill">
								<div class="icon-container">
									<i class="fa-solid fa-paintbrush"></i>
								</div>
								<h3>Drawing 2D art and animations</h3>
							</div>

							<div class="skill">
								<div class="icon-container">
									<i class="fa-solid fa-book"></i>
								</div>
								<h3>Reading about software engineering practices from Google</h3>
							</div>
						</div>
					</div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<p>Outside of my time spent on development, I occupy myself with:</p>
							<li><p> • Movies &amp; cinematography</p></li>
							<li><p> • Hiking and outdoor exploration</p></li>
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