<template>
  <div class="home">
<h3>Abo<span class="sena">ut</span></h3>   
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
<Divider/> 

  <ViewMoreButton 
    class="view-more"
    url="/Home"
    text="Go Home"
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
  padding-bottom: 50px;
}

h3 {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(0, 238, 255, 0.6), 0 0 60px rgba(0, 238, 255, 0.2);
  margin: 0 0 5px 0;
}

.sena {
  color: #ff0066;
  -webkit-text-fill-color: #ff0066;
  text-shadow: 0 0 20px rgba(255, 0, 102, 0.8), 0 0 50px rgba(255, 0, 102, 0.3);
}

h2 {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(0, 238, 255, 0.7);
  margin: 0 0 20px 0;
}

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
  padding-top: 10px;
  padding-bottom: 5px;
}
</style>
