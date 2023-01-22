
function solve(){
   const readLine=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
   });
   let computerQuess=Math.floor(Math.random()*100);
   let quess;

   let recursiveAsyncReadLine=function(){
    readLine.question('Quess the number(0-100):',number => {
        quess=Number(number);
        if(quess <=100 && quess>=0){
            if(quess==computerQuess){

            }else if(quess<computerQuess){

            }else if(quess>computerQuess){

            }
        }else{
            console.log('Invalid input! Try again...');
            recursiveAsyncReadLine();
        }
    })
   }
   recursiveAsyncReadLine();
}
solve()
