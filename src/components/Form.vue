<template>
	<div>
		<b-breadcrumb :items="items" />
		<h1>Registro de vehículos</h1>
		<b-container>
			<b-form @submit="checkForm">
				<b-alert show variant="warning" v-if="errors.length">
					<b>Error:</b>
					<ul>
						<li v-for="error in errors" :key="error.index">
							{{ error }}
						</li>
					</ul>
				</b-alert>

				<b-form-group label="Marca" class="mb-2">
					<b-form-input
						v-model="marca"
						placeholder="Marca del vehículo"
					/>
				</b-form-group>

				<b-form-group label="Modelo" class="mb-2">
					<b-form-input
						v-model="modelo"
						placeholder="Modelo del vehículo"
					/>
				</b-form-group>

				<b-form-group label="Año del fabricación" class="mb-4">
					<b-form-input
						v-model="year"
						placeholder="Año de fabricación del vehículo"
						type="number"
					/>
				</b-form-group>

				<b-form-group label="Número de serie" class="mb-2">
					<b-form-input v-model="serie" placeholder="XXXX000-00XX" />
				</b-form-group>

				<b-button type="submit" variant="primary">Submit</b-button>
			</b-form>
		</b-container>
	</div>
</template>

<script>
import carroServices from '../services/Services';

export default {
	data() {
		return {
			items: [
				{
					text: 'Inicio',
					href: '/inicio',
				},
				{
					text: 'Registrar vehículos',
					active: true,
				},
			],
			errors: [],
			marca: '',
			modelo: '',
			year: '',
			serie: '',
		};
	},
	methods: {
		checkForm: async function (e) {
			this.errors = [];

			//campo marca
			if (!this.marca) {
				this.errors.push('El nombre de la marca es obligatorio');
			} else if (!this.validField(this.marca)) {
				this.errors.push(
					'El nombre de la marca no puede contener signos'
				);
			}

			//campo modelo
			if (!this.modelo) {
				this.errors.push('El nombre del modelo es obligatorio');
			} else if (!this.validField(this.modelo)) {
				this.errors.push(
					'El nombre del modelo no puede contener signos'
				);
			}

			//campo year
			if (!this.year) {
				this.errors.push('El año de fabricación es obligatorio');
			} else if (this.year > new Date().getFullYear()) {
				this.errors.push(
					'El año de fabricación no puede ser mayor al año actual'
				);
			}

			//campo serie
			if (!this.serie) {
				this.errors.push('El número de serie es obligatorio');
			} else if (!this.validateSerie(this.serie.trim())) {
				this.errors.push('El número de serie debe seguir el formato');
			}

			if (this.errors.length > 0) {
				e.preventDefault();
				return;
			}

			try {
				const data = await carroServices.registrarCarro({
					brand: this.brand,
					model: this.model,
					year: this.year,
					serie: this.serie,
				});

				this.brand = '';
				this.model = '';
				this.year = 0;
				this.serie = '';

				console.log(data);
			} catch (error) {
				console.error(error);
			}
		},
		validField: function (field) {
			var re = /^[A-Za-z-0-9]+$/;
			return re.test(field);
		},
		validateSerie: function (serie) {
			var re = /^[A-Za-z]{4}[0-9]{3}-[0-9]{2}[A-Za-z]{2}$/;
			return re.test(serie);
		},
	},
};
</script>
