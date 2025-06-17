<template>
  <div id="app">
    <nav class="top-nav">
      <ul class="nav-list">
          <li><router-link class="nav-link" to="/projects">Projects</router-link></li>
          <li id="nav-about"><router-link class="nav-link" to="/about">About</router-link></li>
          <li>
            <a href="https://www.linkedin.com/in/fabianfroding/" target="_blank" class="project-link">
              <i class="fab fa-linkedin footer-icon"></i>
            </a>
          </li>
          <li>
            <a href="mailto:fabian.froding@gmail.com" target="_blank" class="project-link">
                <i class="fa fa-envelope footer-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/fabianfroding" target="_blank" class="project-link">
                <i class="fab fa-github footer-icon"></i>
            </a>
          </li>
      </ul>
    </nav>
    <!--header>
      <div class="landing-text" id="landing-text">
          <h1>Fabian Fröding</h1><h6>Software Engineer</h6>
      </div>
    </header-->
    <div class="separator-line"></div>
    <router-view/>
  </div>
</template>
