<script lang="ts">
	import CasePrev from '$components/casePrev.svelte';

	const data = {
		title: 'Pushing the boundary on mobile',
		desc: 'OLX is the leader in the automotive vertical with 20 million users per month. They trusted our UX/UI agency to shape their design strategy and to lay the foundation for the future. '
	};
</script>

<section
	class="flex parallx overflow-hidden flex-col-reverse lg:flex-row items-center h-auto lg:h-screen relative"
>
	<div class="w-11/12 lg:w-7/12 h-80 ml-5 lg:h-auto relative lg:static">
		<img src="images/phone.png" alt="circles" class="object-cover w-full h-full grayscale" />
	</div>

	<CasePrev {data} />
</section>
