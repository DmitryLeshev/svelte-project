<script>
	import { onDestroy } from 'svelte';

	import { link, navigate } from 'svelte-routing';
	import { appStore } from '../../store';

	let authorization;

	const unsubscribe = appStore.subscribe((store) => {
		authorization = store.authorization;
	});

	onDestroy(unsubscribe);

	function onLogin(event) {
		event.preventDefault();
		appStore.update((prevStore) => {
			return {
				...prevStore,
				authorization: !prevStore.authorization,
			};
		});
		authorization = authorization;
		if (!authorization) {
			navigate(`/`, { replace: true });
		}
	}
</script>

<style>
	a {
		float: right;
		padding: 0.5rem 2rem;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 120px;
		text-decoration: none;
	}

	a:hover {
		color: #fff;
		border-color: #ff5400;
		text-shadow: 0 0 5px #ff5400;
	}
</style>

<div class="col-2">
	{#if authorization}
		<a class="btn" on:click={onLogin} use:link href="/"> Выйти </a>
	{:else}<a class="btn" on:click={onLogin} use:link href="/"> Войти </a>{/if}
</div>
