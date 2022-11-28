<template>
  <MainLayout>
    <template #title>
      <SectionTitle />
    </template>

    <template #content>
      <ContactTitleLayout text="first"></ContactTitleLayout>

      <div class="row">
        <ContactCardLayout v-for="(icon, key, id) in iconMapInfo" :key="id">
          <template #icon>
            <i :class="['fa', icon]"></i>
          </template>
          <template #title> {{ $t(`contact.info.${key}.title`) }} </template>
          <template #text> {{ $t(`contact.info.${key}.text`) }} </template>
        </ContactCardLayout>
      </div>

      <ContactTitleLayout text="second"></ContactTitleLayout>

      <div class="row">

        <ContactForm></ContactForm>

      </div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/layout/MainLayout.vue'
import SectionTitle from '../components/layout/SectionTitle.vue'
import ContactCardLayout from '../components/contact/ContactCardLayout.vue'
import ContactTitleLayout from '../components/contact/ContactTitleLayout.vue'
import ContactForm from '../components/contact/ContactForm.vue'

export default {
  setup() {
    const iconMapInfo = {
      phone: 'fa-brands fa-telegram',
      marker: 'fa-map-marker-alt',
      envelope: 'fa-envelope',
      web: 'fa-globe-europe',
    }

    return {
      iconMapInfo,
    }
  },
  components: {
    MainLayout,
    SectionTitle,
    ContactTitleLayout,
    ContactCardLayout,
    ContactForm
  },
}
</script>

<style></style>
