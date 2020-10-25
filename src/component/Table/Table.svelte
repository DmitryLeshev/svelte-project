<script>
	import TableRow from './TableRow.svelte';

	export let onBeerSelected;
	export let currentBeers;
</script>

<style>
	table {
		color: #fff;
	}
</style>

<div class="col">
	<table class="table caption-top">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col">ABV</th>
				<th scope="col">IBU</th>
				<th scope="col">EBC</th>
			</tr>
		</thead>
		<tbody>
			{#each currentBeers as beer, index (beer.id)}
				<TableRow
					name={beer.name}
					id={beer.id}
					abv={beer.abv}
					ibu={beer.ibu}
					ebc={beer.ebc}
					{onBeerSelected} />
			{/each}
		</tbody>
	</table>
</div>
