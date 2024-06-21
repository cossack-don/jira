<script lang="ts" setup>
import {RouterView} from 'vue-router'
import Header from '@/modules/app/components/Header.vue'
import Footer from '@/modules/app/components/Footer.vue'
</script>

<template>
  <Header/>

  <main>
    <RouterView/>
  </main>

  <Footer/>
</template>
