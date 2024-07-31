<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Project from './Project.svelte';
</script>

<Meta title="Projects – PHPxCODER" description="My projects." />

<main class="wrapper fade">
	<h1 class="header">Projects</h1>

	<p class="mt-4 mb-8 text-gray-400">Some of my projects.</p>

	<Project
		name="PDF Compressor"
		href="https://pdfc.dinokage.in"
		src="/images/projects/nimi.png"
	>
		A React application which uses AWS Services to compress PDFs without losing quality.
	</Project>

	<Project
		name="Gajala - All-in-One Discord Bot"
		href="https://gajala.dinokage.in"
		src="/images/projects/debating.png"
	>
		Poems? Music? Moderation? Gajala has it all. Maa vadu multi talented.
	</Project>

	<Project
		name="Valorant Credentials Manager"
		href="https://vcm.dinokage.in"
		src="/images/projects/pseudocode.png"
	>
		A custom account manager which sorts my Valorant accounts based on various criteria such as skins, rank, region etc.
	</Project>

	<Project
		name="Weather API Example"
		href="https://karnawww.netlify.app"
		src="/images/projects/boids.png"
	>
		A simple web application which implements OpenWeatherMap API to fetch weather based on browser location or user input.
	</Project>
</main>
