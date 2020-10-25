<script>
	import AuthLink from './AuthLink.svelte';
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<style>
	.Header {
		margin-top: 1rem;
	}

	hr {
		border-top: 1px solid #fff;
	}
</style>

<header class="Header">
	<div class="container">
		<div class="row align-items-center">
			<Logo />
			<Navigation />
			<AuthLink />
		</div>
	</div>
	<hr />
</header>
