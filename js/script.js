/*1*/
// let FirstUserNmber = Number(prompt('Введіть перше число:'));
// let SecondUserNumber = Number(prompt('Введіть перше число:'));
// let sum = 0;
// while (FirstUserNmber<SecondUserNumber)
// {
//     FirstUserNmber++;

//   if(FirstUserNmber<SecondUserNumber);
//     {
//       sum+=FirstUserNmber;
//     }
// }    
// alert(sum);

/*2*/

const FIRST_USER_NUMBER = Number(prompt('Введіть перше число:'));
const SECOND_USER_NUMBER = Number(prompt('Введіть перше число:'));

function gcd(FIRST_USER_NUMBER, SECOND_USER_NUMBER) {
    while(FIRST_USER_NUMBER != SECOND_USER_NUMBER){
        if(FIRST_USER_NUMBER>SECOND_USER_NUMBER) {
            FIRST_USER_NUMBER -= SECOND_USER_NUMBER;
        }
        else {
            SECOND_USER_NUMBER -= FIRST_USER_NUMBER;
        }
    }
    return FIRST_USER_NUMBER;
}if(FIRST_USER_NUMBER <=0 && SECOND_USER_NUMBER <=0){
    alert('Зараз я тебе на 0 поділю')
}

let result = gcd(FIRST_USER_NUMBER, SECOND_USER_NUMBER);
alert(result);

/*3*/

// const number = parseInt(prompt('Enter an integer: '));
// for(let i = 2; i <= 9; i++) {
//     const result = i * number;
//     alert(`${number} * ${i} = ${result}`);
//     window.location.reload();
// }

// let days = ["Понеділок", "Вівторок", "Середа", "Четвер","Пятниця", "Субота","Неділя"];
// days.forEach((day,index)=>{
//     if(index == new Date().getDay()){
//         alert("Завтра" + ' ' + day)
//       }
// });
