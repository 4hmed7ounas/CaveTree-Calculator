let string = "";
let Buttons = document.querySelectorAll('.btn');
Array.from(Buttons).forEach((btn) => {
    btn.addEventListener('click', (element) => {
        console.log(string[0] + string[1]);
        if (element.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (element.target.innerHTML == 'x\u00b2') {
            if (string !== "") {
                let number = parseFloat(string);
                string = (number * number).toString();
                document.querySelector('input').value = string;
            }
        }
        else if (element.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            string = string + element.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})