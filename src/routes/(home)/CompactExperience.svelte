<script lang="ts">
	import { recentPosition } from '$lib/experience';
	import { format } from 'date-fns';

	// Simplified experience data for home page display
	const currentExperience = recentPosition();

	function formatDate(date: Date): string {
		return format(date, 'MMM yyyy');
	}
</script>

<a href="/experience">
	<div class="mt-4 flex rounded-full items-center bg-gray-900 hover:bg-gray-800 transition-colors">
		<!-- Work icon/avatar -->
		<div class="w-20 h-20 rounded-full shrink-0 bg-gray-800 text-gray-400 grid place-items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6"
			>
				<path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
				<path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
			</svg>
		</div>
	
		<div class="ml-4 py-2 pr-6">
			<p class="line-clamp-1 break-all text-gray-400">
				<span class="font-semibold text-white">
					{currentExperience.title}
				</span>
				at
				<a
					href={currentExperience.website}
					target="_blank"
					rel="noopener noreferrer"
					class="border-b border-transparent transition hover:border-current"
				>
					{currentExperience.company}
				</a>
			</p>
	
			<p class="flex items-center text-sm text-gray-400">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-4 h-4 mr-1 shrink-0"
				>
					<path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
				</svg>
				<span class="line-clamp-1 break-all">
					Since {formatDate(currentExperience.startDate)}
				</span>
			</p>
		</div>
	</div>
</a>