<script>
	import { Route } from 'svelte-routing';
	import Layout from './UI/Layout.svelte';
	import Beers from './routes/Beers.svelte';
	import BeerDetails from './routes/BeerDetails.svelte';
	import Description from './routes/Description.svelte';
	import SecretPage from './routes/SecretPage.svelte';

	import TaskList from './routes/TaskList.svelte';
</script>

<style>
</style>

<Layout>
	<Beers />

	<Route path="beers/:id" let:params>
		<BeerDetails id={params.id} />
	</Route>

	<TaskList />

	<Route path="secret-page">
		<SecretPage />
	</Route>

	<Description />
</Layout>
