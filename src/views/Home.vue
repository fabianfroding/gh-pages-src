<template>
    <div class="page-wrapper">
        <section class="about" id="about">
            <div class="container">
                <div class="about-details">
                    <h1 class="centered-heading">Fabian Fröding</h1>
                    <br>
                    <h2 class="centered-heading">Game Programmer &amp; Software Engineer</h2>
                    <br><br>
                    <p class="about-paragraph">
                        Welcome to my site! I use this space to showcase my projects, <br>document learnings, and experiment with different 
                        tech stacks.
                        <br><br>
                        Don't hesitate to contact me if you want to know more or are looking for collaboration.
                    </p>
                    <br><br>
                    <div class="footer-icons">
                        <a href="https://www.linkedin.com/in/fabian-fr%C3%B6ding-7b52ab160/" target="_blank" class="project-link">
                            <i class="fab fa-linkedin footer-icon"></i>
                        </a>
                        <a href="mailto:fabianfroding@proton.me" target="_blank" class="project-link">
                            <i class="fa fa-envelope footer-icon"></i>
                        </a>
                        <a href="https://github.com/fabianfroding" target="_blank" class="project-link">
                            <i class="fab fa-github footer-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <footer class="copyright">
            <div v-if="showArrow" @click="scrollToTop" class="up" id="up">
                <i class="fas fa-chevron-up"></i>
            </div>
            <p class="copyright-text">&copy; 2020 - {{ new Date().getFullYear() }} Fabian Fröding. Made with Vue and Github Pages.</p>
        </footer>
    </div>
</template>

<style scoped>
.page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.about {
    padding-top: 8%;
    flex: 1;
}

.centered-heading {
    text-align: center;
}

.about-paragraph {
    text-align: center;
    font-size: 1.65rem;
}

.footer-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.75rem;
}

.copyright {
    margin-top: auto;
    text-align: center;
}

.copyright-text {
    text-align: center;
}
</style>