<template>
  <div class="home">
<h3>Proje<span class="sena">cts</span></h3>   
<h2>Frontend Developer | Interactive UI</h2>
    <p>Personal projects and work developed in professional environments, including real-world applications and hands-on experience.</p>
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
    url="https://github.com/estevansena"
    text="View More"
  />

</div>

</template>

<script setup>
import InfoCard from '../components/InfoCard.vue'
import Divider from '../components/Divider.vue'
import ViewMoreButton from "../components/ViewMoreButton.vue"
</script>

<style scoped>
.home {
  margin-top: 15px;
  padding-bottom: 15px;
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