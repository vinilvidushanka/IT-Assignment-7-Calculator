let Result=document.getElementById('result');

function insertValue(input){
    
    Result.value += input;
    console.log(input)
    console.log(Result.value)
    
}

function clearResult(){
    Result.value = '';
}
function deleteResult(){
    Result.value = Result.value.slice(0,-1);
}

function calculate(){
    try{
        Result.value = eval(Result.value);
    }
    catch(error){
        Result.value = "error";
    }
}