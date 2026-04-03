<template>
  <div class="home">
<h3>Estevan <span class="sena">Sena</span></h3>   
<h2>Frontend Developer | Interactive UI</h2>
    <p>I’m a front-end developer focused on building modern interfaces with smooth interactions, reusable components, and immersive visual experiences.</p>
        <!-- linha separadora -->
      <Divider/>
<h2>Projects</h2>
<p>Personal projects and work developed in professional environments, including real-world applications and hands-on experience.</p>
<div class="cards-container">
    
  <InfoCard
      title="Portfolio"
      text="Portfolio feito para apresentar meus projetos e habilidades"
      :tags="['Vue.js', 'JavaScript', 'CSS', 'HTML']"
      githubLink="https://github.com/estevansena/portfolio"
    />

  <InfoCard
      title="Video Backup Downloader"
      text="Ferramenta para download de vídeos, audios e thumbnails"
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
    
</div>
  <ViewMoreButton 
    class="view-more"
    url="/Projects"
    text="View More"
  />
 <Divider/> 
 <h2>Tech Stack</h2>
<p>Technologies and tools I use to build modern applications.</p>

<div class="cards-container">
  <StackCard
      image="https://github.com/estevansena.png"
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
    />

      <StackCard
      image="https://github.com/estevansena.png"
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
    />

      <StackCard
      image="https://github.com/estevansena.png"
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
    />

      <StackCard
      image="https://github.com/estevansena.png"
      title="Meu Projeto"
      text="Projeto feito com Vue e Node.js"
      :tags="['Vue.js', 'Node.js', 'JavaScript']"
    />

    </div>

  <ViewMoreButton 
    class="view-more"
    url="/TechStack"
    text="View More"
  />

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
  margin-top: 15px;
  padding-bottom: 50px;
}

/* Nome principal — texto gigante com glow */
h3 {
  font-size: 3rem;
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

/* Parágrafo descritivo — caixa de vidro navy com borda ciano */
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

.view-more {
  display: block;
  margin-top: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: nowrap;
  width: calc(100% - 20px);
  gap: 20px;
  overflow-x: auto;
  overflow-y: visible;
  padding-top: 10px; /* Espaço pra borda superior do card não ser cortada no hover */
  padding-bottom: 5px;
}

</style>
