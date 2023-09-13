<script lang="ts">
	import Logo from './logo.svelte';
	import Socials from './socials.svelte';
</script>

<nav class=" top-8 w-full fixed z-30">
	<div class="flex w-5/6 mx-auto justify-between items-center">
		<a href="/" class="h-8 w-8" id="navlogo">
			<Logo />
		</a>

		<Socials />
	</div>
</nav>
