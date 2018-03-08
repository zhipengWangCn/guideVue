<template>
	<div class='guideQuest'>
		<span>举报问题</span>
		<div class='guideQuestcontFive'>
			<span>是否实名举报</span><em><em class="changeIcom"
			 @click="changeFn()"></em></em>
		</div>
		<div class="upInput" v-if='realName'>
			<input type="text" placeholder="举报人姓名">
			<input type="text" placeholder="举报人身份证">
			<input type="text" placeholder="举报人联系方式" v-model="PNum" v-on:change="checkFn(PNum)">
		</div>
		<span class="colorInterval"></span>
		<div class="midInput">
			<input type="text" placeholder="被举报人姓名">
			<input type="text" placeholder="被举报人单位及职务">
			<input type="text" placeholder="被举报人性别">
			<span>举报内容</span><br>
			<textarea placeholder="请参照举报指南中的举报模板详细描述举报问题,5000字以内">
		</textarea>
			<span>问题属地</span><br>
			<div class="Option">
				<div>
					<select>
						<option>省/市</option>
					</select>
				</div>
				<div>
					<select>
						<option>市县</option>
					</select>
				</div>
			</div>
		</div>
		<div class="foot">
			<span>添加附件<input type="file"/></span>
			<em></em><span>提示:附件课上传文档、图片、音频、视频等,最多可上传3个附件,每个附件大小不超过5M</span>
		</div>
		<div class="footBtn">
			<button v-on:click="sublimFn()">提交</button>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'guideQuest',
		data: function() {
			return {
				PNum: "",
				phBol: true,
				realName:true
			}
		},
		methods: {
			checkFn: function(PNum) {
				var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				if(!reg.test(PNum)) {
					alert("手机号不正确");
				} 
			},
			changeFn: function() {
				var changeIcom = document.getElementsByClassName('changeIcom')[0]
				if(this.realName) {
					this.realName = false
					changeIcom.style.left = '2.3rem';
				} else {
					this.realName = true
					changeIcom.style.left = 0;
				}

			},
			sublimFn: function() {
				if(this.phBol) {
				   this.$router.push({
								path: '/succee'
							})
				}else{
						alert("信息错误");
				}
			}
		}
	}
</script>

<style>
	@import '../css/guide.css';
	.guideQuestcontFive {
		width: 100%;
		height:2.4rem;
		margin-top: 1%;
		overflow: hidden;
		position: relative;
	}
	
	.guideQuestcontFive span {
		display: inline-block;
		line-height: 2.3rem;
		font-size:1.5rem ;
	}
	
	.guideQuestcontFive>em {
		display: inline-block;
		width: 4.6rem;
		height: 2.3rem;
		background: white;
		border-radius: 45%;
		position: absolute;
		bottom: 1%;
		right: 5%;
	}
	
	.changeIcom {
		display: inline-block;
		bottom: 2%;
		width: 2.3rem;
		height: 2.3rem;
		background: blue;
		position:relative;
		border-radius: 50%
	}
</style>