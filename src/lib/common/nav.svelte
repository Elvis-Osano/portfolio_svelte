<script lang="ts">
	import { links } from '$helpers';
	import { onMount } from 'svelte';
	import Logo from './logo.svelte';
	import { gsap } from 'gsap/dist/gsap';
	onMount(() => {
		const navLinks = gsap.utils.toArray<HTMLLinkElement>('.main-nav a');
		// console.log({ navLinks });
		gsap.from(['#navlogo', '.main-nav li'], {
			x: 40,
			stagger: 0.1,
			opacity: 0,
			duration: 1.4,
			ease: 'power3.inOut'
		});

		navLinks.forEach((h) => {
			h.addEventListener('mouseleave', () => {
				h.classList.add('animate-out');
				setTimeout(() => {
					h.classList.remove('animate-out');
				}, 300);
			});
		});
	});
</script>

<nav class=" top-8 w-full fixed z-30">
	<div class="flex w-5/6 mx-auto justify-between items-center">
		<a href="/" class="h-8 w-8" id="navlogo">
			<Logo />
		</a>
		<ul class="lg:flex hidden flex-row lg:gap-10 gap-4 main-nav">
			{#each links as link}
				<li
					class=" uppercase text-xs text-center tracking-[2px]
						 text-whitney overflow-hidden w-max
					"
				>
					<a href={link.href} class="relative">{link.text}</a>
				</li>
			{/each}
		</ul>
		<span class="flex items-center gap-2">
			{#each ['linkedin', 'twitter', 'instagram'] as item, index}
				<a href="/" class="font-outfit text-xs hover:text-whitney capitalize text-grey"
					>{item}</a
				>
				<span class="text-grey font-extralight {index > 1 ? 'hidden' : 'inline-block'}"
					>/</span
				>
			{/each}
		</span>
	</div>
</nav>
