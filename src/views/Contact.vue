<template>
    <div>
        <section class="contact" id="contact">
            <div class="container">
                <div class="section-heading">
                    <h1>Contact</h1>
                    <h6>I am always looking for ways to sharpen my crafts.</h6>
                    <h6>You can reach me by mail or by phone:</h6>
                </div>
                <div class="contact-icons">
                    <a href="mailto:fabian.froding@gmail.com" class="mail-icon">
                        <i class="fa fa-envelope"></i>
                    </a>
                </div>
                <br>
                <p id="contact-p-number">0736236760</p>
            </div>
        </section>
        <Footer :showArrow="false"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
