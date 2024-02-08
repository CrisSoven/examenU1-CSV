<template>
	<b-navbar vertical class="pt-2" type="light">
		<b-row>
			<b-navbar-brand href="#">Gestión de vehículos</b-navbar-brand>
			<b-col>
				<b-nav vertical>
					<b-nav-item to="/inicio">Inicio</b-nav-item>
					<b-nav-item to="/inicio/registrar"
						>Registrar vehículo</b-nav-item
					>
					<b-nav-item to="/inicio/consultar"
						>Consultar vehículos</b-nav-item
					>
				</b-nav>
			</b-col>
		</b-row>
	</b-navbar>
</template>

<style scoped>
.sidebar {
	height: 100%;
	position: fixed;
}
</style>
