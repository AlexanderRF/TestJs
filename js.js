//1
var money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
//2    

//3
var appData = {budget: money,
               timeData: time,
               expenses: {},
               optionalExpenses: {},
               income: [],
               savings: false};

for (let i = 0; i < 2; i++){
    var a = prompt('Введите обязательную статью расходов в этом месяце');
    var b = prompt('Во сколько обойдется?');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
     && a != '' && b != '' && a.length < 50){
         console.log("done");
        appData.expenses[a] = b;
    } else {

    }

};

appData.moneyPerDay = appData.budget / 30;

alert('Бюджет на 1 день: '+ appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log("ошибка");
}
