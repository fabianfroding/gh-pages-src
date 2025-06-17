<template>
    <div>
        <section class="about" id="about">
			<div class="container">
				<div class="profile-img">
					<img class="fade-up" src="../resources/profile-pic.jpg">
				</div>
				<div>
                    <div class="profile-img">
					<br><br><br>
					<div class="about-intro">
						<h2 class="fade-up">Hello!</h2>
						<h1 class="fade-up delay-1">I'm Fabian,</h1>
						<p class="fade-only delay-1">
							A versatile Software Engineer driven by a passion for building modular systems and crafting seamless, 
							enjoyable experiences—across platforms and mediums, from code to interface.
						</p>
					</div>
				</div>
                </div>
			</div>
		</section>

        <div class="separator-line"></div>

        <section class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-heading">
                    <h1>Projects</h1>
                </div>
                <PortfolioProjects></PortfolioProjects>
            </div>
        </section>
        <Footer :showArrow="true"></Footer>
    </div>
</template>

<style scoped>
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.5s ease-out forwards;
}

.fade-only {
  opacity: 0;
  animation: fadeOnly 0.5s ease-out forwards;
}

.delay-1 {
  animation-delay: 0s;
}

.delay-2 {
  animation-delay: 0s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOnly {
  to {
    opacity: 1;
  }
}

</style>

<script>
import PortfolioProjects from '@/components/PortfolioProjects.vue';
import Footer from '@/components/Footer.vue'
export default {
    components: { PortfolioProjects, Footer }
}
</script>
