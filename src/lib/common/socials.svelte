<span class="flex items-center gap-2 socials">
	{#each [{ name: 'linkedin', link: 'https://www.linkedin.com/in/elvo-osano-16031b1b6/' }, { name: 'twitter', link: 'https://twitter.com/elvisosano' }, { name: 'instagram', link: 'https://www.instagram.com/elvis.osano/' }] as item, index}
		<a href={item.link} class="font-outfit text-xs capitalize text-grey">{item.name}</a>
		<span class="text-grey font-extralight {index > 1 ? 'hidden' : 'inline-block'}">/</span>
	{/each}
</span>
