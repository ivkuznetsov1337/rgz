function scrolltotop() {
    window.scrollTo(0,0);
}
function stdeviation() {
    let table = document.getElementById('financetable');
    data = [];
    for (let i = 1; i < table.rows.length; i++) {
        data.push(parseFloat(table.rows[i].cells[1].innerHTML));
    }
    let res=document.getElementById('result');
    let n = data.length;
    let avg = data.reduce((a, b) => a + b) / n;
    let a = data.map((x) => Math.pow(x - avg, 2));
    let b = a.reduce((a, b) => a + b) / n;
    let result = Math.sqrt(b);
    res.innerHTML='Отклонение = '+result;
}
function minprice() {
    let res=document.getElementById('result');
    let table = document.getElementById('financetable');
    data = [];
    for (let i = 1; i < table.rows.length; i++) {
        data.push(parseFloat(table.rows[i].cells[1].innerHTML));
    }
    result=Math.min.apply(null, data);
    res.innerHTML='Минимальное число = '+result;
}
function maxprice() {
    let res=document.getElementById('result');
    let table = document.getElementById('financetable');
    data = [];
    for (let i = 1; i < table.rows.length; i++) {
        data.push(parseFloat(table.rows[i].cells[1].innerHTML));
    }
    result=Math.max.apply(null, data);
    res.innerHTML='Максимальное число = '+result;
}
