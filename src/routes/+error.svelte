<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="wrapper fade">
	<h1 class="header">
		{$page.status} &ndash;
		{$page.error?.message ?? 'Unknown error'}
	</h1>

	<p class="mt-4 text-gray-400">
		you have entered the void. Let's go back
		<a href="/" class="text-white">home</a>.
	</p>
</main>
