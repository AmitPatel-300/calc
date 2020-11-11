var count = 1,
    temp, opt, result = 0,
    optp, counter = 0,
    eql = 0;

function calculate(a) {
    if (a == '+' || a == '-' || a == '/' || a == '%' || a == '*' || a == '=') {
        if (count != 1) {
            opt = a;
            count++;
            if (opt == '+') {
                add(document.getElementById('dis').value);
            }
            if (opt == '-') {
                sub(document.getElementById('dis').value);
            }
            if (opt == '*') {
                mul(document.getElementById('dis').value);
            }
            if (opt == '/') {
                div(document.getElementById('dis').value);
            }
            if (opt == '%') {
                mod(document.getElementById('dis').value);
            }
            if (opt == '=') {
                res();
            }
        } else {
            alert("please select no. first");
        }
    } else {
        temp = a;
        document.getElementById('dis').value += temp;
        count++;
    }
}

function add(k) {
    counter++;
    optp = '+';
    if (counter % 2 != 0) {
        temp = parseInt(k);
        result = temp;
        document.getElementById('dis').value = '';
        temp = 0;
    } else {
        temp = parseInt(k);
        result = result + temp;
        document.getElementById('dis').value = result;
        temp = 0;
    }
}

function sub(k) {
    counter++;
    optp = '-';
    if (counter % 2 != 0) {
        temp = parseInt(k);
        result = temp;
        document.getElementById('dis').value = '';
        temp = 0;
    } else {
        temp = parseInt(k);
        result = result - temp;
        document.getElementById('dis').value = result;
        temp = 0;
    }
}

function mul(k) {
    counter++;
    optp = '*';
    if (counter % 2 != 0) {
        temp = parseInt(k);
        result = temp;
        document.getElementById('dis').value = '';
        temp = 0;
    } else {
        temp = parseInt(k);
        result = result * temp;
        document.getElementById('dis').value = result;
        temp = 0;
    }
}

function div(k) {
    counter++;
    optp = '/';
    if (counter % 2 != 0) {
        temp = parseInt(k);
        result = temp;
        document.getElementById('dis').value = '';
        temp = 0;
    } else {
        temp = parseInt(k);
        result = result / temp;
        document.getElementById('dis').value = result;
        temp = 0;
    }
}

function mod(k) {
    counter++;
    optp = '%';
    if (counter % 2 != 0) {
        temp = parseInt(k);
        result = temp;
        document.getElementById('dis').value = '';
        temp = 0;
    } else {
        temp = parseInt(k);
        result = result % temp;
        document.getElementById('dis').value = result;
        temp = 0;
    }
}

function res() {
    if (optp == '+') {
        add(document.getElementById('dis').value);
    }
    if (optp == '-') {
        sub(document.getElementById('dis').value);
    }
    if (optp == '*') {
        mul(document.getElementById('dis').value);
    }
    if (optp == '/') {
        div(document.getElementById('dis').value);
    }
    if (optp == '%') {
        mod(document.getElementById('dis').value);
    }

}