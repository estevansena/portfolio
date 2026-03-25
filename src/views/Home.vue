<template>
  <div class="home">
<h3>Estevan <span class="sena">Sena</span></h3>   
<h2>Frontend Developer | Interactive UI</h2>
    <p class="typing">I’m a front-end developer focused on building modern interfaces with smooth interactions, reusable components, and immersive visual experiences.</p>
        <!-- linha separadora -->
      <Divider/>
<h2>Projects</h2>
<p>Personal projects and work developed in professional environments, including real-world applications and hands-on experience.</p>
<div class="cards-container">
    
  <InfoCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
    />

  <InfoCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
      projectLink="https://meuprojeto.com"
    />

  <InfoCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
      projectLink="https://meuprojeto.com"
    />

  <InfoCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
      projectLink="https://meuprojeto.com"
    />
    
</div>
  <ViewMoreButton 
    class="view-more"
    url="https://github.com/estevansena"
    text="View More"
  />
 <Divider/> 
 <h2>Tech Stack</h2>
<p>Technologies and tools I use to build modern applications.</p>

<div class="cards-container">
  <StackCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
      projectLink="https://meuprojeto.com"
    />

      <StackCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
      projectLink="https://meuprojeto.com"
    />

      <StackCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
      projectLink="https://meuprojeto.com"
    />

      <StackCard
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
      githubLink="https://github.com/seuuser/projeto"
      projectLink="https://meuprojeto.com"
    />

    </div>

  <ViewMoreButton 
    class="view-more"
    url="https://github.com/estevansena"
    text="View More"
  />
 <Divider/> 
 <h2>About</h2>
<p>Technologies and tools I use to build modern applications.</p>

  <ViewMoreButton 
    class="view-more"
    url="https://github.com/estevansena"
    text="View More"
  />
<Divider/> 


</div>

</template>

<script setup>
import InfoCard from '../components/InfoCard.vue'
import StackCard from "../components/StackCard.vue"
import Divider from '../components/Divider.vue'
import ViewMoreButton from "../components/ViewMoreButton.vue"
</script>

<style scoped>
.home {
  margin-top: 100px;
}

.sena {
  background: linear-gradient(
    90deg,
    #a100ff,
    #4a00ff,
    #a100ff
  );

  background-size: 300% 100%;
  animation: moveGradient 3s ease-in-out infinite alternate;

  /* ESSENCIAL PRA TEXTO */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* opcional (compatibilidade futura) */
  background-clip: text;
  color: transparent;
}

h3, h2, p {
  margin: 10px 0;
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

.view-more {
  display: block;       /* garante comportamento de bloco */
  margin-top: 15px;     /* gap em relação aos cards */
}

.cards-container {
  display: flex;
  width: calc(100% - 20px);
  gap: 20px; /* espaço entre cards */
}

</style>