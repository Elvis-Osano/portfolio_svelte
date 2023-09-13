<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/app.css';
	import 'iconify-icon';
	import { onMount } from 'svelte';
	import { Footer, Nav, LoadGsap, Loader } from '$components';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<LoadGsap />
	<main class="relative" id="viewport">
		<Nav />
		<slot />
		<Footer />
	</main>
{:else}
	<Loader />
{/if}
