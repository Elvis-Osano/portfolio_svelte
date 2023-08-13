<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './logo.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import Scrollbar from 'smooth-scrollbar';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	let bodyScrollBar: Scrollbar;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		loader();
		smoothScroll();
	});
	function loader() {
		const navLinks = gsap.utils.toArray<HTMLLinkElement>('.main-nav a');
		const tl1 = gsap.timeline({ defaults: { duration: 1.4, ease: 'power3.inOut' } });
		tl1.from(
			'#my-title',
			{
				x: 80,
				opacity: 0
			},
			0
		)
			.to('.mask', { x: '-100%', delay: 0.2 }, 0)
			.from('.slide', { width: '60%', opacity: 0 }, 0)
			.from(
				['#navlogo', '.main-nav li'],
				{
					x: 40,
					stagger: 0.1,
					opacity: 0,
					duration: 1.4
				},
				0
			);

		const master = gsap.timeline();
		master.add(tl1);
		navLinks.forEach((h) => {
			h.addEventListener('mouseleave', () => {
				h.classList.add('animate-out');
				setTimeout(() => {
					h.classList.remove('animate-out');
				}, 300);
			});
		});
	}

	function smoothScroll() {
		const main = document.querySelector('#viewport') as HTMLElement;

		bodyScrollBar = Scrollbar.init(main, {
			damping: 0.07,
			thumbMinSize: 10,
			alwaysShowTracks: false
		});
		bodyScrollBar.track.xAxis.element.remove();
		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value as number; // setter
				}

				return bodyScrollBar.scrollTop; // getter
			}
		});
		bodyScrollBar.addListener(ScrollTrigger.update);
	}
</script>

<nav class=" top-8 w-full fixed z-30">
	<div class="flex w-5/6 mx-auto justify-between items-center">
		<a href="/" class="h-8 w-8" id="navlogo">
			<Logo />
		</a>

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
