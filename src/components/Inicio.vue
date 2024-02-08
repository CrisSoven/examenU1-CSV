<template>
  <div>
    <b-breadcrumb :items="items"/>
    <h1>Inicio:)</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            active: true
          }
        ]
      }
    }
  }
</script>
