<template>
	<div class="topBanner">
		<div class="left-component">
			<a href="/index" class="logo"></a>
			<PageTune></PageTune>
			<SearchBar></SearchBar>
		</div>
		<div class="right-component">
			<UserState></UserState>
			<SettingAndMessage></SettingAndMessage>
			<WindowButton></WindowButton>
		</div>
	</div>
</template>

<script>
	import PageTune from './child/banner/pageTune.vue'
	import SearchBar from './child/banner/search.vue'
	import UserState from './child/banner/userState.vue'
	import SettingAndMessage from './child/banner/settingAndMessage.vue'
	import WindowButton from './child/banner/windowButton.vue'
	export default {
		name: 'Banner',
		data() {
			return {}
		},
		components: {
			PageTune,
			SearchBar,
			UserState,
			SettingAndMessage,
			WindowButton
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.left-component{
		float:left;
		width: 480px;
	}
	.right-component{
		float:right;
		padding: 0 0 14px 0;
	}

	.topBanner {
		height: 50px;
		background-color: #c62f2f;
	}
	.topBanner:after{
		content:'';
		display: block;
		clear: both;
	}
	.logo {
		background: url('../assets/topbar.png') 14px 14px no-repeat;
		background-size:auto 26px ;
		width: 145px;
		height: 50px;
		padding: 14px 13px;
		float:left;
	}
</style>
