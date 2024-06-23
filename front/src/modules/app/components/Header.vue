<script lang="ts" setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <header class="header">
    <nav>
      <RouterLink class="link" to="/">Auth</RouterLink>
      <!--      <RouterLink class="link" to="/boards">Доски</RouterLink>-->
      <RouterLink class="link" to="/sprints">Спринты</RouterLink>
      <RouterLink class="link" to="/tasks">Таски</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #292d3e;
  padding: 10px 15px;
}

.link {
  color: #ffffff;
  margin-right: 15px;
}
</style>