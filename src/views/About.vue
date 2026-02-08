<template>
	<div>
		<section class="about" id="about">
			<div class="container">
				<div class="profile-img">
					<img src="../resources/profile-pic.jpg">
				</div>
				<div class="about-details">
					<h3></h3>
					<p>
						Hi! My name is Fabian and I am a programmer with a versatile background.
						My journey as a developer began by creating mods in computer games as a child, which exposed me to the world of programming.
						After earning my bachelor's degree in Software Engineering, 
						I continued studying courses in data science, UX, and AI for games, 
						while at the same time working as a part-time software engineer. I then moved on to a game studio, where I'm currently residing.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3></h3>
					<p>
						My goal as a programmer is to always to deliver easy-to-use systems, both for the client and my team. I find it equally (if not more)
						gratifying to help those around me as delivering to the client.
						I have a passion for modular software design and spend a good chunk of my spare time 
						experimenting with different architectures that I then apply to my projects and share with my workmates.
                    </p>
                </div>
			</div>
		</section>

		<div class="separator-line"></div>
            <div class="container">
                <div class="my-skills">
                    <div class="skill fav-games">
						<h1>Current Projects</h1>
						<div class="busy-grid">
							<div class="skill">
								<div class="icon-container">
									<i class="fa-solid fa-dungeon"></i>
								</div>
								<h3>Working on Unreal Engine games at DoubleMoose Games</h3>
							</div>

							<div class="skill">
								<div class="icon-container">
									<i class="fa-brands fa-unity"></i>
								</div>
								<h3>Developing my own 2D game in Unity</h3>
							</div>

							<div class="skill">
								<div class="icon-container">
									<i class="fa-regular fa-heart"></i>
								</div>
								<h3>Taking care of my health and managing work-life balance</h3>
							</div>
						</div>
					</div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<p>Outside of my time spent on development, I dedicate my time to:</p>
							<li><p> • Exercising, mostly running and occasionally returning to my martial arts practice</p></li>
							<li><p> • Reading books about philosophy, entrepreneurship, and stories</p></li>
							<li><p> • Going to the movies and discussing cinematography and storytelling</p></li>
							<li><p> • Spending time with my partner and with animals</p></li>
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