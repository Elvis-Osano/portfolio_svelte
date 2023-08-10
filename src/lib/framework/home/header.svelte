<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('#my-title', {
			x: 80,
			opacity: 0,
			duration: 1.4,
			ease: 'power3.inOut'
		});
		gsap.to('.mask', { x: '-100%', duration: 1.4, ease: 'power3.inOut', delay: 0.2 });
		gsap.from('.slide', { width: '60%', duration: 1.4, ease: 'power3.inOut' });
		wobbleimg();
	});
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
</script>

<!-- //Loop Scrolling -->

<header
	class="lg:min-h-screen h-screen flex flex-col w-full header justify-center mb-14 pr-10 relative"
>
	<div class="flex items-center justify-between w-full h-full">
		<div
			class="w-full h-[90%] sm:w-3/5 flex flex-col gap-6 items-center justify-center relative"
		>
			<div class="flex flex-col gap-4" id="my-title">
				<div class="w-max px-3 flex flex-col border-l-2 gap-2">
					<div class="h-12 w-auto overflow-hidden">
						<h3
							class="text-5xl font-bold head tracking-wider overflow-hidden"
							id="my-text"
						>
							Elvis Osano
						</h3>
					</div>

					<h4 class=" font-outfit text-grey text-sm">Developer • Techie • Consultant</h4>
				</div>

				<button
					class="rounded-full w-max border border-brown px-3 ml-3 text-sm py-1 text-whitney cursor-pointer"
					>Contact</button
				>
			</div>
			<button
				class="flex gap-2 items-center cursor-pointer absolute bottom-4 lg:w-3/6 w-11/12"
			>
				<span class="h-0.5 w-12 rounded-full bg-[#e5e7eb] slide" />
				<span class="font-outfit text-grey text-sm">View Projects</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="15"
					viewBox="0 0 14 15"
					fill="none"
					><path
						d="M11.958 13.8333H2.04134"
						stroke="#fff"
						stroke-width="1.2"
						stroke-miterlimit="10"
						stroke-linecap="square"
					/><path
						d="M10.5 2.5L2.91634 10.2084"
						stroke="#fff"
						stroke-width="1.2"
						stroke-miterlimit="10"
						stroke-linecap="square"
					/><path
						d="M11.083 8.03258V2.04175H5.09217"
						stroke="#fff"
						stroke-width="1.2"
						stroke-miterlimit="10"
						stroke-linecap="square"
					/></svg
				>
			</button>
		</div>

		<div class="hidden sm:block w-2/5 h-full lg:flex items-center">
			<div class="relative overflow-hidden p-3">
				<img src="images/me4.png" alt="me" srcset="" class="w-72" id="me" />
				<div class="absolute inset-0 bg-dark mask" />
			</div>
		</div>
	</div>
</header>
