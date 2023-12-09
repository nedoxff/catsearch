<script lang="ts">
	import Searchbar from "$lib/ui/Searchbar.svelte";
</script>

<div class="w-full h-[100dvh] flex flex-col justify-center items-center p-3">
	<h1 class="text-3xl font-bold text-white">CatSearch</h1>
	<p class="text-white leading-5 text-center">
		Search for your favorite music featuring the funny cat from twitter.
	</p>
	<Searchbar/>
	<button
		type="button"
        on:click={() => window.location.href += `/search?query=`}
		class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		>View all</button
	>
    <video muted autoplay loop class="w-20 rounded-xl mt-2">
        <source src="$lib/assets/original.mp4">
    </video>
</div>
