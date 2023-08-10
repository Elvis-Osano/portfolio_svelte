<script lang="ts">
	export let data: { title: string; desc: string };
</script>

<div class="flex flex-col lg:justify-center justify-start lg:w-5/12 w-5/6 lg:m-32 m-10 gap-24">
	<h1 class="lg:text-5xl text-3xl head font-sirenia tracking-wide">
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
