<template>
  <!-- вёрстка когда открыты больше деталей -->
  <div :class="['project', 'section', $store.getters.getIsToggleNav]">
    <div class="container">

      <CardInfo/>

      <div class="row padd-15 btn-details">
        <button class="btn">More details +</button>
        <button class="btn">X</button>
      </div>

      <div class="project-item">
        <button class="btn">next</button>

        <div class="project-item-inner shadow-dark">
          <img
            src="https://api.lorem.space/image/face?w=1920&h=1080"
            alt="picture"
          />
        </div>

        <button class="btn">past</button>
      </div>
    </div>
  </div>

  <!-- Две кнопки открыть детали проекта и закрыть сам проект -->
</template>

<script>
import CardInfo from './CardInfo.vue'

export default {
  setup() {

  },
  components: {
    CardInfo,
  }
}
</script>

<style>


.project-item {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 20px 0;
}

.project-item-inner {
  border: 6px solid var(--bg-black-100);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  max-width: 80%;
}

.project-item-inner img {
  max-width: 100%;
}

.btn-details {
  justify-content: space-between;
}

.group-btn {
  display: flex;
}
</style>
