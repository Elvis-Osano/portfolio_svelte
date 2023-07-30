import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),compilerOptions:{
		
	},
	

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias:{
			$components:"src/lib/components",
			$helpers:"src/helpers",
			$framework:"src/lib/framework",
			$utility:"src/utility",
			$common:"src/lib/common",
		},
		files:{
			appTemplate:"src/app/app.html"
		}
	}
};

export default config;
