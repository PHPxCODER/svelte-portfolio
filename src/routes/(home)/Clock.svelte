<script lang="ts">
	import { now } from '$lib/stores';

	import Sun from '$lib/components/icons/Sun.svelte';
	import Moon from '$lib/components/icons/Moon.svelte';

	const df = new Intl.DateTimeFormat('en-US', {
		day: 'numeric',
		year: 'numeric',
		month: 'long',
		timeZone: 'Asia/Kolkata'
	});

	const tf = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZone: 'Asia/Kolkata',
		timeZoneName: 'short'
	});

	function isDayTime(date: Date): boolean {
		const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit' };
		const kolkataTimeString = date.toLocaleTimeString('en-US', options);
		const kolkataHour = parseInt(kolkataTimeString.split(':')[0], 10);
		return kolkataHour >= 6 && kolkataHour < 18;
	}

	$: AgarDinnHai = isDayTime(new Date($now));
</script>

<p class="mt-8 flex text-sm gap-2 items-center text-white">
	{#if AgarDinnHai}
		<Sun />
	{:else}
		<Moon />
	{/if}

	{df.format(new Date($now))}
	&middot;
	{tf.format(new Date($now))}
</p>
