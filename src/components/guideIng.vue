<template>
	<div class="guidedWarp">
		<div class="guidedUp">
			<img src="../img/headLogo.png"  alt="">
			<p>中共山东省纪律检查委员会</p>
			<p>山东省监察厅</p>
		</div>
		<div class="showGudie">
			<guideSon class="guideSonWarp"></guideSon>
		</div>
		<div class="guidedFoot">
			<input  type="checkbox" :disabled="Prohibition" v-model="check" @change="checkFn()"><span>我已阅读以上条款(<em>{{cont}}s</em>)</span>
<button v-bind:style="styleObj" :disabled="butBol" @click="$router.push({path:'/guideQuest'})">我要举报</button>
		</div>
	</div>
</template>	
<script>
import guideSon from '@/components/guideSon'
     export default{
     	name:'guideIng',
     	 components:{
     	 	guideSon
     	 },
     data:function(){
       return {
          cont:10,
          Prohibition:true,
          butBol:true,
          check:false,
          styleObj:{
          	'backgroundColor':'lightgray'
          }
       }
   },
   methods:{
   	checkFn(){
   		this.butBol = !this.check
   		if(!this.butBol){
   			this.styleObj.backgroundColor='blue';
   		}else{
   			this.styleObj.backgroundColor='lightgray';
   		}
   	}
     },
     created:function(){
     	var timer1 =setInterval(()=>{
     		this.cont-=1;
     		if(this.cont==0){
     			this.Prohibition =false
             	clearInterval(timer1)
     		}
     },1000)  	

}
     }
</script>
<style>
@import  '../css/guide.css';
body,div{
	margin: 0;
	padding: 0;
}
 template{
 	width: 100%;
	height: 100%;	
 }
.guidedWarp{
	width: 100%;
	height: 100%;
	background: url(../img/homeBg.png) no-repeat;
	background-size:100% 100% 
}
	/*顶部logo文字说明*/
.guidedUp{
	padding-top:5%;
	width: 100%;
	height: 20%;
}
.guidedUp img{
	height:40%;
	width:15%;
	margin:5% 42.5% 0 42.5%;
}
.guidedUp p{
	margin-top:0;
	margin-bottom: 0;
	text-align: center;
	color:black;
	font-size: 2rem
}
.showGudie{
	width: 90%;
	height: 50%;
	border:2px solid blue;
	margin-top: 5%;
	margin-left: 4.5%;
	overflow: auto;
}
.guidedFoot{
	width: 90%;
	margin-left: 5%;
	margin-top:5%;
}
.guidedFoot input{
    width: 1.5em;
	height: 1.5em;
	border: none;
	border:1px solid blue;
	margin-right: 1%
}
.guidedFoot span{
	font-size: 1.5rem;

}
.guidedFoot  em{
	font-style: normal;
	color: red
}
.guidedFoot button{
	width:100%;
	background-color:gray;
	font-size:3rem;
	color:white;
	padding-top:2%;
	margin-top: 5%;
	padding-bottom: 2%;
	border-radius: 10px;
}
</style>