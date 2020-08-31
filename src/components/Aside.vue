<template>
	<aside class="aside">
		<a>asdasd</a>
	</aside>
</template>

<script>
import path from 'path';
export default {
	
}
</script>

<style>
	.aside {
		width: 130px;
		position: fixed;
		z-index: 1;
		top: 20px;
		left: 10px;
		background: #eee;
		overflow-x: hidden;
		padding: 8px 0;
	}

	.aside a {
		padding: 6px 8px 6px 16px;
		text-decoration: none;
		font-size: 25px;
		color: #2196F3;
		display: block;
	}

	.aside a:hover {
		color: #064579;
	}
</style>