<script>
	import { onDestroy, onMount } from 'svelte';
	import Route from 'svelte-routing/src/Route.svelte';
	import { appStore } from '../store';

	const ENTER_KEY = 13;
	const ESCAPE_KEY = 27;
	let beforeEditCache = '';
	let currentFilter = 'all';

	let newTask = '';
	let tasks = [];
	let tempId = 6;

	let authorization;

	// Добавляем из хранилища задания
	const unsubscribe = appStore.subscribe((store) => {
		tasks = store.tasks;
		authorization = store.authorization;
	});
	// Удаляем подвиску для сохранения памяти
	onDestroy(unsubscribe);

	// Добавление задания
	function addTask() {
		// Проверка на пустые строки
		if (newTask.trim() !== '') {
			tasks.push({
				id: tempId,
				completed: false,
				title: newTask,
				editing: false,
			});
			tasks = tasks;
			tempId = tempId + 1;
			newTask = '';
		}
	}
	// Обработчик на инпут
	function onHandlerTodoAddInput(event) {
		if (authorization) {
			if (event.which === ENTER_KEY) {
				addTask();
			}
		}
		newTask = '';
	}
	// Обработчик на баттон
	function onHandlerTodoAddButton() {
		addTask();
	}

	// Удаление задания
	function deleteTask(id) {
		tasks = tasks.filter((task) => task.id !== id);
	}

	// Выбрать все задание и поменять им свойства completed
	function checkAllTasks(event) {
		tasks.forEach((task) => (task.completed = event.target.checked));
		tasks = tasks;
	}

	// Вернуть в масив только не выполненные задачи
	function clearCompleted() {
		tasks = tasks.filter((task) => !task.completed);
	}

	// Переопределить currentFilter
	function updateFilter(filter) {
		currentFilter = filter;
	}

	$: tasksRemaining = tasks.filter((task) => !task.completed).length;

	// Рендерим те задания которые подходят по условию
	$: filteredTasks =
		// Все
		currentFilter === 'all'
			? tasks
			: // Новое условие
			currentFilter === 'completed'
			? // Выполненые задания
			  tasks.filter((todo) => todo.completed)
			: // Не выполненые задания
			  tasks.filter((todo) => !todo.completed);
</script>

<style>
	.Container {
		max-width: 600px;
		margin: 0 auto;
	}
	.Todo-Title {
		text-align: center;
		margin-bottom: 2rem;
	}
	.Todo-AddTask {
		display: flex;
		width: 100%;
		margin-bottom: 1rem;
	}

	.Todo-List {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.Todo-Item {
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		animation-duration: 0.3s;
	}
	.Todo-Remove-Item {
		cursor: pointer;
		margin-left: 14px;
	}

	.Todo-Remove-Item:hover {
		color: black;
	}
	.Todo-Item-Left {
		display: flex;
		align-items: center;
	}
	.Todo-Item-Label {
		position: relative;
		margin-left: 2rem;
		padding: 10px;
		padding-left: 0;
		cursor: pointer;
	}

	.Todo-Item-Label input {
		position: absolute;
		left: -2rem;
		top: 50%;
		transform: translateY(-50%);
	}

	.completed {
		text-decoration: line-through;
		color: grey;
	}
	.Extra-Container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		border-top: 1px solid lightgrey;
		padding-top: 14px;
		margin-bottom: 14px;
	}

	.Extra-Container input {
		margin-right: 8px;
	}

	button {
		font-size: 14px;
		appearance: none;
	}

	button:focus {
		outline: none;
	}
	.active {
		background: #0d6efd;
	}
</style>

<Route path="task-list">
	<div class="Container">
		<h1 class="Todo-Title">Задачи в тестовом задании</h1>
		{#if !authorization}
			<p class="mb-4 mt-4">
				Что бы удалять или выделять надо войти в систему!)
			</p>
		{/if}

		<div class="Todo-AddTask">
			<input
				type="text"
				class="Todo-Input form-control mr-2"
				placeholder="Добавить задание"
				bind:value={newTask}
				on:keydown={onHandlerTodoAddInput} />

			<button
				class:disabled={!authorization}
				class="btn btn-outline-success"
				on:click={onHandlerTodoAddButton}>Добавить</button>
		</div>

		<ul class="Todo-List">
			{#if filteredTasks.length === 0}
				<li class="Todo-Item">Пусто</li>
			{:else}
				{#each filteredTasks as task}
					<li class="Todo-Item">
						<div class="Todo-Item-Left">
							<!-- При клике менять значение у completed -->

							<!-- Добавить класс completed если у задание completed в значении true -->
							<label
								for={tasks.id}
								class="Todo-Item-Label"
								class:completed={task.completed}>
								<input
									disabled={!authorization}
									id={tasks.id}
									type="checkbox"
									bind:checked={task.completed} />
								{task.title}
							</label>
						</div>

						<button
							class="Todo-Remove-Item btn btn-outline-danger"
							on:click={() => deleteTask(task.id)}
							class:disabled={!authorization}>
							&times;
						</button>
					</li>
				{/each}
			{/if}
		</ul>

		<div class="Extra-Container">
			<div>
				<label><input
						disabled={!authorization}
						type="checkbox"
						on:change={checkAllTasks} />Выбрать все</label>
			</div>
			<!-- показывает длину массива tasksRemaining у которого таски со значением completed false -->

			{#if tasksRemaining >= 5 || tasksRemaining == 0}
				<div>{tasksRemaining} заданий осталось</div>
			{:else if tasksRemaining == 1}
				<div>{tasksRemaining} задание осталось</div>
			{:else if tasksRemaining > 1 && tasksRemaining < 5}
				<div>{tasksRemaining} задания осталось</div>
			{/if}
		</div>

		<div class="Extra-Container">
			<div>
				<!-- Фильтр передаем в функцию updateFilter параметр и меняем значение у currentFilter на этот параметр  -->
				<!-- Добавляем класс active той кнопке которая подходит по условию -->
				<button
					class="btn btn-outline-primary "
					on:click={() => updateFilter('all')}
					class:active={currentFilter === 'all'}>Все</button>
				<button
					class="btn btn-outline-primary"
					on:click={() => updateFilter('active')}
					class:active={currentFilter === 'active'}>Активные</button>
				<button
					class="btn btn-outline-primary"
					on:click={() => updateFilter('completed')}
					class:active={currentFilter === 'completed'}>Выполненые</button>
			</div>

			<div>
				<button
					class:disabled={!authorization}
					class="btn btn-outline-primary"
					on:click={clearCompleted}>Удалить выполненые задания</button>
			</div>
		</div>
	</div>
</Route>
