<script lang="ts">
	import Icon from '$common/icon.svelte';
</script>

<section
	class="relative h-[80vh] grid place-items-center border-t-[1px] border-[#242424] lg:w-11/12 mx-auto"
>
	<div class="lg:w-5/6 w-full flex flex-col gap-11 mx-auto items-center h-max">
		<h1
			class="font-outfit text-5xl head lg:w-3/6 w-full text-center font-normal leading-[50px]"
		>
			Tell me about your next project
		</h1>

		<a
			href="mailto:elvoosano7@gmail.com"
			class="flex gap-2 items-center border border-[#242424] hover:scale-90 transition-all relative z-30 bg-[#1A1A1A] w-max text-sm text-grey font-outfit py-4 px-8"
			>Get in touch
			<Icon name={'mdi-light:email'} />
		</a>
	</div>
</section>
