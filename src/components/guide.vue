<template>
	<div class="guideWarp">
			<span>举报指南</span>
			<div class='cont'>
				<p><i><i class="icon">1</i></i><span>纪检监察机关受理范围：</span><span>
对党组织、党员和监察对象违反党纪政纪行为的检举控告，依纪依法应由纪检监察机关受理的党组织、党员和监察对象不服党纪政纪处分和其他处理的申诉，对党风廉政建设和反腐败工作的意见建议。
</span>
				</p>
			</div>
			<div class='cont'>
				<p><i><i class="icon">2</i></i><span>纪检监察机关不予受理范围：</span><span>
对各级人大、法院、检察院、公安部门职权范围内的信访事项，请分别向有关人大、法院、检察院、公安部门提出；对依法应通过诉讼、仲裁、行政复议等法定途径解决的信访事项，请通过有关法定途径提出；对属于各级政府职能部门归口管理的信访事项，请向有关职能部门提出。
</span>
				</p>
			</div>
			<div class='cont'>
				<p><i><i class="icon">3</i></i><span>纪检监察机关鼓励署真实姓名和准确联系方式的实名举报。对认定为实名举报的，将优先办理，及时反馈办理结果。</span>
				</p>
			</div>
			<div class='cont'>
				<p><i><i class="icon">4</i></i><span>举报人应当对举报问题的真实性负责，对故意捏造事实、诬告陷害他人的，或以举报为名制造事端干扰纪检监察机关正常工作的，依照有关规定严肃处理，构成犯罪的，移送司法机关依法处理。</span>
				</p>
			</div>
			<div class='contFive'>
				<div><i><i class="icon">5</i></i>
					<span>是否实名举报</span><em><em class="changeIcom"></em></em>
				</div>
			</div>
			<div class="upInput">
				<input type="text" placeholder="举报人姓名">
				<input type="text" placeholder="举报人身份证">
				<input type="text" placeholder="举报人联系方式">
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
				<button @click='tijiao(event)'>提交</button>
			</div>
	</div>
</template>
<script>
	export default {
		name: 'guide',
		methods:{
		}

	}
</script>
<style>
	@import '../css/guide.css';
</style>