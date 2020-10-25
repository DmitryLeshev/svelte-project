<script>
	import { Router } from 'svelte-routing';
	import Header from '../component/Header/Header.svelte';
	import Footer from '../component/Footer/Footer.svelte';

	export let url = '';
</script>

<style>
	.Layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #333;
		background-image: url('./img/1.jpg');
	}

	.Layout main {
		position: relative;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.user-container {
		max-width: 600px;
	}
</style>

<Router {url}>
	<div class="Layout">
		<Header />
		<main>
			<div class="container user-container mt-4">
				<slot />
			</div>
		</main>
		<Footer />
	</div>
</Router>
