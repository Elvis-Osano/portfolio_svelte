<script lang="ts">
	//ensures style consistency across all browsers;
	import 'modern-normalize/modern-normalize.css';
	import '../styles/app.css';
	import '../styles/styles.css';
	import 'iconify-icon';
	// import { Media } from '$utility';
	import { fly } from 'svelte/transition';
	// import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { Nav } from '$common';

	import Loader from '$common/loader.svelte';
	import Footer from '$components/footer.svelte';
	// export let data: PageData;

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<!-- <Loader /> -->
	<main class="relative" id="viewport">
		<section class="content">
			<Nav />
			<slot />
		</section>
		<Footer />
	</main>
{:else}
	<Loader />
{/if}
