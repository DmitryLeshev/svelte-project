<script>
	export let name, id, abv, ibu, ebc, onBeerSelected;
</script>

<style>
	tr:hover {
		color: #ff5400;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.left {
		width: 80px;
	}
	.name {
		width: 100%;
	}
</style>

<tr on:click={onBeerSelected(id)}>
	<!-- id -->
	<th scope="row">{id}</th>
	<!-- name -->
	<td class="name">{name}</td>
	<!-- abv -->
	<td class="left">{abv}</td>
	<!-- ibu -->
	<td class="left">{ibu}</td>
	<!-- ebc -->
	<td class="left">{ebc}</td>
</tr>
