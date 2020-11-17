var count = 1,
    temp=0, opt, result = 0,
    optp, counter = 1,
    eql = 0;

function calc(a) {
    if (a == '+' || a == '-' || a == '/' || a == '%' || a == '*' || a == '=') {
        if (count != 1) {
            opt = a;
            count++;
            if (opt == '+') {
                add();
            }
            if (opt == '-') {
                sub();
            }
            if (opt == '*') {
                mul();
            }
            if (opt == '/') {
                div();
            }
            if (opt == '%') {
                mod();
            }
            if (opt == '=') {
                res();
            }
        } else {
            alert("please select no. first");
        }
    } 
}
function calculate(a){
        //document.getElementById('dis').value = '';
        temp=Number(temp)*10+a;
        document.getElementById('dis').value = temp;
        count++;
}

function add() {
    if (counter == 1) {
        //temp = parseInt(k);
        result = Number(temp);
        document.getElementById('dis').value = '';
        temp = 0;
        counter++;
    } else {
        if(optp!='+'){
            check();
        }
        else{
        //temp = parseInt(k);
        result = result + Number(temp);
        document.getElementById('dis').value = result;
        temp = 0;
        counter++;
        }
    }
    optp = '+';
}

function sub() {
    if (counter == 1) {
        //temp = parseInt(k);
        result = Number(temp);
        document.getElementById('dis').value = '';
        temp = 0;
        counter++;
    } else {
        if(optp!='-'){
            check();
        }
        else{
        //temp = parseInt(k);
        result = result - Number(temp);
        document.getElementById('dis').value = result;
        temp = 0;
        counter++;
        }
    }
    optp = '-';
}


function mul() {
    if (counter == 1) {
        //temp = parseInt(k);
        result = Number(temp);
        document.getElementById('dis').value = '';
        temp = 0;
        counter++;
    } else {
        if(optp!='*'){
            check();
        }
        else{
        //temp = parseInt(k);
        result = result * Number(temp);
        document.getElementById('dis').value = result;
        temp = 0;
        counter++;
        }
    }
    optp = '*';
}


function div() {
    if (counter == 1) {
        //temp = parseInt(k);
        result = Number(temp);
        document.getElementById('dis').value = '';
        temp = 0;
        counter++;
    } else {
        if(optp!='/'){
            check();
        }
        else{
        //temp = parseInt(k);
        result = result / Number(temp);
        document.getElementById('dis').value = result;
        temp = 0;
        counter++;
        }
    }
    optp = '/';
}



function mod() {
    if (counter == 1) {
        //temp = parseInt(k);
        result = Number(temp);
        document.getElementById('dis').value = '';
        temp = 0;
        counter++;
    } else {
        if(optp!='%'){
            check();
        }
        else{
        //temp = parseInt(k);
        result = result % Number(temp);
        document.getElementById('dis').value = result;
        temp = 0;
        counter++;
        }
    }
    optp = '%';
}



function res() {
    if (optp == '+') {
        add();
    }
    if (optp == '-') {
        sub();
    }
    if (optp == '*') {
        mul();
    }
    if (optp == '/') {
        div();
    }
    if (optp == '%') {
        mod();
    }
}
    function check(){
        if(optp=='+'){
            add();
        }
        if(optp=='-'){
           sub();
        }
        if(optp=='*'){
            mul();
        }
        if(optp=='/'){
            div();
        }
        if(optp=='%'){
            mod();
        }
    }