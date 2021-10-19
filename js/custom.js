
// number grade

function grade(){
    var number=parseInt(document.getElementById("text").value);
    switch(true){
        case(number>=1 && number<=32):
        document.getElementById("one").innerHTML="you have got F";
        document.getElementById("one").style.color="red";
        break;
        case(number>=33 && number<=39):
        document.getElementById("one").innerHTML="you have got D";
        document.getElementById("one").style.color="#4cd137";
        break;
        case(number>=40 && number<=49):
        document.getElementById("one").innerHTML="you have got C";
        document.getElementById("one").style.color="#4cd137";
        break;
        case(number>=50 && number<=59):
        document.getElementById("one").innerHTML="you have got B";
        document.getElementById("one").style.color="#4cd137";
        break;
        case(number>=60 && number<=69):
        document.getElementById("one").innerHTML="you have got A-";
        document.getElementById("one").style.color="#4cd137";
        break;
        case(number>=70 && number<=79):
        document.getElementById("one").innerHTML="you have got A";
        document.getElementById("one").style.color="#4cd137";
        break;
        case(number>=80 && number<=100):
        document.getElementById("one").innerHTML="you have got A+";
        document.getElementById("one").style.color="#4cd137";
        break;
        default:
            document.getElementById("one").innerHTML="please enter 1-100";
            document.getElementById("one").style.color="red";
    }
}
// subject grade
function call(){
    var num1=parseInt(document.getElementById("text1").value);
    var num2=parseInt(document.getElementById("text2").value);
    var num3=parseInt(document.getElementById("text3").value);
    var num4=parseInt(document.getElementById("text4").value);
    var num5=parseInt(document.getElementById("text5").value);
    var total=num1+num2+num3+num4+num5;
    document.getElementById("three").innerHTML=total;
    var avarage=total/5;
    document.getElementById("four").innerHTML=avarage;
    var rounded =Math.round(avarage);
    switch(true){
        case(rounded>=1 && rounded<=32):
            document.getElementById("two").innerHTML="you have got F";
            document.getElementById("two").style.color="red"; 
            break;
            case(rounded>=33 && rounded<=39):
            document.getElementById("two").innerHTML="you have got D";
            document.getElementById("two").style.color="#4cd137"; 
            break;
            case(rounded>=40 && rounded<=49):
            document.getElementById("two").innerHTML="you have got C";
            document.getElementById("two").style.color="#4cd137"; 
            break;
            case(rounded>=50 && rounded<=59):
            document.getElementById("two").innerHTML="you have got B";
            document.getElementById("two").style.color="#4cd137"; 
            break;
            case(rounded>=60 && rounded<=69):
            document.getElementById("two").innerHTML="you have got A-";
            document.getElementById("two").style.color="#4cd137"; 
            break;
            case(rounded>=70 && rounded<=79):
            document.getElementById("two").innerHTML="you have got A";
            document.getElementById("two").style.color="#4cd137"; 
            break;
            case(rounded>=80 && rounded<=100):
            document.getElementById("two").innerHTML="you have got A+";
            document.getElementById("two").style.color="#4cd137"; 
        break;
        default:
            document.getElementById("two").innerHTML="please enter accurate number";
            document.getElementById("two").style.color="red";
    }
}