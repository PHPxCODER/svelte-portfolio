<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Project from './Project.svelte';
</script>

<Meta title="Projects – PHPxCODER" description="My projects." />

<main class="wrapper fade">
	<h1 class="header">Projects</h1>

	<p class="mt-4 mb-8 text-gray-400">Some of my projects.</p>

	<Project
		name="RDP Datacenter"
		href="https://rdpdatacenter.cloud"
		src="https://res.cloudinary.com/ddvheihbd/image/upload/f_auto,q_auto/v1/assets/rdp-dc"
	>
	Building Cloud Platform in Public. <br>Ship with ease & speed.
	</Project>

	<Project
		name="CodePulse"
		href="https://code.rdpdatacenter.in"
		src="/images/projects/debating.png"
	>
	Real-Time Pair Programming Platform where developers can collaborate in real-time with an AI assistant.
	</Project>

	<Project
		name="Bakes & Blooms"
		href="https://blooms.phpxcoder.in"
		src="/images/projects/pseudocode.png"
	>
	Expose your Discord presence and activities to a RESTful API and WebSocket in less than 10 seconds.
	</Project>

	<Project
		name="Lanyard API"
		href="https://api.phpxcoder.in"
		src="https://camo.githubusercontent.com/796470d30c99e768269058f9cb1146a20b1da396f88d5c35f77eb0181d9a3aca/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f6c616e796172642f7374617469632f6c616e7961726474656d706c6f676f2e706e67"
	>
	Expose your Discord Presence to a RESTful API and WebSocket in less than 10 seconds.
	Built with Elixir & Redis.
	</Project>
</main>
