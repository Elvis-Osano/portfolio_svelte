<script>
	import Icon from '$common/icon.svelte';
</script>

<section class="  w-full mt-10">
	<div
		class="border-t border-grey lg:py-5 py-4 flex items-center justify-between lg:w-11/12 w-full mx-auto lg:px-0 px-3"
	>
		<span class="text-grey text-xs capitalize">2023 &copy; All rights Reserved</span>
		<span class="flex items-center gap-2">
			{#each ['instagram', 'twitter', 'linkedin'] as item, index}
				<a href="/" class="font-outfit text-xs hover:text-whitney capitalize text-grey"
					>{item}</a
				>
				<span class="text-grey font-extralight {index > 1 ? 'hidden' : 'inline-block'}"
					>/</span
				>
			{/each}
		</span>
	</div>
</section>
