<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	import { onMount } from 'svelte';
	import { slide, blur, fade } from 'svelte/transition';
	let visible = true;
	export let model: StatementModel;
	const nextModel = model.getNextModelName(model.modelName);
	onMount(() => {
		setTimeout(() => (visible = false), 750);
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
	<title>{model.title} supports Somaliland</title>
	<meta name="description" content={model.text} />

	<!-- URL CANONICAL -->
	<link rel="canonical" href="https://SomalilandRecognition.com/{model.modelName}" />

	<!-- FACEBOOK -->
	<meta property="og:url" content="https://SomalilandRecognition.com/{model.modelName}" />
	<!-- YOUR URL -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{model.title} supports Somaliland" />
	<!-- EDIT -->
	<meta property="og:description" content={model.text} />
	<!-- EDIT -->
	<meta property="og:updated_time" content="2023-12-17T00:20:50" />
	<!-- EDIT -->
	<meta property="og:image" content={model.image} />
	<!-- EDIT -->

	<!-- TWITTER -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://SomalilandRecognition.com/{model.modelName}" />
	<!-- EDIT -->
	<meta name="twitter:creator" content="@haadka" />
	<!-- EDIT -->
	<meta name="twitter:title" content="{model.title} supports Somaliland" />
	<!-- EDIT -->
	<meta name="twitter:description" content={model.text} />
	<!-- EDIT -->
	<meta name="twitter:image" content={model.image} />
	<!-- EDIT -->

	<!-- FAVICONS -->
	<link rel="shortcut icon" sizes="16x16" href="/favicon.ico" />
	<link rel="shortcut icon" sizes="32x32" href="/favicon.ico" />
	<link rel="apple-touch-icon icon" sizes="76x76" href="/favicon.ico" />
	<link rel="apple-touch-icon icon" sizes="120x120" href="/favicon.ico" />
	<link rel="apple-touch-icon icon" sizes="152x152" href="/favicon.ico" />
	<link rel="apple-touch-icon icon" sizes="180x180" href="/favicon.ico" />
	<link rel="apple-touch-icon icon" sizes="192x192" href="/favicon.ico" />
</svelte:head>
{#if visible}
	<div transition:blur class="bg-secondary" style="background-image: url('{model.image}')" />
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
				<a href="/{nextModel}" title={model.title}>
					<h6>
						Next
						<svg class="fa-camera">
							<use xlink:href="#fa-camera" />
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
