<template>
  <div :class="['project-card', $store.getters.getIsToggleDetails]" ref="card">
    <div class="section-title">
      <h2>Name Project</h2>
    </div>

    <div class="row">
      <div class="project-tag padd-15">
        <small>#Category/hashTag</small>
        <small>#Category/hashTag</small>
        <small>#Category/hashTag</small>
      </div>
    </div>

    <div class="row">
      <div class="project-content padd-15">
        <div class="project-title">
          <h3>Description Project:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure,
            nesciunt ducimus debitis ut neque laborum nulla earum sed
            laudantium? Impedit est cum veniam libero optio ex voluptatibus
            autem et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae ea iste totam amet officiis qui expedita mollitia ullam
            vero. Numquam tempore commodi perferendis dolores dolorum quas, nisi
            ratione eveniet adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div class="project-tech-title">
          <h3>Info Project:</h3>

          <ul>
            <li><strong>Date</strong> - 2020</li>
            <li><strong>Client</strong> - SuvStreet</li>
            <li><strong>Tools</strong> - html, sass, js, vue</li>
            <li><strong>Web</strong> - www.suvstreet.com</li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const card = ref(null)

    onMounted(() => {
      store.commit('setStyleHeightCard', card.value)
    })

    return {
      card,
    }
  },
}
</script>

<style></style>
