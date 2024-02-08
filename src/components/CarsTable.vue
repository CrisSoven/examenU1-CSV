<template>
	<div>
		<b-container class="mt-3">
			<b-breadcrumb :items="items"></b-breadcrumb>
			<h1>Consultar vehículos</h1>

			<b-table
				id="my-table"
				:items="obtenerCarros"
				:per-page="perPage"
				:current-page="currentPage"
				ref="table"
				bordered
				small
			></b-table>

			<b-pagination
				v-model="currentPage"
				:total-rows="totalRows"
				:per-page="perPage"
				aria-controls="my-table"
			></b-pagination>

			<p class="mt-3">Current Page: {{ currentPage }}</p>
		</b-container>
	</div>
</template>

<script>
import carServices from '../services/Services';

export default {
	data() {
		return {
			items: [
				{
					text: 'Inicio',
					href: '/inicio',
				},
				{
					text: 'Lista de vehículos',
					active: true,
				},
			],
			carros: [],
			perPage: 5,
			currentPage: 1,
			totalRows: 1,
			filtro: '',
			fields: [
				{ key: 'brand', label: 'Marca', sortable: true },
				{ key: 'model', label: 'Modelo', sortable: true },
				{ key: 'year', label: 'Año', sortable: true },
				{ key: 'serie', label: 'Serie', sortable: true },
			],
		};
	},
	methods: {
		async obtenerCarros(ctx) {
			try {
				const data = await carServices.obtenerCarrosPaginadas(
					parseInt(ctx.currentPage),
					parseInt(ctx.perPage),
					ctx.filtro
				);
				this.carros = data.content;
				this.totalRows = data.totalElements;
				return this.carros;
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
