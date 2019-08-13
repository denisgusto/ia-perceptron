function treinamento(){
        //Entrada de dados (X)
        var x1 = document.getElementById("x1").value;
        var x2 = document.getElementById("x2").value;
        var x3 = document.getElementById("x3").value;
        var x4 = document.getElementById("x4").value;
        
        // Peso neurônio (W)
        var w1 = document.getElementById("w1").value;
        var w2 = document.getElementById("w2").value;
        var w3 = document.getElementById("w3").value;
        var w4 = document.getElementById("w4").value;

        // Variáveis
        var d = document.getElementById("d").value;
        var y = document.getElementById("y").value;
        var n = document.getElementById("n").value;
        var u = 1;

        // Resultado dos dados
        var qtd = document.getElementById("qtd");
        var wt1 = document.getElementById("wt1");
        var wt2 = document.getElementById("wt2");
        var wt3 = document.getElementById("wt3");
        var wt4 = document.getElementById("wt4");
        
        qtd.value = 0;

        while(true){
            u = u*1;
            u = ((x1*w1)+(x2*w2)+(x3*w3)+(x4*w4));

            if(u > 0){
                var ntemp = n*(d-y);

                var x1temp = ntemp*x1;
                var x2temp = ntemp*x2;
                var x3temp = ntemp*x3;
                var x4temp = ntemp*x4;

                w1 = (x1temp*1) + (w1*1);
                w2 = (x2temp*1) + (w2*1);
                w3 = (x3temp*1) + (w3*1);
                w4 = (x4temp*1) + (w4*1);

                wt1.value = parseFloat(w1).toFixed(2);
                wt2.value = parseFloat(w2).toFixed(2);
                wt3.value = parseFloat(w3).toFixed(2);
                wt4.value = parseFloat(w4).toFixed(2);

                qtd.value = (qtd.value*1) + 1;

                console.log(u);
            }else{
                if(qtd.value == 0){
                    wt1.value = 0;
                    wt2.value = 0;
                    wt3.value = 0;
                    wt4.value = 0;
                    
                    console.log('PAROU!');
                    console.log(u);
                    break;
                }
                console.log('PAROU!');
                console.log(u);
                break;
            }
        } 
}

