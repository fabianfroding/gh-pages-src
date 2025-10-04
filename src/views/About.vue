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
						I’m a developer who loves clean architecture, smart UI systems, and code that future-me won’t regret.
						I get most joy from well-organized architecture and code that does its job without being bloated. 
						My career started with modding games and evolved into building systems that feel good to use, 
						both for users and for teammates.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3>User-Centric Approach:</h3>
					<p>
						I’m big on user experience—not just for end users, but for the people building alongside me. 
						If I can make a tool faster to use, a workflow easier to follow, or a teammate’s day a little less annoying, 
						I’m doing my job right.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3>Soft Skills:</h3>
					<p>
						I value empathy, clarity, and trust as much as technical skill. 
						I’m at my best when I get to blend all three—thinking deeply, building thoughtfully, and collaborating openly. 
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
								<h3>Reading about software engineering practices</h3>
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