<template>
  <div id="app">
    <nav class="top-nav">
      <ul class="nav-list">
          <div class="nav-section">
            <li><p class="nav-title">Fabian Fröding Game/Software Developer</p></li>
          </div>
          
          <div class="nav-section">
            <li><router-link class="nav-link" to="/" exact-active-class="active">Games</router-link></li>
            <li id="nav-about"><router-link class="nav-link" to="/software" active-class="active">Software</router-link></li>
            <li id="nav-about"><router-link class="nav-link" to="/research" active-class="active">Research</router-link></li>
            <li id="nav-about"><router-link class="nav-link" to="/about" active-class="active">About</router-link></li>
          </div>
          
          <!--div class="nav-section">
            <li>
              <a href="https://www.linkedin.com/in/fabianfroding/" target="_blank" class="project-link">
                <i class="fab fa-linkedin footer-icon"></i>
              </a>
            </li>
            <li>
              <a href="mailto:fabianfroding@proton.me" target="_blank" class="project-link">
                  <i class="fa fa-envelope footer-icon"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/fabianfroding" target="_blank" class="project-link">
                  <i class="fab fa-github footer-icon"></i>
              </a>
            </li>
          </div-->
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>

.nav-link.active {
  color: var(--text-theme-link-active);
}

</style>
