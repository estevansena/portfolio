<template>
  <div class="checkbox-wrapper-8">
    <input
      class="tgl tgl-skewed"
      id="cb3"
      type="checkbox"
      v-model="isDark"
      @change="applyTheme"
    />
    <label
      class="tgl-btn"
      for="cb3"
      data-tg-off="Dark Mode OFF"
      data-tg-on="Dark Mode ON"
    ></label>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

const applyTheme = () => {
  if (isDark.value) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    isDark.value = true;
  } else if (!savedTheme) {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  applyTheme();
});
</script>

<style scoped>
.checkbox-wrapper-8 .tgl {
  display: none;
}

/* container */
.checkbox-wrapper-8 .tgl + .tgl-btn {
  display: block;
  width: 190px;
  height: 42px;
  cursor: pointer;
  position: relative;
  user-select: none;

  background: transparent;
  border: none;

  transform: skew(-10deg);
}

/* textos */
.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:before,
.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:after {
  transform: skew(10deg);
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 42px;
  font-weight: 600;
  font-size: 14px;

  transition: opacity 0.3s ease;
}

/* OFF */
.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:before {
  content: attr(data-tg-off);
  opacity: 1;

  color: #000000;
 
}

/* ON */
.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:after {
  content: attr(data-tg-on);
  opacity: 0;

  color: #ffffff;


}

/* fade */
.checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:before {
  opacity: 0;
}

.checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:after {
  opacity: 1;
}
</style>
