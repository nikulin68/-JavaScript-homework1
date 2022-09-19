while (true) {

    let number = Math.floor(Math.random()*1000);
    console.log('Я загадал:', number);

    let userNumber = window.prompt('Введите число от 0 до 999')
    
    console.log(userNumber)
    if (userNumber === "q") {
        alert("До свидания!")
        break;
    }
    else if (isNaN(userNumber) || !(userNumber >= 0 && userNumber <= 9999)) {
        alert ( 'Введено число не от 0 до 999')
    } else if (userNumber == number) {
        alert('Вы выиграли!');
    } else if (userNumber > number) {
        alert('Ваше число больше!');
    } else if (userNumber < number) {
        alert('Ваше число меньше!');
    }       
}
