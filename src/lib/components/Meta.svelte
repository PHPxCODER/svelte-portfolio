<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- <link rel="icon" href="https://api.phpxcoder.in/discord_id.png"> -->
	<link rel="icon" href="/images/phpbhai.webp">
</svelte:head>