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
  margin-bottom: 15px;
}

.avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.username {
  font-size: 14px;
  opacity: 0.6;
}

.sidebar {
  width: 200px;
  height: 800px;
  background: rgba(15, 15, 15, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  position: fixed;
  left: 20px;
  top: 30px;
  border-radius: 0;
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
  padding: 8px 12px;
  border: 1px solid transparent;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
}

.icon {
  font-size: 18px;
  color: white;
  transition: 0.15s;
}

a {
  color: white;
  text-decoration: none;
  transition: 0.15s;
  width: 100%;
}

li:hover {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

li:hover .icon {
  color: #ffffff;
}

li:hover a {
  color: #ffffff;
  font-weight: 500;
}

h3 {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: #aaaaaa;
  letter-spacing: 2px;
}
</style>