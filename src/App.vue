<template>
  <div id="app">
	<div class="nav">
		<router-link to='/home'>
			<span class="iconfont icon-shouye"></span>
			<div class="itemname">首页</div>
		</router-link>
		<router-link to='/movie'>
			<span class="iconfont icon-dianying"></span>
			<div class="itemname">电影</div>
		</router-link>
		<router-link to='/drama'>
			<span class="iconfont icon-dianshiju"></span>
			<div class="itemname">电视剧</div>
		</router-link>
		<router-link to='/drama'>
			<span class="iconfont icon-dongman"></span>
			<div class="itemname">动漫</div>
		</router-link>
	</div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

	* {
		margin: 0;
		padding: 0;
	}
	
	li {
		list-style: none;
	}

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

	.mint-search {
		height: 1rem !important;
	}

	.nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0.2rem 0;
		background-color: #fff;
		border-top: 1px solid #cfcfcf;
		span {
			font-size: 0.4rem;
		}
		a {
			font-weight: bold;
			color: #b1b1b1;
			text-decoration: none;
			&.router-link-exact-active {
				color: rgb(109, 109, 109);
			}
		}

	}

</style>
