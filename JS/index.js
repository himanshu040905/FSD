//console.log("hello world");

//console.log(a);
//let a=20;

// var a = 20;
// if(a>20){
//     var a =50;
//     console.log(" a inside value="+a)
// }
// else{
//     console.log("inside else statement"+a)
// }
// console.log("a outside value"+a);

// function greetings(){
//     console.log("hiiiiii")
// }
// greetings();

// const data=function(msg){
//     return "hiiiii...hellloooooo"+msg;
// }
// const msg1=data(" good morning");
// console.log(msg1);

// arrow function
// const data=(msg)=>{
//     // console.log("hiii.....hellooo"+msg);

// }
// data(" Good Morning");

// setTimeout(()=>(console.log("hellloooooooo")),1000);

function selectLanguage(lang){
    let data;
    if(lang == "java"){
        function javaCompiler(){
            return " Hey, Java Compiler calling...";
        }
        data = javaCompiler();
    }
    else if(lang == "c"){
        function cCompiler(){
            return "Hey, C Compiler";
        }
        data = cCompiler();
    }
    else{
        data = "no compiler avail";
    }
    return data;
}
const data1 = selectLanguage("c");
console.log(data1);