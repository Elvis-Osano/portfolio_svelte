<script lang="ts">
	export let index: number;
	export let data: {
		title: string;
		desc: string;
		thumbnail: string;
	};
</script>

<section
	class="flex parallx overflow-hidden flex-col-reverse {index % 2
		? 'lg:flex-row'
		: 'lg:flex-row-reverse'} items-center h-auto lg:h-screen relative"
>
	<div class="w-11/12 lg:w-7/12 h-80 ml-5 lg:h-auto relative lg:static">
		<img src={data.thumbnail} alt={data.title} class="object-cover w-full h-full grayscale" />
	</div>

	<div class="flex flex-col lg:justify-center justify-start lg:w-5/12 w-5/6 lg:m-32 m-10 gap-24">
		<h1 class="lg:text-5xl text-3xl head font-outfit tracking-wide">
			{data.title}
		</h1>

		<p class="text-xl font-outfit text-grey">
			{data.desc}
		</p>

		<a
			href="/case/police"
			class="border border-[#242424] hover:scale-90 transition-all relative z-30 bg-[#1A1A1A] w-max text-sm text-grey font-outfit py-4 px-8"
			>View Case Study</a
		>
	</div>
</section>
