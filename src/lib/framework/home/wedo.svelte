<script lang="ts">
	interface Step {
		title: string;
		desc: string;
		icon: string;
	}

	const steps: Step[] = [
		{
			title: 'UX & UI',
			desc: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
			icon: 'ui'
		},
		{
			title: 'Web & Mobile App',
			desc: 'Transforming ideas into exceptional web and mobile app experiences.',
			icon: 'web'
		},
		{
			title: 'Design & Creative',
			desc: 'Crafting visually stunning designs that connect with your audience.',
			icon: 'creative'
		},
		{
			title: 'Development',
			desc: 'Bringing your vision to life with the latest technology and design trends.',
			icon: 'dev'
		}
	];
</script>

<section class="bg-transparent py-14 lg:h-[80vh] h-screen flex flex-col gap-20" id="service">
	<h1 class="head text-3xl font-outfit text-center lg:w-3/6 w-11/12 mx-auto">
		Collaborate with brands and agencies to create impactful results.
	</h1>
	<div class="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:w-5/6 w-11/12 mx-auto">
		{#each steps as step, index}
			<div class="flex flex-col gap-2">
				<img src="/images/{step.icon}.svg" alt="" srcset="" class="w-10 h-full grayscale" />

				<small>{index + 1}</small>
				<h2 class="font-bold font-outfit text-xl head">{step.title}</h2>
				<p class="text-grey font-light text-sm font-outfit">{step.desc}</p>
			</div>
		{/each}
	</div>
</section>
