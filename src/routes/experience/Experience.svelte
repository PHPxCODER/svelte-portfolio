<script lang="ts">
	import type { ExperienceItem } from '$lib/experience';
	import { format, differenceInMonths } from 'date-fns';



	export let experiences: ExperienceItem[] = [];

	function formatDate(date: Date): string {
		return format(date, 'MMM yyyy');
	}

	function getDuration(startDate: Date, endDate?: Date): string {
		const end = endDate || new Date();
		const months = differenceInMonths(end, startDate);
		const years = Math.floor(months / 12);
		const remainingMonths = months % 12;

		if (years === 0) {
			return remainingMonths === 1 ? '1 month' : `${remainingMonths} months`;
		} else if (remainingMonths === 0) {
			return years === 1 ? '1 year' : `${years} years`;
		} else {
			const yearText = years === 1 ? '1 year' : `${years} years`;
			const monthText = remainingMonths === 1 ? '1 month' : `${remainingMonths} months`;
			return `${yearText} ${monthText}`;
		}
	}
</script>

<div class="mt-8">
	<div class="relative">
		<!-- Timeline line -->
		<div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800"></div>
		
		<div class="space-y-8">
			{#each experiences as experience, index}
				<div class="relative pl-12 fade-delay">
					<!-- Timeline dot -->
					<div class="absolute left-2 w-4 h-4 bg-white border-4 border-gray-800 rounded-full"></div>
					
					<!-- Experience card -->
					<div class="bg-gray-900 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800">
						<!-- Header -->
						<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
							<div>
								<h3 class="text-xl font-bold text-white">{experience.title}</h3>
								<div class="flex items-center gap-2 text-gray-400">
									{#if experience.website}
										<a 
											href={experience.website} 
											target="_blank" 
											rel="noopener noreferrer"
											class="font-semibold hover:text-white transition"
										>
											{experience.company}
										</a>
									{:else}
										<span class="font-semibold">{experience.company}</span>
									{/if}
									<span>•</span>
									<span>{experience.location}</span>
								</div>
							</div>
							<div class="text-sm text-gray-400 sm:text-right relative">
								<!-- Position type in top-right -->
								<span class="absolute top-0 right-0 px-2 py-1 bg-gray-800 rounded-md text-xs font-medium">
									{experience.type}
								</span>
							
								<div class="mt-6">
									{formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
								</div>
								<div class="text-xs text-gray-500">
									{getDuration(experience.startDate, experience.endDate)}
								</div>
							</div>
						</div>

						<!-- Description -->
						<div class="space-y-2 mb-4">
							{#each experience.description as desc}
								<p class="text-gray-300 text-sm leading-relaxed">• {desc}</p>
							{/each}
						</div>

						<!-- Technologies -->
						{#if experience.technologies && experience.technologies.length > 0}
							<div class="flex flex-wrap gap-2">
								{#each experience.technologies as tech}
									<span class="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs font-medium">
										{tech}
									</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	/* Additional fade-in animation for timeline items */
	.fade-delay > * {
		animation-delay: calc(var(--index, 0) * 100ms + 200ms);
	}
</style>