<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import Scrollbar from 'smooth-scrollbar';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	let bodyScrollBar: Scrollbar;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		smoothScroll();
		headerLoad();
		wobbleimg();
		hoverLinks();
	});
	//ofCOurse smoothscrolling
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
	//load header components
	function headerLoad() {
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
				['#navlogo', '.socials a'],
				{
					x: 40,
					stagger: 0.1,
					opacity: 0
				},
				0
			);
	}
	//wobble header image
	function wobbleimg() {
		document.querySelector('header')?.addEventListener('mousemove', (e) => {
			const { offsetX, offsetY, target } = e;
			const { clientWidth, clientHeight } = target as HTMLDivElement;
			const xPos = offsetX / clientWidth - 0.5;
			const yPos = offsetY / clientHeight - 0.5;

			const robot = document.getElementById('me');

			gsap.to(robot, {
				duration: 1.2,
				x: xPos * 10,
				y: yPos * 10,
				rotateX: xPos * 10,
				rotateY: yPos * 10
			});
		});
	}
	// hover links
	function hoverLinks() {
		const navLinks = gsap.utils.toArray<HTMLLinkElement>('.socials a');

		navLinks.forEach((h) => {
			h.addEventListener('mouseleave', () => {
				h.classList.add('animate-out');
				setTimeout(() => {
					h.classList.remove('animate-out');
				}, 300);
			});
		});
	}
</script>
