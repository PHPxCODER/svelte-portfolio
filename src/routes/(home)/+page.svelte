<script lang="ts">
	import { differenceInYears } from 'date-fns/differenceInYears';

	import { now } from '$lib/stores';

	import Clock from './Clock.svelte';
	import DiscordInfo from './DiscordInfo.svelte';
	import SocialLink from './SocialLink.svelte';
	import SpotifyInfo from './SpotifyInfo.svelte';
	import Weather from './Weather.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Envelope from '$lib/components/icons/Envelope.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import Spotify from '$lib/components/icons/Spotify.svelte';
	import Meta from '$lib/components/Meta.svelte';

	const birthday = new Date('2004-07-21T10:06:00.000Z');

	$: age = differenceInYears($now, birthday);
</script>

<Meta title="PHPxCODER" description="My portfolio and personal website." />

<main class="wrapper fade">
	<h1 class="header">PHPxCODER</h1>

	<p class="mt-4 text-gray-400">
		Hey! I'm <b>Subhadeep</b>,
		{age === 18 ? 'an' : 'a'}
		{age}-year-old developer from
		<b>India</b>.
	</p>

	<div class="mt-4 flex gap-6">
		<SocialLink href="https://github.com/phpxcoder" name="GitHub">
			<GitHub />
		</SocialLink>

		<SocialLink href="https://www.linkedin.com/in/phpxcoder/" name="LinkedIn">
			<Linkedin />
		</SocialLink>

		<SocialLink href="https://x.com/phpxcoder" name="Twitter">
			<Twitter />
		</SocialLink>

		<SocialLink href="https://open.spotify.com/user/31umplvfxtpdvktwncowyg725m6q "name="Spotify">
			<Spotify />
		</SocialLink>

		<SocialLink href="mailto:php@phpxcoder.in" name="Email">
			<Envelope />
		</SocialLink>
	</div>

	<Clock />
	<Weather />
	<DiscordInfo />
	<SpotifyInfo />
</main>
