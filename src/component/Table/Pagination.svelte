<script>
	export let postsPerPage; //5
	export let totalBeers; //80
	export let currentPage;
	export let paginate;
	let pageNumbers;

	$: {
		pageNumbers = [];
		for (let i = 1; i <= Math.ceil(totalBeers / postsPerPage); i++) {
			pageNumbers.push(i);
		}
	}

	function isCurrent(currentPage, number) {
		return currentPage === number;
	}
</script>

<style>
	.active {
		background-color: #0d6efd;
		border-color: #0d6efd;
		color: #fff;
	}

	button {
		background-color: inherit;
		color: #fff;
	}

	button:hover {
		color: #ff5400;
		background-color: inherit;
		border-color: #fff;
		opacity: 0.8;
	}

	.active {
		color: #ff5400;
		background-color: inherit;
		border-color: #fff;
	}

	.disabled button {
		background-color: inherit;
	}
</style>

<nav aria-label="Page navigation example">
	<ul class="pagination justify-content-center  mt-3">
		<li class:disabled={currentPage === 1} class="page-item">
			<button class="page-link " aria-label="Previous">
				<span
					on:click={paginate(currentPage - 1)}
					aria-hidden="true">&laquo;</span>
			</button>
		</li>
		<!-- active -->
		{#each pageNumbers as number}
			<li class="page-item">
				<button
					class:active={isCurrent(currentPage, number)}
					class="page-link"
					on:click={paginate(number)}>{number}</button>
			</li>
		{/each}

		<li class:disabled={currentPage === pageNumbers.length} class="page-item ">
			<button class="page-link" aria-label="Next">
				<span
					on:click={paginate(currentPage + 1)}
					aria-hidden="true">&raquo;</span>
			</button>
		</li>
	</ul>
</nav>
