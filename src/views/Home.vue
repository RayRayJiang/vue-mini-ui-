<template>
	<div class="home">
		<div class="swiper">
			<mt-swipe :auto="3000">
				<mt-swipe-item><img src="../assets/images/swiper.jpg" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="../assets/images/swiper.jpg" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="../assets/images/swiper.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- <mt-swipe :auto="4000" v-for="item in swiperList" :key="item.id">
			<mt-swipe-item><img :src="$commonUrl + item.banner" alt=""></mt-swipe-item>
		</mt-swipe> -->
	</div>
</template>

<script>
	import { getList } from '../api/home';
	export default {
		name: "Home",
		data() {
			return {
				swiperList: [],
			}
		},
		components: {

		},
		methods: {
			resBanner() {
				getList().then(res => {
					this.swiperList = res.items;
				})
			},

		},
		mounted() {
			this.resBanner()
		},

	};
</script>

<style lang="scss" scoped>
	.swiper {
		width: 100%;
		height: 4rem;
		padding: .2rem 0;

	}

	img {
		width: 95%;
		height: 4rem;
		border-radius: .4rem;
	}

</style>
