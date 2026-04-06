<template>
  <div class="hero">
    <SectionTitle 
      firstName="Tech " 
      lastName="Stack" 
      :items="[
        { icon: faVuejs, label: 'Vue.js', description: 'Vue.js é um framework progressivo de JavaScript para construir interfaces de usuário reativas e componentes interativos' },
        { icon: faNodeJs, label: 'Node.js', description: 'Node.js é um ambiente de execução de JavaScript no lado do servidor, permitindo criar aplicações web escaláveis e de alta performance' },
        { icon: faHtml5, label: 'HTML', description: 'HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar o conteúdo de páginas na web' },
        { icon: faCss, label: 'CSS', description: 'CSS (Cascading Style Sheets) é a linguagem usada para estilizar e definir a aparência visual de páginas HTML na web' },
        { icon: faJsSquare, label: 'JavaScript', description: 'JavaScript é a linguagem que permite tornar páginas web interativas e dinâmicas' }
      ]"
    />
  </div>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { faCss, faHtml5, faJsSquare, faNodeJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
</script>

<style scoped>
.hero {
  position: relative;
}

.hero :deep(.box-group) {
  top: 30%;
  transform: translateY(-25%);
}
</style>