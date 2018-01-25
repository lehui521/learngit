function ajax({type,url,data,dataType}){
		  return new Promise(callback=>{  //避免回调地狱
		  var xhr=null;
		  if(window.XMLHttpRequest){
	        xhr=new XMLHttpRequest();
		  }else{
		    xhr=new ActiveXObject("Microsoft.XMLHttp");
		  }
		  if(type.toLowerCase()=="get"&&data!==undefined)
		  url+="?"+data;
		  xhr.open(type,url,true);
		  xhr.onreadystatechange=function(){
		    if(xhr.readyState==4){
			   if(xhr.status==200){
			     var resData=xhr.responseText;
				 if(dataType!==undefined&&dataType.toLowerCase()=="json"){
				   resData=JSON.parse(resData);
				 }
				 callback(resData);
			   }
			}
		  }
		  if(type.toLowerCase()=="post"){
		    xhr.setRequestHeader("Content-Type","application/x-www-urlencoded");
		  }
		  xhr.send(type.toLowerCase()=="get"?null:data);
		  });
	   }
