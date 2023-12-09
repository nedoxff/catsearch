<script lang="ts">
	import { onMount } from 'svelte';
	import { videos, type CatVideo } from '$lib/data';

	let ready: boolean = false;
	let video: CatVideo;
	let videoLink: string;
	let id: string;

	onMount(() => {
		const search = new URLSearchParams(window.location.search);
		if (!search.has('id') || search.get('id') == null) window.location.href = '../';
		id = search.get('id')!;
		if (!videos.has(id)) window.location.href = '../';
		video = videos.get(id)!;
		console.log(import.meta.url);
		videoLink = new URL(`../../lib/assets/videos/${id}.mp4`, import.meta.url).href;
		ready = true;
	});
</script>

{#if ready}
	<div class="w-full h-[100dvh] p-3 flex flex-col">
		<video loop controls class="rounded-xl w-full lg:w-1/6">
			<source src={videoLink} />
		</video>
		<div class="flex flex-col mt-2">
			<h1 class="text-white text-3xl font-bold">{video.name}</h1>
			<p class="text-white text-xl">
				By <a href={video.authorLink}
					><span style="text-decoration-line: underline;">{video.author}</span></a
				> (Twitter)
			</p>
			<a href={video.link}
				><p class="text-white text-xl" style="text-decoration-line: underline;">
					Original tweet link
				</p></a
			>
			{#if video.warnings !== ''}
				<p class="text-white text-xl">Warnings: <b>{video.warnings}</b></p>
			{/if}
			<div class="flex flex-row flex-wrap gap-2 items-center mt-1">
				<p class="text-white text-xl">Tags:</p>
				{#each video.tags as tag}
					<div style="border-radius: 9999px;" class="p-2 text-white bg-stone-950"><p>{tag}</p></div>
				{/each}
			</div>
			<button
				type="button"
				on:click={() => (window.location.href = '../')}
				class="w-full lg:w-1/6 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>Go to the main page</button
			>
		</div>
	</div>
{/if}
