<script>
	import { onDestroy, onMount } from 'svelte';
	import { appStore } from '../store';
	import PunkApiService from '../service/PunkApiService';
	import Spinner from '../UI/Spinner.svelte';

	const punkApiService = new PunkApiService();

	export let id;

	let beerDetails;
	let loading;

	const update = () => {
		appStore.update((prevState) => {
			return {
				...prevState,
				loading: true,
			};
		});
	};

	const putBeerInStore = (beer) => {
		appStore.update((prevState) => {
			return {
				...prevState,
				beer,
				loading: false,
			};
		});
	};

	onMount(() => {
		update();
		const timeout = setTimeout(async () => {
			const beer = await punkApiService.getBeer(id);
			putBeerInStore(beer[0]);
			clearTimeout(timeout);
		}, 500);
	});

	const unsubscribe = appStore.subscribe((store) => {
		loading = store.loading;
		beerDetails = store.beer;
	});

	onDestroy(unsubscribe);
</script>

<style>
	.Card {
		position: relative;
		z-index: 1;
		max-width: 540px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid white;
		border-radius: 4px;
		background-color: #555;
	}
	.Card-Image::after {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		bottom: -1px;
		right: -1px;
		background: #fff;
		z-index: -2;
		transform: skew(2deg, 2deg);
		filter: blur(40px);
	}
	.Card-Body {
		display: flex;
		justify-content: space-between;
	}
	.Card-Details {
		width: 70%;
	}
	.Card-Image {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 30%;
	}
	.Card-Image img {
		height: 200px;
	}

	.Card-Details ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.Card-Details li {
		margin: 0;
		margin-bottom: 1rem;
	}

	.Card-Details span {
		font-weight: bold;
	}
	p {
		font-style: 1rem;
	}
	p span {
		font-weight: bold;
	}
</style>

<div class="row mb-4">
	<div class="col">
		<h1>Beer Details</h1>
	</div>
</div>

{#if loading}
	<Spinner />
{:else}
	<div class="row mb-4">
		<div class="col">
			<div class="Card">
				<div class="Card-Body">
					<div class="Card-Image">
						<img src={beerDetails.imageUrl} alt={beerDetails.name} />
					</div>

					<div class="Card-Details">
						<h2 class="">{beerDetails.name}</h2>

						<ul class="">
							<li class=""><span>Tagline: </span> {beerDetails.tagline}</li>
							<li class=""><span>ABV: </span> {beerDetails.abv}</li>
							<li class=""><span>IBU: </span> {beerDetails.ibu}</li>
							<li class=""><span>EBC: </span> {beerDetails.ebc}</li>
							<li class="">
								<span>Food Pairing:</span>
								{beerDetails.foodPairing}
							</li>
						</ul>
					</div>
				</div>

				<hr />

				<p class="">
					<span>Description :</span><br />
					{beerDetails.description}
				</p>
			</div>
		</div>
	</div>
{/if}

<!-- 
{#if loading}
<Spinner />
{:else}
<div class="row">
  <div class="col">
    {#each beer as beerDetails}
      <div class="Card">
        <div class="Card-Body">
          <div class="Card-Image">
            <img src={beerDetails.imageUrl} alt={beerDetails.name} />
          </div>

          <div class="Card-Details">
            <h2 class="">{beerDetails.name}</h2>

            <ul>
              <li>id: {beerDetails.id}</li>
              <li>abv :{beerDetails.abv}</li>
              <li>ibu :{beerDetails.ibu}</li>
              <li>targetFg :{beerDetails.targetFg}</li>
              <li>targetOg :{beerDetails.targetOg}</li>
              <li>ebc :{beerDetails.ebc}</li>
              <li>srm :{beerDetails.srm}</li>
              <li>ph :{beerDetails.ph}</li>
              <li>attenuationLevel :{beerDetails.attenuationLevel}</li>
              <li>
                volume :
                <ul>
                  <li>value: {beerDetails.volume.value}</li>
                  <li>unit: {beerDetails.volume.unit}</li>
                </ul>
              </li>
              <li>
                boilVolume :
                <ul>
                  <li>value: {beerDetails.boilVolume.value}</li>
                  <li>unit: {beerDetails.boilVolume.unit}</li>
                </ul>
              </li>
              <li>
                method :
                <ul>
                  <li>
                    mash_temp:
                    <ul>
                      <li>
                        temp:
                        <ul>
                          <li>
                            value:
                            {beerDetails.method.mash_temp[0].temp.value}
                          </li>
                          <li>
                            unit:
                            {beerDetails.method.mash_temp[0].temp.unit}
                          </li>
                        </ul>
                      </li>
                      <li>
                        duration:
                        {beerDetails.method.mash_temp[0].duration}
                      </li>
                    </ul>
                  </li>
                  <li>twist: {beerDetails.method.twist}</li>
                </ul>
              </li>
              <li>
                ingredients :
                <ul>
                  <li>
                    malt:
                    <ul>
                      {#each beerDetails.ingredients.malt as malt}
                        <li>name: {malt.name}</li>
                      {/each}
                    </ul>
                  </li>
                  <li>
                    malt:
                    <ul>
                      {#each beerDetails.ingredients.hops as hops}
                        <li>name: {hops.name}</li>
                        <li>add: {hops.add}</li>
                        <li>attribute: {hops.attribute}</li>
                      {/each}
                    </ul>
                  </li>
                </ul>
              </li>
              <li>foodPairing :{beerDetails.foodPairing}</li>
              <li>brewersTips :{beerDetails.brewersTips}</li>
            </ul>
          </div>
        </div>

        <hr />

        <p class="">Description : {beerDetails.description}</p>
      </div>
    {/each}
  </div>
</div>
{/if} -->
