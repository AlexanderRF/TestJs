function start(){
    let money = +prompt('Ваш бюджет на месяц?', '');
    let time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money!='' || money == null ){
        var money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start(); 

var appData = {budget: money,
               timeData: time,
               expenses: {},
               optionalExpenses: {},
               income: [],
               savings: true};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        var a = prompt('Введите обязательную статью расходов в этом месяце');
        var b = prompt('Во сколько обойдется?');
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
         && a != '' && b != '' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
        } else {
            --i;
        }
    };
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

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

function checkSaving(){
    if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений?')
            percent = +prompt('Под какой процент?'); 
        
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSaving();