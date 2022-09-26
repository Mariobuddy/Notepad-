function Change(font){
 document.getElementById("content").style.fontFamily=font.value;
} 

function Size(n){
    document.getElementById("content").style.fontSize=n.value+'px';
}

function Bold(){
    let bold=document.getElementById("content").style.fontWeight;

    if(bold!=='bold'){
        document.getElementById('content').style.fontWeight='bold';
        document.getElementById('lan').style.cssText="background:white;color:black;"

    } else{
        document.getElementById('content').style.fontWeight='normal';
        document.getElementById('lan').style.cssText="background:black;color:white;"

    }
}


function Under(){
    let under=document.getElementById("content").style.textDecoration;

    if(under!=='underline'){
        document.getElementById('content').style.textDecoration='underline';
        document.getElementById('done').style.cssText="background:white;color:black;"
    } else{
        document.getElementById('content').style.textDecoration='none';
        document.getElementById('done').style.cssText="background:black;color:white;"
    }
}

function Italic(){
    let italic=document.getElementById('content').style.fontStyle;
   if(italic!=='Italic'){
    document.getElementById('content').style.fontStyle='Italic';
    document.getElementById('son').style.cssText="background:white;color:black;"
   }else{
    document.getElementById('content').style.fontStyle='bold';
    document.getElementById('son').style.cssText="background:black;color:white;"


   }
}


function Restart(){
    document.getElementById('content').style.textDecoration='none';
    document.getElementById('content').style.fontWeight='normal';
    document.getElementById('content').style.fontStyle='normal';
    document.getElementById('son').style.cssText="background:black;color:white;"
    document.getElementById('done').style.cssText="background:black;color:white;"
    document.getElementById('lan').style.cssText="background:black;color:white;"








}



function Remove(){
    document.getElementById('content').value="";
}


function Copy(){
   let take= document.getElementById('content').select();
   document.execCommand('copy');
   let tool=document.getElementById('tat');
   let h=document.createElement('h1');
   h.innerHTML="Copied";
   h.id='eat'
   tool.appendChild(h);
   
   setTimeout(()=>{
    tool.removeChild(tool.lastElementChild);
   },1000);

}