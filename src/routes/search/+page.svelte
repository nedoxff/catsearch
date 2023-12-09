<script lang="ts">
	import Spinner from '$lib/ui/Spinner.svelte';
	import { onMount } from 'svelte';
	import { videos } from '$lib/data';
	import CatVideoPreview from '$lib/ui/CatVideoPreview.svelte';

	let ready: boolean = false;
	let query: string;

	onMount(() => {
		const search = new URLSearchParams(window.location.search);
		if (!search.has('query') || search.get('query') == null) window.location.href = '../';
		query = search.get('query')!;
		ready = true;
	});

	const search = () =>
		new Promise<string[]>((resolve) => {
			if (query === '') {
				resolve(Array.from(videos.keys()));
			}

			const results = [];
			const formattedQuery = query
				.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
				.replace(/\s{2,}/g, ' ')
				.split(' ')
				.map(v => v.toLocaleLowerCase());
			for (const [id, video] of videos) {
				if (video.tags.filter((v) => formattedQuery.includes(v.toLocaleLowerCase())).length !== 0) {
					results.push(id);
				}
			}
			resolve(results);
		});
</script>

{#if ready}
	<div class="w-full h-[100dvh] p-3">
		{#if query !== ''}
			<h1 class="text-2xl text-white">Search results for "{query}"</h1>
		{/if}
		{#await search()}
			<Spinner />
		{:then ids}
			<div class="flex flex-row flex-wrap gap-2 mt-2">
				{#each ids as id}
					<CatVideoPreview {id} />
				{/each}
			</div>
		{/await}
	</div>
{:else}
	<div></div>
{/if}
