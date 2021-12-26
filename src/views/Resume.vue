<template>
    <div>
        <section class="services" id="resume">
            <div class="container">
                <div class="section-heading">
                    <h1>Resume</h1>
                    <h6>Documents</h6>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <h1>Resume</h1>
                        <p class="global-link"><a href="resources/documents/Resume.docx" target="_blank"><i class="far fa-file-alt"/> Resume.docx</a></p>
                        <p class="global-link"><a href="resources/documents/Resume.pdf" target="_blank"><i class="far fa-file-pdf"/> Resume.pdf</a></p>
                    </div>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <h1>Recommendations</h1>
                        <p><i>"Fabian trained very hard and was respectful to all of the masters. He is an honest and excellent student."</i> - <strong>Master Shi Yan Jia, 34th generation Shaolin Warrior Monk.</strong></p><p class="global-link"><a href="resources/QufuShaolinSchool_Certificate.pdf" target="_blank"></a></p>
                        <p class="global-link"><a href="resources/documents/QufuShaolinSchool_Certificate.pdf" target="_blank"><i class="far fa-file-pdf"/> Certificate from Qufu Shaolin Kung Fu School.pdf</a></p>
                    </div>
                    <div class="skill">
                        <h1>Academic Reports</h1>
                        <p class="global-link"><a href="https://gupea.ub.gu.se/handle/2077/67098" target="_blank"><i class="far fa-file-pdf"/> The Evolution of Role Stereotypes and Related Design (Anti) Patterns.pdf</a></p>
                        <p class="global-link"><a href="resources/documents/ImmersionInGamesAndMovies.pdf" target="_blank"><i class="far fa-file-pdf"/> Measuring the Degree of Immersion in Video Games.pdf</a></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="experience" id="experience">
            <div class="container">
                <div class="section-heading">
                    <h1>Experience & Education</h1>
                    <h6>Recent Occupations</h6>
                </div>

                <div class="timeline">
                    <ul>
                        <li class="date" data-date="2021 - Present">
                            <h1>University of Skövde</h1>
                            <p>MSc in Game Development</p><p class="timeline-job-spec"> (Games User Experience)</p>
                        </li>
                        <li class="date" data-date="2021 - 2022">
                            <h1>Evoma</h1>
                            <p>Software Engineer</p><p class="timeline-job-spec"> (Data Visualization)</p>
                        </li>
                        <li class="date" data-date="2020 - 2021">
                            <h1>Smoofit</h1>
                            <p>Software Developer</p><p class="timeline-job-spec"> (Embedded Systems)</p>
                        </li>
                        <li class="date" data-date="2019 - 2020">
                            <h1>Chalmers Student Housing</h1>
                            <p>Customer Service</p>
                        </li>
                        <li class="date" data-date="2017 - 2020">
                            <h1>University of Gothenburg</h1>
                            <p>BSc in Software Engineering and Management</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
