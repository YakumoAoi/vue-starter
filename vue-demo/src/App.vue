<template>
	<div id="app">
		<Banner></Banner>
		<SideBar></SideBar>
		<Player></Player>
		<router-view/>
	</div>
</template>

<script>
	import Banner from './components/banner.vue'
	import SideBar from './components/sidebar.vue'
	import Player from './components/player.vue'
	export default {
		name: 'App',
		components: {
			Banner,
			SideBar,
			Player
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#app a{
		text-decoration: none;
	}
	#app li{
		list-style: none;
	}
	body,
	html {
		margin: 0;
		padding: 0;
	}
	.icon {
		width: 1em; height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
	* {
		box-sizing: border-box;
	}
</style>
