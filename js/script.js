let FIRST_USER_NUMBER = Number(prompt('Ввеіть перше число:'));
let SECOND_USER_NUMBER = Number(prompt('Ввеіть перше число:'));
let sum = 0;
while (FIRST_USER_NUMBER<SECOND_USER_NUMBER)
{
    FIRST_USER_NUMBER++;
  
  if(FIRST_USER_NUMBER<SECOND_USER_NUMBER);
    {
      sum+=FIRST_USER_NUMBER;
    }
}    
alert(sum);




// const number = parseInt(prompt('Enter an integer: '));
// for(let i = 2; i <= 9; i++) {
//     const result = i * number;
//     alert(`${number} * ${i} = ${result}`);
//     window.location.reload();
// }

let days = ["Понеділок", "Вівторок", "Середа", "Четвер","Пятниця", "Субота","Неділя"];
days.forEach((day,index)=>{
    if(index == new Date().getDay()){
        alert("Завтра" + ' ' + day)
      }
});
