<template>
  <aside class="sidebar">

   <div class="profile">
  <img
    class="avatar"
    src="../assets/images/eu_avatar.png"
    alt="avatar"
  />

  <div class="info">
    <div class="name">Estevan Sena </div>
    <div class="username">@estevansena</div>
  </div>

</div>
          <!-- linha separadora -->
      <div class="divider"></div>
    <nav>
   
      <ul>
        <li><HomeOutlined class="icon"/><a href="#">Home</a></li>
        <li><ProjectOutlined class="icon"/><a href="#">Projects</a></li>
        <li><CoffeeOutlined class="icon"/><a href="#">About</a></li>
      </ul>

      <!-- linha separadora -->
      <div class="divider"></div>

      <!-- nova seção -->
      <h3 class="section-title">PROFESSIONAL</h3>

      <ul>
        <li><GithubOutlined class="icon" /> <a href="https://github.com/estevansena" target="_blank">GitHub</a></li>
        <li><LinkedinOutlined class="icon" /><a href="https://www.linkedin.com/in/estevan-sena-256a5524a/" target="_blank">LinkedIn</a></li>
      </ul>

       <!-- linha separadora -->
      <div class="divider"></div>

      <!-- nova seção -->
      <h3 class="section-title">SOCIAL</h3>

      <ul>
        <li><InstagramFilled class="icon"/><a href="https://www.instagram.com/estevan.senaa/" target="_blank">Instagram</a></li>
        <li><CameraFilled class="icon"/><a href="https://www.tiktok.com/@estevan.senaa" target="_blank">TikTok</a></li>
        <li><TwitterCircleFilled class="icon"/><a href="https://x.com/estevansena" target="_blank">Twitter</a></li>
        <li><VideoCameraOutlined class="icon"/><a href="https://www.twitch.tv/estevansenalive/about" target="_blank">Twitch</a></li>
      </ul>

          <!-- linha separadora -->
      <div class="divider"></div>

      <!-- nova seção -->
      <h3 class="section-title">INTERACTION</h3>

      <ul>
        <li><MessageOutlined class="icon"/><a href="https://discord.com/invite/vnbV5H2wrF" target="_blank">Discord</a></li>
      </ul>

    </nav>
  </aside>
</template>

<script setup>
import { HomeOutlined,ProjectOutlined,CoffeeOutlined,GithubOutlined,LinkedinOutlined,InstagramFilled,CameraFilled,TwitterCircleFilled,MessageOutlined,VideoCameraOutlined} from '@ant-design/icons-vue'
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(175, 2, 255, 0.356);
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
}

.username {
  font-size: 12px;
  opacity: 0.6;
}

.sidebar {
  width: 200px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  position: fixed;
  left: 5px;
  top: 0;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}

.icon {
  font-size: 18px;
  color: white;
}

a {
  color: white;
  text-decoration: none;
}

li:hover .icon {
  color: rgb(88, 8, 192);
}

li:hover a {
  color: rgb(110, 21, 226);
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

/* título da seção */
.section-title {
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
</style>