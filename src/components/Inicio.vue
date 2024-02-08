<template>
	<div>
		<b-breadcrumb :items="items" />
		<h1>Pagina principal</h1>
		<b-container class="mb-4">
			<b-card title="Registrar vehículo">
				<b-button variant="primary" :to="{ name: 'register' }">
					Registrar
				</b-button>
			</b-card>
		</b-container>
		<b-container class="mb-4">
			<b-card title="Consultar vehículos">
				<b-button variant="primary" :to="{ name: 'carsTable' }">
					Consultar
				</b-button>
			</b-card>
		</b-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					text: 'Inicio',
					active: true,
				},
			],
		};
	},
};
</script>
