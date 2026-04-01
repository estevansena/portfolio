<template>
  <aside class="sidebar">

   <div class="profile">
  <img
    class="avatar"
    src="https://github.com/estevansena.png"
    alt="avatar"
  />

  <div class="info">
    <div class="name">Estevan Sena </div>
    <div class="username">@estevansena</div>
  </div>

</div>

<Divider/>

    <nav>
   
 <ul>
  <li>
    <HomeOutlined class="icon"/>
    <router-link to="/Home">Home</router-link>
  </li>

  <li>
    <ProjectOutlined class="icon"/>
    <router-link to="/Projects">Projects</router-link>
  </li>

   <li>
    <ProjectOutlined class="icon"/>
    <router-link to="/TechStack">Tech Stack</router-link>
  </li>

  <li>
    <CoffeeOutlined class="icon"/>
    <router-link to="/About">About</router-link>
  </li>
</ul>
     

      <!-- nova seção -->
      <h3>PROFESSIONAL</h3>
       <Divider/> 

      <ul>
        <li><GithubOutlined class="icon" /> <a href="https://github.com/estevansena" target="_blank">GitHub</a></li>
        <li><LinkedinOutlined class="icon" /><a href="https://www.linkedin.com/in/estevan-sena-256a5524a/" target="_blank">LinkedIn</a></li>
      </ul>
      <!-- nova seção -->
      <h3>SOCIAL</h3>
       <Divider/> 

      <ul>
        <li><InstagramFilled class="icon"/><a href="https://www.instagram.com/estevan.senaa/" target="_blank">Instagram</a></li>
        <li><CameraFilled class="icon"/><a href="https://www.tiktok.com/@estevan.senaa" target="_blank">TikTok</a></li>
        <li><TwitterCircleFilled class="icon"/><a href="https://x.com/estevansena" target="_blank">Twitter</a></li>
        <li><VideoCameraOutlined class="icon"/><a href="https://www.twitch.tv/estevansenalive/about" target="_blank">Twitch</a></li>
      </ul>

      <!-- nova seção -->
      <h3>INTERACTION</h3>
       <Divider/> 

      <ul>
        <li><MessageOutlined class="icon"/><a href="https://discord.com/invite/vnbV5H2wrF" target="_blank">Discord</a></li>
      </ul>


    </nav>
  </aside>
</template>

<script setup>
import { HomeOutlined,ProjectOutlined,CoffeeOutlined,GithubOutlined,LinkedinOutlined,InstagramFilled,CameraFilled,TwitterCircleFilled,MessageOutlined,VideoCameraOutlined} from '@ant-design/icons-vue'
import Divider from '../components/Divider.vue'
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;
  margin-bottom: 0;
}

.avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid rgba(0, 238, 255, 0.5);
  box-shadow: 0 0 6px rgba(0, 238, 255, 0.3);
  border-radius: 0;
}

.info { display: flex; flex-direction: column; }

.name {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 238, 255, 0.6);
  letter-spacing: 1px;
  white-space: nowrap;
}

.username {
  font-size: 13px;
  color: rgba(0, 238, 255, 0.5);
  letter-spacing: 1px;
}

/* O painel em si: roxo escuro fundo + borda ciano brilhante */
.sidebar {
  width: 200px;
  height: 800px;

  /* Fundo: roxo-marinho profundo como na imagem */
  background:
    linear-gradient(rgba(13, 4, 30, 0.85), rgba(13, 4, 30, 0.85)),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 29px,
      rgba(0, 238, 255, 0.04) 29px,
      rgba(0, 238, 255, 0.04) 30px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 29px,
      rgba(0, 238, 255, 0.04) 29px,
      rgba(0, 238, 255, 0.04) 30px
    );

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Borda ciano neon + brilho externo ao redor do painel */
  border: 1px solid rgba(0, 238, 255, 0.45);
  box-shadow:
    0 0 12px rgba(0, 238, 255, 0.3),
    0 0 25px rgba(0, 238, 255, 0.08),
    inset 0 0 20px rgba(0, 238, 255, 0.02);

  color: white;
  padding: 20px;
  position: fixed;
  left: 20px;
  top: 30px;
  border-radius: 0;
}

ul { list-style: none; padding: 0; }

li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 0;
  padding: 8px 12px;
  border: 1px solid transparent;
  background: transparent;
  /* Transição só no movimento — cores mudam instantâneo pra não ter rastro */
  transition: transform 0.15s ease-out;
  cursor: pointer;
  border-radius: 0;
}

.icon { font-size: 18px; color: rgba(0, 238, 255, 0.5); transition: color 0.1s; }

a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  width: 100%;
}

/* Página ATIVA — magenta/pink como acentuado na imagem */
li:has(.router-link-active) {
  background: rgba(255, 0, 102, 0.1);
  border: 1px solid rgba(255, 0, 102, 0.7);
  box-shadow: 0 0 10px rgba(255, 0, 102, 0.4), inset 0 0 12px rgba(255, 0, 102, 0.05);
  transform: translateX(8px);
}
li:has(.router-link-active) .icon { color: #ff0066; }
li:has(.router-link-active) a {
  color: #ff0066;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(255, 0, 102, 0.8);
  letter-spacing: 0.5px;
}

/* Hover — ciano suave, consistente com a borda do painel */
li:hover {
  background: rgba(0, 238, 255, 0.05);
  border: 1px solid rgba(0, 238, 255, 0.4);
  box-shadow: 0 0 8px rgba(0, 238, 255, 0.2);
  transform: translateX(5px);
}
li:hover .icon { color: #00eeff; }
li:hover a { color: #00eeff; }

h3 {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 238, 255, 0.5);
  letter-spacing: 3px;
  margin: 16px 0 4px 0;
}
</style>