function show(){
    const a = document.getElementById('textfield').value;
    document.getElementById('textfield2').value = conversion(a);
}
function show2(){
    const a = document.getElementById('textfield3').value;
    document.getElementById('textfield4').value = conversion2(a);
}
function show3(){
    const a = document.getElementById('textfield5').value;
    document.getElementById('textfield6').value = conversion3(a);
}

function conversion(a){
    var select = document.getElementById('selection');
	var value = select.options[select.selectedIndex].value;

    var select2 = document.getElementById('selection2');
	var value2 = select2.options[select2.selectedIndex].value;

    if(value == 'kg' && value2 == 'g' || value == 'kg' && value2 == 'ml' || value == 'l' && value2 == 'g' || value == 'l' && value2 == 'ml'){
        a = Number.parseInt(a);
        return a*1000;
    }
    else if(value == 'g' && value2 == 'kg' || value == 'ml' && value2 == 'kg' || value == 'g' && value2 == 'l' || value == 'ml' && value2 == 'l'){
        a = Number.parseInt(a);
        return a/1000;
    }
    else{
        return a;
    }
}
function conversion2(a){
    var select = document.getElementById('selection3');
	var value = select.options[select.selectedIndex].value;

    var select2 = document.getElementById('selection4');
	var value2 = select2.options[select2.selectedIndex].value;
    
    if(value == 'km' && value2 == 'm'){a = Number.parseInt(a); return a*1000;}
    else if(value == 'km' && value2 == 'cm'){a = Number.parseInt(a); return a*100000;}
    else if(value == 'km' && value2 == 'mm'){a = Number.parseInt(a); return a*1000000;}
    else if(value == 'm' && value2 == 'km'){a = Number.parseInt(a); return a/1000;}
    else if(value == 'm' && value2 == 'cm'){a = Number.parseInt(a); return a*100;}
    else if(value == 'm' && value2 == 'mm'){a = Number.parseInt(a); return a*1000;}
    else if(value == 'cm' && value2 == 'km'){a = Number.parseInt(a); return a/100000;}
    else if(value == 'cm' && value2 == 'm'){a = Number.parseInt(a); return a/100;}
    else if(value == 'cm' && value2 == 'mm'){a = Number.parseInt(a); return a*10;}
    else if(value == 'mm' && value2 == 'km'){a = Number.parseInt(a); return a/1000000;}
    else if(value == 'mm' && value2 == 'm'){a = Number.parseInt(a); return a/1000;}
    else if(value == 'mm' && value2 == 'cm'){a = Number.parseInt(a); return a/10;}
    else{return a;}
}

function conversion3(a){
    var select = document.getElementById('selection5');
	var value = select.options[select.selectedIndex].value;

    var select2 = document.getElementById('selection6');
	var value2 = select2.options[select2.selectedIndex].value;

    if(value == 'ce' && value2 == 'fa'){Number.parseInt(a); return (a*9/5) + 32;}
    else if(value == 'ce' && value2 == 'ke'){a = Number.parseFloat(a); return a + 273.15;}
    else if(value == 'fa' && value2 == 'ce'){a = Number.parseFloat(a); return ((a - 32) * 5/9).toFixed(2);}
    else if(value == 'fa' && value2 == 'ke'){a = Number.parseFloat(a); return ((a - 32) * 5/9 + 273.15).toFixed(2);}
    else if(value == 'ke' && value2 == 'ce'){a = Number.parseFloat(a); return a - 273.15;}
    else if(value == 'ke' && value2 == 'fa'){a = Number.parseFloat(a); return ((a - 273.15) * 9/5 + 32).toFixed(2);}
    else{return a;}
}