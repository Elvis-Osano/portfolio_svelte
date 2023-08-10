<script lang="ts">
	import { Banner, CaseOne, CaseThree, CaseTwo, Header, Lab, Wedo } from '$home';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import Scrollbar from 'smooth-scrollbar';
	let bodyScrollBar: Scrollbar;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		smoothScroll();
		parallax();
		initScrollTO();
	});

	function parallax() {
		gsap.utils.toArray<HTMLDivElement>('.parallx').forEach((section) => {
			const image = section.querySelector('img');
			gsap.to(image, {
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					scrub: 1
				},
				yPercent: 20,
				ease: 'none'
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
	function initScrollTO() {
		gsap.utils.toArray<HTMLLinkElement>('.main-nav a').forEach((link) => {
			const target = link.getAttribute('href') as string;
			link.addEventListener('click', (e) => {
				e.preventDefault();
				bodyScrollBar.scrollIntoView(document.querySelector(target) as HTMLElement, {
					offsetTop: 60
				});
			});
		});
	}
</script>

<svelte:head>
	<title>Elvis</title>
</svelte:head>

<Header />
<!-- <Lab /> -->
<!-- <Banner /> -->
<Wedo />
<div id="projects" class="overflow-auto">
	<CaseOne />
	<CaseThree />
	<CaseTwo />
	<CaseOne />
	<CaseThree />
	<CaseTwo />
</div>
