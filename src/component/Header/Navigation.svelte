<script>
	import { link } from 'svelte-routing';
</script>

<style>
	a {
		color: #fff;
	}

	li {
		position: relative;
		box-sizing: border-box;
	}

	li::after {
		position: absolute;
		bottom: 0;
		z-index: 5;
		content: '';
		display: block;
		opacity: 0;
		width: 100%;
		border-bottom: 2px solid #ff5400;
		transition: all 0.3s ease;
	}

	li:hover a {
		text-shadow: 0 0 5px #ff5400;
	}

	li:hover::after {
		opacity: 1;
	}
</style>

<div class="col-8">
	<ul class="nav justify-content-around">
		<li class="nav-item">
			<a
				class="nav-link active"
				aria-current="page"
				use:link
				href="/beers">Список пива</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" use:link href="/task-list">Список задач</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" use:link href="/secret-page">Secret page</a>
		</li>
	</ul>
</div>
