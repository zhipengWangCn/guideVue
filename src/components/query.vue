<template>
	<div id="" class="queryWarp"> 
	<span>举报查询</span> 
		<div class="queryUp">
			<input type="text">
			<button>点击查询</button>
			<p>答复内容<span>(提交查询后显示)</span></p>
			</div>
			<div class="queryCont">
      
<p>感谢您信任山东省纪检监察机关，您反映的问题已收到，我们将按照有关规定认真办理您反映的属于纪检监察机关受理范围的问题。对实名举报，我们将优先受理，及时反馈办理结果。
</p>
<p>请您不要重复举报同一问题，对3个月以内的重复举报，我们不予受理。</p>
<p>对不属于纪检监察机关受理范围的信访事项，请向有关部门提出。</p>


				</div>
			</div>
</template>
<script>
      export default {
      name: 'query',
    }
</script>

<style>
@import  '../css/guide.css';
.queryWarp{
	width: 100%;
	height: 100%;
	background:url(../img/homeBg.png) no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
	position:relative;
}
.queryWarp>span{
   display: inline-block;
	width: 100%;
	font-size:4em;
	text-align: center;
	padding-top:2%;
	padding-bottom:1%;
}
.queryUp{
	width: 90%;
	margin-left: 5%;
}
.queryUp>input{
	margin-top: 10%;
	width: 100%;
	padding-top:8%;
	border: none;
	border: 1px solid blue 
}
.queryCont{
	width: 90%;
	height: 60%;
	margin-left: 5%;
	background-color:rgb(233,241,247);
	border:1px solid lightblue 
}
.queryUp>button{
	margin-top: 10%;
	width: 100%;
	background-color:blue;
	border: none;
	border: 1px solid blue ;
	padding-top: 2%;
	padding-bottom:2%;
	border-radius:10px;
	color: white;
	font-size:3em  
}
.queryUp>p{
	margin-top:3%; 
	color: white;
	font-size:3em  
}
.queryUp>p>span{
	font-size:0.5em 
}
.queryCont{
	width: 90%;
	height: 50%;
	background-color:rgba(233,241,247,0.5);
	margin-top: 2%;
    border:1px solid blue   
}
.queryCont p{
	width: 90%;
	margin-left: 5%;
	margin-top: 5%;
	font-size: 2em;
	text-indent: 2em;
}
</style>