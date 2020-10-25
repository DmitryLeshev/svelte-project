import { writable } from 'svelte/store';

export const appStore = writable({
	beers: [],
	beer: [],
	loading: false,
	currentPage: 1,
	postsPerPage: 10,
	tasks: [
		{
			id: 1,
			completed: true,
			title: 'Список с пивом',
		},
		{
			id: 2,
			completed: true,
			title: 'Поиск по списку',
		},
		{
			id: 3,
			completed: true,
			title: 'Пагинация',
		},
		{
			id: 4,
			completed: true,
			title: 'При нажатии на элемент вывести дополнительную информацию',
		},
		{
			id: 5,
			completed: true,
			title: 'Вывести картинку',
		},
	],
	authorization: false,
});
