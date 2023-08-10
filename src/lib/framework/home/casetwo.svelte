<script lang="ts">
	import CasePrev from '$components/casePrev.svelte';

	const data = {
		title: 'The AI That Keeps Banking Safe',
		desc: 'Our UX/UI design empowers fraud officers to quickly and effectively respond to cybersecurity threats, while our UX design ensures error-free handling of complex 			scenarios that affect millions of transactions per second.'
	};
</script>

<section
	class="flex parallx flex-col overflow-hidden lg:flex-row items-center py-20 text-dark h-auto lg:h-screen relative"
>
	<CasePrev {data} />

	<div class="w-11/12 lg:w-7/12 h-80 mr-5 lg:h-auto relative lg:static">
		<img
			src="images/bank.png"
			alt="circles"
			class="object-cover w-full h-full grayscale project_img"
		/>
	</div>
</section>
