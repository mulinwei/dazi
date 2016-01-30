window.onload=function(){

var jianpan=document.getElementById('jianpan');
for(var ii=0;ii<54;ii++){
	var jian=document.createElement('div');
		jian.setAttribute('class','jian');
		if(Math.random()>0.5){
			jian.innerHTML=String.fromCharCode(Math.random()*26+65)
	}else{
		jian.innerHTML=String.fromCharCode(Math.random()*26+97)
	}
		jianpan.appendChild(jian);
	}
	var dis=document.getElementsByClassName('jian');
	var miao=document.getElementById('miao');
	var ind=0;
	var hio=0;
	var kaiguan=false;
	var start=setInterval(function(){
			if(kaiguan){
			miao.innerHTML=hio;
			hio++;
		}
	},1000)
	document.onkeydown=function(e){
		if(String.fromCharCode(e.keyCode+32)==dis[ind].innerHTML&&e.shiftKey==false||
			String.fromCharCode(e.keyCode)==dis[ind].innerHTML&&e.shiftKey==true){
			dis[ind].style.background='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')'
		    ind++;
		    kaiguan=true;
		    if(ind>=54){
		    	clearInterval(start);
		    }
		}
		if(e.keyCode==LEFT || e.keyCode==UP || e.keyCode==RIGHT || e.keyCode==DOWN){
			if(Math.abs(e.keyCode-dd)!=2){
				run(e.keyCode);
			}
		}
	}
	miao.onclick=function(){
			location.reload();
		}

		var shuaixin=document.getElementById('shuaixin');
		shuaixin.onclick=function(){
			location.reload();
		}

document.onmousedown=function(e){
	e.preventDefault();
}

var dan=document.getElementById('dan');
dan.onclick=function(){
	shuan.style.boxShadow='0 0 0px red inset';
	dan.style.boxShadow='0 0 15px red inset';

}
var shuan=document.getElementById('shuan');
shuan.onclick=function(){
	
	shuan.style.boxShadow='0 0 15px red inset';
	dan.style.boxShadow='0 0 0px red inset';
}
}