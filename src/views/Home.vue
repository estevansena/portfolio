<template>
  <div class="home">
    <h3>ESTEVAN SENA</h3>
    <h2>Frontend Developer | Interactive UI</h2>
    <p class="typing">I’m a front-end developer focused on building modern interfaces with smooth interactions, reusable components, and immersive visual experiences.</p>
  </div>
</template>

<style scoped>
.home {
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