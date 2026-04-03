<template>
  <div class="home">
    <h3>Estevan <span class="sena">Sena</span></h3>   
    <h2>Frontend Developer | Interactive UI</h2>
    <p>
      I’m a front-end developer focused on building modern interfaces with smooth interactions, reusable components, and immersive visual experiences.
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-left: 80px;
  padding-right: 20px;

  box-sizing: border-box; /* evita scroll lateral */
}

/* Nome principal — texto gigante com glow */
h3 {
  font-size: 6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(0, 238, 255, 0.6), 0 0 60px rgba(0, 238, 255, 0.2);
  margin: 0 0 5px 0;
}

/* Sobrenome em destaque magenta */
.sena {
  color: #ff0066;
  -webkit-text-fill-color: #ff0066;
  text-shadow: 0 0 20px rgba(255, 0, 102, 0.8), 0 0 50px rgba(255, 0, 102, 0.3);
}

/* Subtítulo — ciano com tracking */
h2 {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(0, 238, 255, 0.7);
  margin: 0 0 20px 0;
}

/* Parágrafo descritivo */
p {
  font-size: 0.95rem;
  color: rgba(0, 238, 255, 0.55);
  line-height: 1.8;
  letter-spacing: 0.3px;
  margin: 8px 0 20px 0;
  max-width: 700px;
  padding: 12px 18px;
  background: rgba(0, 238, 255, 0.03);
  border-left: 2px solid rgba(0, 238, 255, 0.4);
}
</style>