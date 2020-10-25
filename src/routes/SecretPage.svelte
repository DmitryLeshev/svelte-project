<script>
	import { appStore } from '../store';

	let authorization;

	appStore.subscribe((store) => {
		authorization = store.authorization;
	});
</script>

<style>
	img {
		width: 100px;
		margin: 0 auto;
	}
	.heart {
		animation: heartbeat 1s infinite;
		background-color: #ff2b58;
		display: inline-block;
		height: 50px;
		margin: 0 10px;
		position: relative;
		top: 0;
		transform: rotate(-45deg);
		position: absolute;
		left: 45%;
		top: 45%;
		width: 50px;
	}

	.heart:before,
	.heart:after {
		content: '';
		background-color: #ff2b58;
		border-radius: 50%;
		height: 50px;
		position: absolute;
		width: 50px;
	}

	.heart:before {
		top: -25px;
		left: 0;
	}

	.heart:after {
		left: 25px;
		top: 0;
	}

	@keyframes heartbeat {
		0% {
			transform: scale(1) rotate(-45deg);
		}
		20% {
			transform: scale(1.25) rotate(-45deg);
		}
		40% {
			transform: scale(1.5) rotate(-45deg);
		}
	}
</style>

{#if !authorization}
	<h1>SecretPage</h1>
	<p>Войдите в систему)</p>
{:else}
	<div class="row">
		<p>Вы в системе!</p>
	</div>
{/if}
