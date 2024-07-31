<script lang="ts">
	import { useLanyard } from 'sk-lanyard';
	import Discord from '$lib/components/icons/Discord.svelte';
	// import {PUBLIC_DISCORD_USER_ID, PUBLIC_LANYARD_ENDPOINT} from '$env/static/public'

	const discordId = '697757845063729194';
	const lanyard = useLanyard({
		method: 'ws',
		wsUrl: `wss://api.phpxcoder.in/socket`,
		id: discordId
	});

	const statusColors: Record<string, string> = {
		online: 'bg-emerald-500',
		idle: 'bg-amber-400',
		dnd: 'bg-red-500',
		offline: 'bg-gray-600'
	};

	$: fetchAsset = $lanyard?.activities.find(a => a.type === 0);
</script>

<div class="mt-8 flex rounded-full items-center bg-gray-900">
	<div class="relative w-20 h-20 shrink-0 rounded-full">
		{#if $lanyard}
			<object
				data="https://cdn.discordapp.com/avatars/{discordId}/{$lanyard
					.discord_user.avatar}"
				type="image/png"
				class="w-20 h-20 rounded-full bg-gray-800 text-gray-400 grid place-items-center"
				aria-label="Discord Avatar"
			>
				<Discord />
			</object>

			<span
				class="z-10 absolute w-4 h-4 bottom-1 right-1 rounded-full ring-4 ring-gray-900
					{statusColors[$lanyard.discord_status]}"
			/>
		{:else}
			<div
				class="w-20 h-20 rounded-full bg-gray-800 text-gray-400 grid place-items-center"
			>
				<Discord />
			</div>
		{/if}
	</div>

	<div class="ml-4 py-2 pr-6">
		<p class="line-clamp-1 break-all text-gray-400">
			{#if $lanyard}
				<span class="font-semibold text-white">
					{$lanyard.discord_user.display_name}
				</span>

				<span class="ml-1">
					{$lanyard.discord_user.username}
				</span>
			{/if}
		</p>

		{#if fetchAsset}
			<p class="flex items-center text-sm">
				{#if fetchAsset}
				<img
						src="https://cdn.discordapp.com/app-assets/{fetchAsset.application_id}/{fetchAsset.assets.large_image}.png"
						alt=""
						class="w-5 h-5 mr-1"
					/>
					<!-- <img
						src="https://{fetchAsset.assets.large_image.split('https/')[1]}"
						alt=""
						class="w-8 h-8 mr-1"
					/> -->
				{/if}

				<span class="line-clamp-1 break-all">
					<p>{fetchAsset.name} {#if fetchAsset.details} -> {fetchAsset.details} {/if} {#if fetchAsset.state}-> {fetchAsset.state} {/if} </p>
				</span>
			</p>
		{/if}
	</div>
</div>
