<script lang="ts">
	import { onMount } from 'svelte';
	import type { WeatherResponse } from '$lib/types';

	// import Cloud from '$lib/components/icons/Cloud.svelte';

	let data: WeatherResponse | undefined;

	onMount(() => {
		fetch('/api/weather')
			.then(res => res.json())
			.then(res => {
				data = res;
			});
	});

	const names: Record<string, string> = {
		'clear sky': 'clear skies',
		'few clouds': 'a few clouds',
		'scattered clouds': 'scattered clouds',
		'broken clouds': 'broken clouds',
		'shower rain': 'rain showers',
		rain: 'rain',
		thunderstorm: 'thunderstorms',
		snow: 'snow',
		mist: 'mist'
	};
</script>

<p class="mt-2 flex text-sm gap-2 items-center text-white">

	<span>
		{#if data}
		<img src="http://openweathermap.org/img/w/{data.weather[0].icon}.png" alt="icon" class="w-6 h-6 float-left pr-2">
			<b>It's {data.main.temp.toFixed(1)} °C</b> with
			{names[data.weather[0].description] ?? data.weather[0].description}
			in
			<b>{data.name}</b>.
		{/if}
	</span>
</p>

<style lang="postcss">
	b {
		@apply font-semibold;
	}
</style>
