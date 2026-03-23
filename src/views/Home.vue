<template>
  <div class="home">
    <h3>Estevan Sena</h3>
    <h2>Frontend Developer | Interactive UI</h2>
    <p class="typing">I’m a front-end developer focused on building modern interfaces with smooth interactions, reusable components, and immersive visual experiences.</p>
        <!-- linha separadora -->
      <div class="divider"></div>  
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

/* linha separadora animada */
.divider {
  height: 2px;
  margin: 20px 0;
  border-radius: 2px;

  background: linear-gradient(
    90deg,
    #a100ff,
    #4a00ff,
    #a100ff
  );

  background-size: 300% 100%;
  animation: moveGradient 3.0s ease-in-out infinite alternate;

  opacity: 0.85;
}

@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

</style>