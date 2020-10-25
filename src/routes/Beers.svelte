<script>
	import { onDestroy, onMount } from 'svelte';
	import { appStore } from '../store';
	import PunkApiService from '../service/PunkApiService';
	import { navigate } from 'svelte-routing';

	import Table from '../component/Table/Table.svelte';
	import Pagination from '../component/Table/Pagination.svelte';
	import Spinner from '../UI/Spinner.svelte';
	import Route from 'svelte-routing/src/Route.svelte';

	let beersList;
	let loading;

	let currentPage;
	let postsPerPage;
	let indexOfLastBeers;
	let indexOfFirstBeers;

	let currentBeers;

	let searchTerm = '';

	$: filteredList = beersList.filter(
		(item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	$: if (searchTerm) {
		currentPage = 1;
	}

	$: {
		indexOfLastBeers = currentPage * postsPerPage;
		indexOfFirstBeers = indexOfLastBeers - postsPerPage;
	}

	$: if (filteredList) {
		currentBeers = filteredList.slice(indexOfFirstBeers, indexOfLastBeers);
	}

	const punkApiService = new PunkApiService();

	const onBeerSelected = (id) => {
		navigate(`/beers/${id}`, { replace: true });
	};

	const putBeersInStore = (beers) => {
		appStore.update((prevState) => {
			return {
				...prevState,
				beers,
				loading: false,
			};
		});
	};

	const update = () => {
		appStore.update((prevState) => {
			return {
				...prevState,
				loading: true,
			};
		});
	};

	onMount(async () => {
		update();

		const beers = await punkApiService.getAllBeers();

		putBeersInStore(beers);
	});

	const unsubscribe = appStore.subscribe((store) => {
		loading = store.loading;
		beersList = store.beers;
		currentPage = store.currentPage;
		postsPerPage = store.postsPerPage;
	});

	onDestroy(unsubscribe);

	const paginate = (pageNumber) => {
		appStore.update((prevState) => {
			return {
				...prevState,
				currentPage: pageNumber,
			};
		});

		appStore.subscribe((store) => {
			currentPage = store.currentPage;
		});
	};
</script>

<style>
	h2 {
		margin: 0;
	}
</style>

<Route path="beers">
	{#if loading}
		<Spinner />
	{:else}
		<div class="row mb-4">
			<div class="col">
				<h2>List of Beers</h2>
			</div>
		</div>
		<div class="row mb-4">
			<div class="col">
				<nav class="navbar">
					<input
						bind:value={searchTerm}
						class="form-control mr-2"
						type="search"
						placeholder="Search"
						aria-label="Search" />
				</nav>
			</div>
		</div>
		<div class="row mb-4">
			<Table {currentBeers} {onBeerSelected} />
		</div>
		<div class="row mb-4">
			<div class="col">
				<Pagination
					{paginate}
					{currentPage}
					{postsPerPage}
					totalBeers={filteredList.length} />
			</div>
		</div>
	{/if}
</Route>
