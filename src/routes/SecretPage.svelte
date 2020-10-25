<script>
	import { appStore } from '../store';

	let authorization;

	appStore.subscribe((store) => {
		authorization = store.authorization;
	});
</script>

<style>
</style>

{#if !authorization}
	<h1>SecretPage</h1>
	<p>Войдите в систему)</p>
{:else}
	<div class="row">
		<p>Вы в системе!</p>
	</div>
{/if}
