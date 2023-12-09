<script lang="ts">
	import { videos } from '$lib/data';
	export let id: string;
</script>

<div class="bg-stone-950 w-full lg:w-1/6 p-2 rounded-xl flex flex-col items-center">
	<p class="text-white text-center">{videos.get(id)?.name}</p>
    <p class="text-white text-center">By {videos.get(id)?.author}</p>
	<button
		type="button"
        on:click={() => window.location.href = `../view?id=${id}`}
		class="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		>View more</button
	>
</div>
