<template>
  <div class="container">
    <h1 class="text-center my-5">مرحبا بكم في عيادات الحجايزة</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css');
body {
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
}
</style>