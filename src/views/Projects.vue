<template>
  <div class="projects">
    <h3>Projects</h3>
    <p class="typing">My main projects</p>
  </div>
</template>

<style scoped>
.projects {
  margin-top: 100px;
}

/* efeito typing */
.typing {
  width: fit-content;
  overflow: hidden;
  white-space: nowrap;

  border-right: 2px solid #ffffff; /* cursor */

  animation: 
    typing 3s steps(30, end),
    blink 0.8s infinite;
}

/* animação de digitação */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* cursor piscando */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>