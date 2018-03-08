<template>
	<div class="succeeWarp">  
		<div class="succeeUp">
			<span>举报问题</span>
			</div>
			<div class="succeeCont">
  <p>感谢您信任山东省纪检监察机关，您反映的问题已收到，您的查询码是<a href="">BEGJ4G9H424476Q8Z02T</a>。

</p>
<p>我们将按照有关规定认真办理您反映的属于纪检监察机关受理范围的问题。对实名举报，我们将优先受理，及时反馈办理结果。</p>
  <p>请您不要重复举报同一问题，对3个月以内的重复举报，我们不予受理。</p>
  <p>对不属于纪检监察机关受理范围的信访事项，请向有关部门提出。</p>
				</div>
			</div>
</template>
<script>
      export default {
      name: 'succee',
    }
</script>

<style>
@import  '../css/guide.css';
.succeeWarp{
	width: 100%;
	height: 100%;
	background:url(../img/homeBg.png) no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
	position:relative;
}
.succeeUp>span{
   display: inline-block;
	width: 100%;
	background: rgba(202,232,238,0.5);
	font-size:2.2rem;
	text-align: center;
	padding-top:2%;
	padding-bottom:1%;
}
.succeeCont{
	width: 100%;
	height: 50%;
	background-color:rgb(233,241,247);
}
.succeeCont p{
	width: 90%;
	margin-left: 5%;
	font-size: 1.3rem;
	margin-top: 3%;
	text-indent: 0.5rem;
	
}
.succeeCont a{
	word-break:break-all
}

.succeeCont a:visited{
	color: red
}
</style>