//hiển thị danh sách tiền tệ
var txt1="";
var i;
var xmlhttp= new  XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
    if (this.readyState==4 && this.status==200){
        var myObj=JSON.parse(this.response);
        var obj1=myObj.results;
        for (i in obj1){
            txt1=txt1+"<option>"+obj1[i].currencyId+"</option>";
        }
        document.getElementById("from").innerHTML=txt1;
        document.getElementById("to").innerHTML=txt1;
    }
};

xmlhttp.open("GET","json_quocgia_tiente.txt",true);
xmlhttp.send();

//tuong ứng vói sự thay doi cua select from
function display1(){
    var input1=document.getElementById("from").value;
    var i,r="";
    var xmlhttp= new  XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (this.readyState==4 && this.status==200){
            var myObj=JSON.parse(this.response);
            var obj1=myObj.results;
            for (i in obj1){
                if(obj1[i].currencyId==input1) r=r+obj1[i].name+"<br>";
            }
            document.getElementById("nation1").innerHTML=r;
        
        }
    };

    xmlhttp.open("GET","json_quocgia_tiente.txt",true);
    xmlhttp.send();
   
}

//tương ứng vói sự thay đổi của select to
function display2(){
    var input2=document.getElementById("to").value;
    var i,r="";
    var xmlhttp= new  XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (this.readyState==4 && this.status==200){
            var myObj=JSON.parse(this.response);
            var obj1=myObj.results;
            for (i in obj1){
                if(obj1[i].currencyId==input1) r=r+obj1[i].name+"<br>";
            }
            document.getElementById("nation2").innerHTML=r;
        
        }
    };

    xmlhttp.open("GET","json_quocgia_tiente.txt",true);
    xmlhttp.send();
   
}

//sự kiện cho nút button tính toán tỉ giá
function convert(){
    var number=document.getElementById("number").value;
    var input1=document.getElementById("from").value;
    var input2=document.getElementById("to").value;
    
    if(number>0){
        var number=document.getElementById("number").value;
        var input1=document.getElementById("from").value;
        var input2=document.getElementById("to").value;
        var xmlhttp= new  XMLHttpRequest();
        xmlhttp.onreadystatechange=function(){
            if (this.readyState==4 && this.status==200){
                var myObj2=JSON.parse(this.response);
                var obj2=myObj2.rates;
                var m1=obj2[input1];
                var m2=obj2[input2];
                var result=m2/m1*number;
                document.getElementById("money").innerHTML=result;
            }
        };
        xmlhttp.open("GET","http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1",true);
        xmlhttp.send();
    

        }
    if(number<0) {alert("Nhập số tiền không nhỏ hơn 0 ");}
    if(number==0) {
             alert("Nhập số tiền");
    }
    
    
    
}