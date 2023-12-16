<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	let visible = true;
	export let model: StatementModel;
	const nextModel = model.getNextModelName(model.modelName);
	onMount(() => {
		setTimeout(() => (visible = false), 1350);
	});
</script>

<header>
	<div class="alignright">
		<a href="/">
			<h2>
				<svg class="fa-bars">
					<use xlink:href="#fa-bars" />
				</svg>
			</h2>
		</a>
	</div>
</header>
<svelte:head>
	<title>{model.title}</title>
</svelte:head>
{#if visible}
	<div transition:slide class="bg-secondary" style="background-image: url('{model.image}')" />
{/if}
<section>
	<div class="wrap">
		<div class="display-50">
			<div class="bg-avatar" style="background-image: url('{model.image}')" />
			<p class="text">
				&ldquo;{model.text}&rdquo;
				<br /><b><span style="font-style: italic">{model.title}</span></b>
				<br /><span style="font-style: italic">{model.subtitle}</span>
			</p>

			<a href={model.url} target="_blank" title={model.title}>
				<h6>
					More
					<svg class="fa-external-link">
						<use xlink:href="#fa-external-link" />
					</svg>
				</h6>
			</a>
			{#if nextModel}
				<a href={nextModel} title={model.title}>
					<h6>
						Next
						<svg class="fa-arrow-circle-right">
							<use xlink:href="#fa-arrow-circle-right" />
						</svg>
					</h6>
				</a>
			{/if}
			{#if model.list === 'uk'}
				<a href="/uk" title={model.title}>
					<h6>
						<svg class="a-flag">
							<use xlink:href="#fa-flag" />
						</svg>
						UK List
					</h6>
				</a>
			{/if}
			<a href="/world" title={model.title}>
				<h6>
					<svg class="fa-list-ul">
						<use xlink:href="#fa-list-ul" />
					</svg>
					List
				</h6>
			</a>
		</div>
	</div>
	<!-- .end .wrap -->
</section>
