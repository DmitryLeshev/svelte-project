<script>
	import Route from 'svelte-routing/src/Route.svelte';
</script>

<Route path="/">
	<div class="row">
		<div class="col">
			<h1>Описание задания</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<p>
				Задание frontend-разработчика в компанию Вайтхак Написать
				svelte-приложение, которое представляет собой католог пива. Первая
				страница должна представлять собой список с поиском и пагинацией. При
				нажатии на элемент из списка нужно вывести всю информацию о пиве и
				вывести картинку, ссылку на которую можно найти в api ответе. Данные
				брать из
				<a href="https://punkapi.com/documentation/v2">api</a>
				. Можно использовать любые бандлеры, UI-библиотеки, доп. библиотеки.
			</p>
		</div>
	</div>
</Route>
