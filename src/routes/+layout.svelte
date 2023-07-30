<script lang="ts">
	//ensures style consistency across all browsers;
	import 'modern-normalize/modern-normalize.css';
	import '../styles/app.css';
	import { Media } from '$utility';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { Nav } from '$common';
	export let data: PageData;
	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<Media query="(min-width: 1281px)" let:matches>
		{#if matches}
			<Nav />
			{#key data.url}
				<div
					class=""
					in:fly|global={{ duration: 500, delay: 100, x: -200 }}
					out:fly|global={{ duration: 300, x: 200 }}
				>
					<slot />
				</div>
			{/key}
		{/if}
	</Media>
	<Media query="(min-width: 481px) and (max-width: 1280px)" let:matches>
		{#if matches}
			<main class="h-screen grid place-items-center">
				<h1>Tablet Design</h1>
			</main>
		{/if}
	</Media>

	<Media query="(max-width: 480px)" let:matches>
		{#if matches}
			<main class="h-screen grid place-items-center">
				<h1>Mobile Design</h1>
			</main>
		{/if}
	</Media>
{:else}
	<main class="h-screen grid place-items-center">
		<h1>Loading</h1>
	</main>
{/if}
