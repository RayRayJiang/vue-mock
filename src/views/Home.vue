<template>
	<div class="home">
		<Header/>
		<div class="homelist">
			<Homemodule icon="iconfont icon-remen" title-name="热门" :list-item="listItem"/>
			<Homemodule icon="iconfont icon-dianying" title-name="电影" :list-item="listItem"/>
		</div>
		<BackTop />
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import Homemodule from '@/components/Homemodule';
	import BackTop from '@/components/BackTop'
	import { getList, hotList } from '@/api/home';
	export default {
		name: "Home",
		data() {
			return {
				listItem: []
			}
		},
		components: {
			Header,
			Homemodule,
			BackTop
		},
		methods: {
			reqList() {
				getList().then((res) => {
					const { code, data, msg } = res;
					if (code == 0) {
						this.listItem = data;
						console.log('this.listItem', this.listItem)
					}
				})
			},
			reqDouban() {
				hotList().then((res) => {
					console.log('res', res)
				})
			}
		},
		mounted() {
			this.reqList();
			this.reqDouban();
		},

	};
</script>

<style lang="scss" scoped>
	.home {
		padding-bottom: 1rem;
		.homelist {
			color: #757575;
		}
	}
</style>
