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
                        <p class="global-link resume-file"><a href="./Resume_Fabian_Froding_2021a.docx" target="_blank"><i class="far fa-file-alt"/> Resume_Fabian_Froding_2021a.docx</a></p>
                        <p class="global-link resume-file"><a href="./Resume_Fabian_Froding_2021a.pdf" target="_blank"><i class="far fa-file-pdf"/> Resume_Fabian_Froding_2021a.pdf</a></p>
                    </div>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <h1>Recommendations</h1>
                        <p><i>"I can warmly recommend Fabian for different tasks in QA. 
                            He was of great help and took responsibility to ensure that the work went smooth and reached a high quality during the several weeks of the collaboration. 
                            He was attentive to our needs and wishes and made sure that the group collaborated to produce a clear and in-depth material of test data for our game project. 
                            The work consisted of finding test-participants and also to produce interview-questions and compile the results from these test-participants' testing of the game we're developing. 
                            Subsequently an analysis and conclusions were made that were insightful and the result was presented in a well-made presentation. 
                            Fabian shows that he takes the task seriously and shows that a passion exists for QA and to reach very good results."</i>
                        <br>- <strong>Dan Pettersson, VD at Warcry Interactive.</strong></p>

                        <br><br>
                        <div class="separator-line"></div>
                        <br><br>

                        <p><i>"Fabian trained very hard and was respectful to all of the masters. He is an honest and excellent student."</i> 
                        <br>- <strong>Master Shi Yan Jia, 34th generation Shaolin Warrior Monk at Qufu Shaolin Kung Fu School.</strong></p><p class="global-link"><a href="resources/QufuShaolinSchool_Certificate.pdf" target="_blank"></a></p>
                        <p class="global-link"><a href="./QufuShaolinSchoolCertificate_Fabian_Froding.pdf" target="_blank"><i class="far fa-file-pdf"/> Certificate from Qufu Shaolin Kung Fu School.pdf</a></p>
                    </div>
                    <div class="skill">
                        <h1>Academic Reports</h1>
                        <p class="global-link"><a href="https://gupea.ub.gu.se/handle/2077/67098" target="_blank"><i class="fas fa-link"/> The Evolution of Role Stereotypes and Related Design (Anti) Patterns</a></p>
                        <br>
                        <p class="global-link"><a href="./ImmersionInGamesAndMovies_Fabian_Froding.pdf" target="_blank"><i class="far fa-file-pdf"/> Measuring the Degree of Immersion in Video Games.pdf</a></p>
                        <br>
                        <p class="global-link"><a href="./ExploringTimeLoopSystems_Fabian_Froding.pdf" target="_blank"><i class="far fa-file-pdf"/> Exploring ways to evaluate the effect of time-loop systems on player experience in video games.pdf</a></p>
                        <br>
                        <p class="global-link"><a href="./PlaytestStudyWarcryYCJY_Fabian_Froding.pdf" target="_blank"><i class="far fa-file-pdf"/> Games User Experience - An experimental playtest-study with two external studios.pdf</a></p>
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

<style scoped>
.resume-file a {
    font-size: 1.5rem;
}
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
