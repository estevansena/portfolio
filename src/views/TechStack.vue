<template>
  <div class="page">
    <div class="content">
      <SectionTitle 
        firstName="Tech " 
        lastName="Stack" 
      />
      <BodyMenu 
        :items="[
          { icon: faVuejs, label: 'Vue.js', description: 'Vue.js é um framework progressivo de JavaScript para construir interfaces de usuário reativas e componentes interativos' },
          { icon: faNodeJs, label: 'Node.js', description: 'Node.js é um ambiente de execução de JavaScript no lado do servidor, permitindo criar aplicações web escaláveis e de alta performance' },
          { icon: faHtml5, label: 'HTML', description: 'HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar o conteúdo de páginas na web' },
          { icon: faCss, label: 'CSS', description: 'CSS (Cascading Style Sheets) é a linguagem usada para estilizar e definir a aparência visual de páginas HTML na web' },
          { icon: faJsSquare, label: 'JavaScript', description: 'JavaScript é a linguagem que permite tornar páginas web interativas e dinâmicas' }
        ]"
        @select="onSelect"
      />
      <TypingText :text="currentDescription" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import BodyMenu from '../components/BodyMenu.vue'
import TypingText from '../components/TypingText.vue'
import { faCss, faHtml5, faJsSquare, faNodeJs, faVuejs } from '@fortawesome/free-brands-svg-icons'

const currentDescription = ref('Vue.js é um framework progressivo de JavaScript para construir interfaces de usuário reativas e componentes interativos')

function onSelect(item) {
  currentDescription.value = item.description
}
</script>

<style scoped>
.page {
  padding-left: 60px;
  padding-right: 40px;
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 1024px) {
  .page {
    padding-left: 40px;
    padding-right: 24px;
  }
}

@media (max-width: 768px) {
  .page {
    padding-left: 20px;
    padding-right: 16px;
    padding-top: 70px;
  }

  .content {
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .page {
    padding-left: 16px;
    padding-right: 12px;
  }
}
</style>
