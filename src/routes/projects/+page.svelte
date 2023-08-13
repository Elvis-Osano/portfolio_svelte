<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { Flip } from 'gsap/dist/Flip';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Scrollbar from 'smooth-scrollbar';
	import { CaseOne, CaseThree, CaseTwo } from '$home';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		parallax();
		smoothScroll();
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

		let bodyScrollBar = Scrollbar.init(main, {
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

<svelte:head>
	<title>Projects -Elvi Osano</title>
</svelte:head>
<CaseOne />
<CaseThree />
<CaseTwo />
<CaseOne />
<CaseThree />
<CaseTwo />
<CaseOne />
<CaseThree />
<CaseTwo />
