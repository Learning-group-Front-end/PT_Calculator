var beijiashu='';
var jiashu='';
var fuhao="";
var s='';
var m1='0';
var m2='';

function showScreen(){
    document.getElementById("showScreen").value=beijiashu+fuhao+jiashu;
}

//点击退格
function clickBack(){
    if(s!="") beijiashu=s;
    if(jiashu.length>0){
        jiashu = jiashu.substring(0,jiashu.length-1);

    } else if(fuhao.length>0){
        fuhao = fuhao.substring(0,fuhao.length-1);
    }else if(beijiashu.length>0){
        beijiashu = beijiashu.substring(0,beijiashu.length-1);
    }
    showScreen();
}

//点击AC清空数据
function clickAC(){
    beijiashu='';
    jiashu='';
    fuhao="";
    s = '';
    showScreen();
}

function chickShuzi(num){
    if(fuhao==""){
        beijiashu = beijiashu+num;
    }else{
        jiashu=jiashu+num;
    }
    showScreen();
}

//点击符号
function clickFuhao(f){
    if(fuhao=="" && (beijiashu != "" || s!="")){
        fuhao = f;
        if(s!="" && beijiashu==""){
            beijiashu = s;
            s = '';
        }
        showScreen();
    }
   
}

//点击等号
function clickDeng(){
    if(beijiashu!="" && jiashu!=""){
        var x = parseFloat(beijiashu);
        var y = parseFloat(jiashu);
        
        if(fuhao=="+"){
            s = x + y + "";
        }else if(fuhao=="-"){
            s = x - y + "";
        }else if(fuhao=="*"){
            s = x * y + "";
        }else{
            s = x / y + "";
        }
        document.getElementById("showScreen").value=s;
        beijiashu = "";
        jiashu = "";
        fuhao = "";

    }else{
        alert("请输入需要做运算的两个数字");
    }
}

//点击小数点
function clickDian(){
    if(fuhao==""){
        if(beijiashu.length>0 && beijiashu.indexOf(".")==-1){
            beijiashu = beijiashu + ".";
        }
    }else{
        if(jiashu.length>0 && jiashu.indexOf(".")==-1){
            jiashu = jiashu + ".";
        }
    }
    showScreen();
}

//点击正负号
function clickZhengfu(){
    if(beijiashu.indexOf("-")==-1 && s.indexOf("-")==-1){
        if(beijiashu!="" && s==""){
            beijiashu = "-" + beijiashu;
            showScreen();
        }
        if(beijiashu=="" && s!=""){
            s = "-" + s;
            document.getElementById("showScreen").value=s;
        }
    }
    else{
        if(beijiashu!="" && s==""){
            beijiashu = beijiashu.substring(1);
            showScreen();
        }
        if(beijiashu=="" && s!=""){
            s = s.substring(1);
            document.getElementById("showScreen").value=s;
        }
    }
}

function clickMjia(){
    if(s.trim().length != 0){
        var x = parseFloat(m1);
        var y = parseFloat(s);
        console.log(x);
        console.log(y);
        x = x + y;
        m1 = x.toString();
        console.log(m1);
        showMIcion();
    }
}

function clickMjian(){
    if(s.trim().length != 0){
        var x = parseFloat(m1);
        var y = parseFloat(s);
        x = x - y;
        m1 = x.toString();
        console.log(m1);
        showMIcion();
    }
}

function clickMR(){
    console.log(m1);
    document.getElementById("showScreen").value = m1;
    s = m1;
}

function clickMC(){
    m1 = "";
    document.getElementById("showMemorize").value="";
}

function showMIcion(){
    document.getElementById("showMemorize").value="M";
}