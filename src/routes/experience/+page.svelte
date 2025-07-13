<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Experience from './Experience.svelte';
	// import type { ExperienceItem } from './Experience.svelte';
	import { experiences } from '$lib/experience';
	import { totalExperienceMonths } from '$lib/experience';

	const totalMonths = totalExperienceMonths();
</script>

<Meta 
	title="Experience – PHPxCODER" 
	description="My professional experience and career journey." 
/>

<main class="wrapper fade">
	<h1 class="header">Experience</h1>
	
	<p class="mt-4 text-gray-400">
		My {totalMonths} years of hands-on experience through internships and personal projects, I've begun shaping my path in full-stack development.
	</p>

	<Experience {experiences} />
</main>