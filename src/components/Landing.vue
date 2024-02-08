<script setup>
import Footer from './Footer.vue';
</script>

<template>
	<div class="landing">
		<h1>Examen U1</h1>
		<h5>Desarrollo Web Profesional</h5>

		<b-card footer-class="text-center">
			<b-img
				src="https://picsum.photos/800/400/?image=2"
				alt="Image"
				class="img-fluid"
			/>
		</b-card>

		<b-link variant="primary" :to="{ name: 'inicio' }">
			Ir al inicio
		</b-link>

		<Footer />
	</div>
</template>

<style scoped>
.landing {
	text-align: center;
}
</style>
