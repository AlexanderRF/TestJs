function start(){
    let money = '';
    let l = false;
    while(l == false ){
        if(isNaN(money) || money == '' || money == null) {
            money = prompt('Ваш бюджет на месяц?', '');
        }
        else{
            l = true;
        }
    }
    let time = prompt("Введите дату в формате YYYY-MM-DD", '');
}

start(); 

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            var a = prompt('Введите обязательную статью расходов в этом месяце');
            var b = prompt('Во сколько обойдется?');

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                --i;
            }
        }
    },
     detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Бюджет на 1 день: '+ appData.moneyPerDay);
     },
     detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log("ошибка");
        }
     }, 
     checkSavings: function () {
        if (appData.savings == true){
            let save = +prompt('Какова сумма накоплений?')
                percent = +prompt('Под какой процент?'); 
            
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
     },
     chooseOptExpenses: function(){
         for (let i = 1;i < 3;i++){
             let opt = prompt("Статья необязательных расходов?","");
             appData.optionalExpenses[i] = opt;
         }
     },
     chooseIncome: function()  {
         let k = false;
         while(k == false) {
            let items = prompt('Что принесет дополнительный доход? перечислите через запятую.','');
            if(typeof(items) === 'string' && items != '' && items != null) {
                k = true;
            }
         }
         appData.income = items.split(', ');
         appData.income.push(prompt('Может что-то еще?'));
         appData.income.sort();
         appData.income.forEach(function(item,i){
             ++i;
             console.log('Способы доп. заработка:');
             console.log(i + ':' + item);
         });
     }
};






