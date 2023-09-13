<script lang="ts">
	import CaseCard from '$components/caseCard.svelte';
	import { projectsData } from '$helpers';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';

	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		parallax();
	});
	function parallax() {
		gsap.utils.toArray<HTMLDivElement>('.parallx').forEach((section) => {
			const image = section.querySelector('img');
			gsap.to(image, {
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					scrub: 1
				},
				yPercent: 20,
				ease: 'none'
			});
		});
	}
</script>

<svelte:head>
	<title>Projects -Elvis Osano</title>
</svelte:head>
<section class="pt-20">
	{#each projectsData as item, index}
		<CaseCard {index} data={item} />
	{/each}
</section>
