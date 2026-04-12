<template>
	<div>
		<section class="about" id="about">
			<div class="container">
				<div class="profile-img">
					<img src="../resources/profile-pic.jpg">
				</div>
				<div class="about-details">
					<h2>About Me</h2>
					<p>
						I am a programmer with a versatile background.
						My journey as a developer began by creating mods in computer games as a child, which exposed me to the world of programming.
						After earning my bachelor's degree in Software Engineering, 
						I continued studying courses in data science, UX, and AI for games, 
						while at the same time working as a part-time software engineer. I then moved on to a game studio, where I'm currently employed.
                    </p>
					<div class="separator-line"></div>
					<br>
					<h3></h3>
					<p>
						My goal as a programmer is to always to deliver easy-to-use systems, both for the client and my team. I find it equally (if not more)
						gratifying to help those around me as delivering solutions to a client.
						I have a passion for modular software design and spend a good chunk of my spare time 
						experimenting with different architectures that I then apply to my projects and share with my colleagues.
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

                    <!--div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<p>Outside of my time spent on development, I dedicate my time to:</p>
							<li><p> • Exercising, mostly running and occasionally returning to my martial arts practice</p></li>
							<li><p> • Reading books about philosophy, entrepreneurship, and stories</p></li>
							<li><p> • Going to the movies and discussing cinematography and storytelling</p></li>
							<li><p> • Spending time with my partner and with animals</p></li>
						</ul>
                    </div-->
                </div>
            </div>
			<br><br>
		<div class="separator-line"></div>

        <section class="services" id="resume">
            <div class="container">
                <div class="my-skills">
                    <div class="skill">
                        <h1>Recommendations</h1>
                    </div>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <p><i>"I can warmly recommend Fabian for different tasks in QA. 
                            He was of great help and took responsibility to ensure that the work went smooth and reached a high quality during the several weeks of the collaboration. 
                            He was attentive to our needs and wishes and made sure that the group collaborated to produce a clear and in-depth material of test data for our game project. 
                            <br><br>
                            The work consisted of finding test-participants and also to produce interview-questions and compile the results from these test-participants' testing of the game we're developing. 
                            Subsequently an analysis and conclusions were made that were insightful and the result was presented in a well-made presentation. 
                            Fabian shows that he takes the task seriously and shows that a passion exists for QA and to reach very good results."</i>
                        <br><br>- <strong>Dan Pettersson, VD at Warcry Interactive.</strong></p>
                    </div>
                    <div class="skill">
                        <p><i>"I have worked with Fabian on projects during our Bachelor’s in Software Engineering as well as on a project in Unity since March 2021. 
                            I find that little fazes Fabian - when approaching a complex problem, he calmly tries to understand the problem, then forms a plan to solve it and executes it effectively. 
                            His eagerness to learn, enthusiasm and dedication to his craft can be seen when he continually tries to improve the code architecture, grasp new concepts, and learn new tools quickly.
                            <br><br>
                            Fabian can always be relied on to work independently, delivering quality work. 
                            He is often proactive, unafraid to bring up issues or his thoughts when he believes it is necessary. 
                            During our academic projects, his strong work ethic was also shown when put under pressure, completing his tasks within tight deadlines.
                            <br><br>
                            Fabian’s sense of maturity is not only shown when dealing with technical issues, but also with his tact and consideration in human relationships. 
                            This has not only contributed to a sense of safety and fun in a work atmosphere, but also a voice of insight and reason as a friend. 
                            I believe Fabian can be a core asset to any team he wishes to be part of. As such, I can confidently recommend him."</i> 
                        <br><br>- <strong>Nigel Chao, Software Engineer/Game Designer.</strong></p><p class="global-link"><a href="resources/QufuShaolinSchool_Certificate.pdf" target="_blank"></a></p>
                    </div>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <p><i>"This is to certify that Mr. Fabian Froding has been employed as a part-time (50%) software engineer at Evoma AB during 15 March to 31 December 2021. 
                            During this part-time project employment period, he has assisted our software team in developing a customized simulation-optimization software for a major European aerospace manufacturer. 
                            <br><br>
                            In particular, he was responsible for customizing a JavaScript-based reporting module for the users to visualize and interact with large volumes of simulation-optimization output data. 
                            Despite this part-time project employment was short, he has completed the tasks assigned to him, diligently and independently, to our satisfaction."</i> 
                        <br><br>- <strong>Amos Ng, CEO at Evoma AB.</strong></p><p class="global-link"><a href="resources/QufuShaolinSchool_Certificate.pdf" target="_blank"></a></p>
                    </div>
					<div class="skill">
                        <p><i>"Fabian has trained under the Shaolin 34th generation Warrior Monk, Master Shi Yan Jia, for the duration of 6 months on Shaolin Kung Fu and Tai Chi etc.
                        He trained very hard and was respectful to all of the masters in this periods starts from June, 2013 to December, 2013.
                        He is an honest and excellent student."</i> 
                        <br><br>- <strong>Master Shi Yan Jia, 34th generation Shaolin Warrior Monk at Qufu Shaolin Kung Fu School.</strong></p><p class="global-link"><a href="resources/QufuShaolinSchool_Certificate.pdf" target="_blank"></a></p>
                    </div>
                </div>
            </div>
        </section>
		<div class="separator-line"></div>
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