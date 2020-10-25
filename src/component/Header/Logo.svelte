<script>
	import { link } from 'svelte-routing';
</script>

<style>
	.Logo {
		width: 120px;
		height: 70px;
	}
	.Logo_second {
		transform: translateX(8px);
	}
	.Logo_first,
	.Logo_second {
		transition: all 0.3s ease;
		fill: #ffffff;
	}
	.Logo:hover .Logo_first,
	.Logo:hover .Logo_second {
		fill: #ff5400;
	}
</style>

<div class="col-2">
	<a class="Logo" href="/" use:link>
		<svg
			viewBox="0 30 185 55"
			class="Logo_first"
			preserveAspectRatio="xMinYMin meet">
			<path
				d="M49.6,38.9h8.8L47.2,83.2h-8.7l-8.3-28.5L22,83.2h-8.7L1.5,38.9h10.3l6.7,28l7.5-28h9.2l7.7,28L49.6,38.9z" />
			<path
				d="M94.6,83.2h-9.1V65.4H70.9v17.8h-9.1V38.9h9.1v16.9h14.5V38.9h9.1V83.2z" />
			<path d="M112.8,83.2h-9.1V38.9h9.1V83.2z" />
			<path d="M129.3,48.4h-12v-9.5h33v9.5h-12v34.8h-9.1V48.4z" />
			<path
				d="M178.5,83.2h-24.2V38.9h23.6v9.5h-14.5v7.8h12.8v9.5h-12.8v8h15.1V83.2z" />
		</svg>

		<svg
			viewBox="0 87 185 55"
			class="Logo_second"
			preserveAspectRatio="xMinYMin meet">
			<path
				d="M39.3,140.3h-9.1v-17.8H15.7v17.8H6.6V96.1h9.1V113h14.5V96.1h9.1V140.3z" />
			<path
				d="M51.9,140.3h-9.2l16.6-44.3h8.1L84,140.3h-9.7L71,131H55.2L51.9,140.3z M67.6,121.5L63.1,109l-4.5,12.5H67.6z" />
			<path
				d="M113.6,128.4l3.5,7.6c-1.2,1.5-3,2.8-5.4,3.7c-2.4,0.9-4.9,1.4-7.6,1.4c-6.2,0-11.2-2.1-15.1-6.3
        c-3.9-4.3-5.8-9.8-5.8-16.6c0-6.7,1.8-12.1,5.5-16.4c3.6-4.3,8.8-6.5,15.4-6.5c2.5,0,4.8,0.4,7,1.3c2.2,0.8,3.9,2,5.2,3.4l-4,7.6
        c-2.7-1.8-5.4-2.7-8.1-2.7c-3.2,0-5.9,1.2-8,3.5c-2.1,2.3-3.1,5.6-3.1,9.9c0,3.9,1.1,7.1,3.4,9.7c2.2,2.5,5.1,3.7,8.7,3.7
        C108.2,131.6,111,130.5,113.6,128.4z" />
			<path
				d="M130.8,140.3h-9.1V96.1h9.1v19.3l13-19.3h10.9l-15,20.4l16.2,23.8h-11.6l-13.6-21.1V140.3z" />
		</svg>
	</a>
</div>
