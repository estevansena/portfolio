<template>
  <div class="container">
    <div class="carousel" :style="{ height: itemHeight + 'px' }">
      <div 
        class="carousel-track"
        :style="{ transform: `translateY(-${index * itemHeight}px)` }"
      >
        <div 
          v-for="(item, i) in items" 
          :key="i"
          class="carousel-item"
          :class="{ active: i === index }"
          :style="{ minHeight: itemHeight + 'px' }"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

/* PROPS */
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  itemHeight: {
    type: Number,
    default: 300
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  intervalTime: {
    type: Number,
    default: 6000
  }
});

const index = ref(0);

function updateIndex(delta) {
  index.value += delta;

  if (index.value < 0) index.value = 0;
  if (index.value >= props.items.length) {
    index.value = props.items.length - 1;
  }
}

function handleWheel(e) {
  if (e.deltaY > 0) {
    updateIndex(1);
  } else {
    updateIndex(-1);
  }
}

let interval;

onMounted(() => {
  window.addEventListener("wheel", handleWheel);

  if (props.autoplay) {
    interval = setInterval(() => {
      index.value = (index.value + 1) % props.items.length;
    }, props.intervalTime);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("wheel", handleWheel);
  clearInterval(interval);
});
</script>

<style scoped>
.container {
  width: 100%;
}

.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s ease;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ===== ESTILO ===== */

.carousel-item h2 {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(0, 238, 255, 0.7);
  margin: 0 0 20px 0;
}

.carousel-item p {
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

.carousel-item.active h2 {
  color: rgba(0, 238, 255, 1);
  text-shadow: 0 0 15px rgba(0,238,255,0.6);
}

.carousel-item.active p {
  color: rgba(0, 238, 255, 0.85);
  background: rgba(0, 238, 255, 0.06);
  border-left: 2px solid rgba(0, 238, 255, 0.8);
}

/* fade */
.carousel::before,
.carousel::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 2;
}

.carousel::before {
  top: 0;
  background: linear-gradient(to bottom, transparent, transparent);
}

.carousel::after {
  bottom: 0;
  background: linear-gradient(to top, transparent, transparent);
}
</style>