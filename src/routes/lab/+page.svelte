<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { Flip } from 'gsap/dist/Flip';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';

	onMount(() => {
		// gsap.registerPlugin(Flip);
	});
</script>

<svelte:head>
	<title>Lab</title>
</svelte:head>
<div class="min-h-screen flex flex-col gap-6 justify-center py-5 w-5/6 mx-auto">
	<div class="head">
		<h1 class="mask text-4xl font-extrabold head">Your Title Here</h1>
	</div>
</div>
