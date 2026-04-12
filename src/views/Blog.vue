<template>
	<div>
      <div class="separator-line"></div>
      <section class="portfolio" id="portfolio">
          <div class="container">
              <div id="portfolio-se">
                <h1>Blog</h1>
                <div class="separator-line"></div>

                <!-- TODO: Tag filtering -->
                <div class="filter-buttons">
                </div>

                <div v-for="(post, index) in posts" :key="index">
                    <div class="portfolio-img has-margin-right">
                        <router-link :to="post.route">
                            <img 
                                v-if="post.previewImage" 
                                :src="require(`@/resources/project-images/${post.previewImage}`)" 
                                :alt="post.title" 
                            />
                            <div v-else></div>
                        </router-link>
                    </div>
                </div>
              </div>
          </div>
      </section>
      <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>
import BlogPost1 from '@/views/BlogViews/BlogPost1.vue';

export default {
    data() {
        return {
        selectedFilter: null,
        posts: [
            BlogPost1.data().projectDetails,
        ]};
    },
};
</script>
