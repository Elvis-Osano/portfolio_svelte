<script lang="ts">
	import CasePrev from '$components/casePrev.svelte';

	const data = {
		title: 'The Border Police goes digital.',
		desc: 'The OECD hired our UX agency to design an intelligence system. The user experience is universal. Border police agencies in 107 countries rely on the user interface to cope 	with the chaos of field operations.'
	};
</script>

<section class="flex min-h-screen relative parallx">
	<CasePrev {data} />

	<div class="absolute flex right-20 bottom-10 top-10 justify-end">
		<div class=" h-full">
			<img src="images/circles.svg" alt="circles" class="w-full h-full" />
		</div>
	</div>
</section>
