/*1*/
let FirstUserNmber = Number(prompt('Введіть перше число:'));
let SecondUserNumber = Number(prompt('Введіть друге число:'));
let sum = 0;
while (FirstUserNmber<SecondUserNumber)
{
    FirstUserNmber++;

  if(FirstUserNmber<SecondUserNumber);
    {
      sum+=FirstUserNmber;
    }
}    
alert(sum);

/*2*/

const FIRST_USER_NUMBER = Number(prompt('Введіть перше число:'));
const SECOND_USER_NUMBER = Number(prompt('Введіть друге число:'));

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
}

let result = gcd(FIRST_USER_NUMBER, SECOND_USER_NUMBER);
alert(result);
window.location.reload();

/*3*/

const USER_NUMBER = prompt('введіть число: ');
if (USER_NUMBER <=0){
    alert('Зараз я тебе на 0 поділю');
}else{
    alert(`Зараз облічимо усі дільника числа${USER_NUMBER}, і це: `);
    for(let i = 1; i <= USER_NUMBER; i++) {

        if(USER_NUMBER % i == 0) {
            alert(i);
            console.log(i); 
        }
    }
} window.location.reload();

/*4*/

const NUMBER = Number(prompt('Введіть число!'));
const digits = (NUMBER, count = 0) => {
    if (NUMBER) {
        return digits(Math.floor(NUMBER / 10), ++count);
    };
    return count;
};
alert('Кількість цифр у числі = ' + digits(NUMBER));

/**6 */

const OPERATOR = prompt('Виберіть дію ( +, -, * чи / )');

const FIRST_NUMBER = parseFloat(prompt('Введіть перше число: '));
const SECOND_NUMBER = parseFloat(prompt('Введіть друге число: '));

let calculationResult;

if (OPERATOR == '+') {
    calculationResult = FIRST_NUMBER + SECOND_NUMBER;
}
else if (OPERATOR == '-') {
    calculationResult = FIRST_NUMBER - SECOND_NUMBER;
}
else if (OPERATOR == '*') {
    calculationResult = FIRST_NUMBER * SECOND_NUMBER;
}
else if (OPERATOR == '/'){
    calculationResult = FIRST_NUMBER / SECOND_NUMBER;
}else{
    alert('Введіть корректні дані');
}

alert(`${FIRST_NUMBER} ${OPERATOR} ${SECOND_NUMBER} = ${calculationResult}`);
window.location.reload();



/**8 */
let days = ["Понеділок", "Вівторок", "Середа", "Четвер","Пятниця", "Субота","Неділя"];
days.forEach((day,index)=>{
    if(index == new Date().getDay()){
        alert("Завтра" + ' ' + day)
      }
});


/**9 */

const number = parseInt(prompt('Ввеіть число: '));
for(let i = 2; i <= 9; i++) {
    const result = i * number;
    alert(`${number} * ${i} = ${result}`);
    console.log(`${number} * ${i} = ${result}`)
    window.location.reload();
}


/**10 */

let NumberMin = 0;
let NumberMax = 100;
let userResult = Math.floor((NumberMin + NumberMax) / 2);
let userNumber;

alert("Загадайте число від 0 до 100");

while (true) {
    userNumber = prompt(`Введіть ">" якщо число більше від ${userResult}, або "<" якщо число менше від ${userResult}, або знак "=" якщо ваше число рівне ${userResult}`);
    if (userNumber == '>') {
        NumberMin = userResult + 1;
    } else if (userNumber == '<') {
        NumberMax = userResult - 1;
    } else if (userNumber == '=') {
        alert(`Ваше загадане число: ${userResult}`);
        break;
    }
    userResult = Math.floor((NumberMin + NumberMax) / 2);
}

