<template>
	<div id="homewarp" class="homeWarp">  
		<div class="contUp">
			<img src="../img/headLogo.png"  alt="">
			<p>中共山东省纪律检查委员会</p>
			<p>山东省监察厅</p>
			<p>网络举报平台</p>
			</div>
			<div class="contDown">
				<button @click="$router.push({path:'/guide'})">举报指南</button>
				<button @click="$router.push({path:'/report'})">我要举报</button>
				<button @click="$router.push({path:'/query'})">举报查询</button>
				</div>
			</div>
</template>
<script>
      export default {
      name: 'home',
    }
</script>

<style>
	@import  '../css/home.css';
</style>