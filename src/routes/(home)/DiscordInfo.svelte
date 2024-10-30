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
				data="https://cdn.discordapp.com/avatars/{discordId}/{$lanyard.discord_user.avatar}"
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
					<img src={
							(fetchAsset.name === "Visual Studio" || 
							 fetchAsset.name === "Zed" ||
							 fetchAsset.name === "PhpStorm" ||
							 fetchAsset.name === "WebStorm" ||
							 fetchAsset.name === "IntelliJ IDEA" ||
							 fetchAsset.name === "IntelliJ IDEA Ultimate" ||
							 fetchAsset.name === "IntelliJ IDEA Community" ||
							 fetchAsset.name === "Jetbrains IDE" ||
							 fetchAsset.name === "PyCharm" ||
							 fetchAsset.name === "PyCharm Professional" ||
							 fetchAsset.name === "PyCharm Community" ||
							 fetchAsset.name === "Android Studio" ||
							 fetchAsset.name === "VEGAS Pro" ||
							 fetchAsset.name === "BlueStacks 5" ||
							 fetchAsset.name === "League of Legends" ) ?
							`https://cdn.discordapp.com/app-assets/${fetchAsset.application_id}/${fetchAsset.assets.large_image}.png`

							: fetchAsset.name === "Visual Studio Code" || fetchAsset.name === "Code" ?
							(fetchAsset.assets.small_image ? `https://${fetchAsset.assets.small_image.split('https/')[1]}` : "")

							: fetchAsset.name === "Prime Video" ?
							`https://cdn.discordapp.com/app-assets/705139844883677224/705140011946737806.webp`

							: fetchAsset.name === "VALORANT" ? 
							`https://cdn.discordapp.com/app-icons/700136079562375258/e55fc8259df1548328f977d302779ab7.webp` 

							: fetchAsset.name === "Genshin Impact" ?
							`https://cdn.discordapp.com/app-icons/762434991303950386/eb0e25b739e4fa38c1671a3d1edcd1e0.webp`

							: fetchAsset.name === "Grand Theft Auto V" ?
							`https://cdn.discordapp.com/app-icons/356876176465199104/069d9f4871b5ebd2f62bd342ce6ba77f.webp`

							: fetchAsset.name === "PUBG" ?
							`https://cdn.discordapp.com/app-icons/356873622985506820/d8cd6c5b1fe5b64ad2e0f660238eb43e.webp`

							: fetchAsset.name === "Counter-Strike 2" ?
							`https://cdn.discordapp.com/app-icons/1158877933042143272/558f5a26ecb3b17c3dea3d15c1df537a.webp`

							: fetchAsset.name === "Minecraft" && fetchAsset.assets.small_image ?
							`https://${fetchAsset.assets.small_image.split('https/')[1]}"`

							: (fetchAsset.name === "Tom Clancy's Rainbow Six Siege" || fetchAsset.name === "Rainbow Six Siege")?
							`https://cdn.discordapp.com/app-assets/445956193924546560/446301881636225042.png`

							: fetchAsset.name === "Fortnite" ?
							`https://cdn.discordapp.com/app-assets/${fetchAsset.application_id}/${fetchAsset.assets.small_image}.png`

							: fetchAsset.name === "Call of Duty®: WWII" ?
							`https://cdn.discordapp.com/app-assets/${fetchAsset.application_id}/${fetchAsset.assets.large_image}.png`

							: fetchAsset.assets.large_image ? 
							`https://${fetchAsset.assets.large_image.split('https/')[1]}` 
							: ""
							}
						alt=""
						class="w-8 h-8 mr-1"
					/>
				{/if}

				<span class="line-clamp-1 break-all">
					<p>{fetchAsset.name} {#if fetchAsset.details} -> {fetchAsset.details} {/if} {#if fetchAsset.state}-> {fetchAsset.state} {/if} </p>
				</span>
			</p>
		{/if}
	</div>
</div>
