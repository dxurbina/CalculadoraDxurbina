document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // document ready
      var teclas = document.getElementsByTagName("img");
      

        var pantalla = document.getElementById("display");
        var on = document.getElementById("on");

        var uno = document.getElementById("1");
        var dos = document.getElementById("2");
        var tres = document.getElementById("3");
        var cuatro = document.getElementById("4");
        var cinco = document.getElementById("5");
        var seis = document.getElementById("6");
        var siete = document.getElementById("7");
        var ocho = document.getElementById("8");
        var nueve = document.getElementById("9");
        var cero = document.getElementById("0");
        var punto = document.getElementById("punto");

        var mas = document.getElementById("mas");
        var menos = document.getElementById("menos");
        var dividido = document.getElementById("dividido");
        var por = document.getElementById("por");

        var operac = document.getElementById("operac");
        var igual = document.getElementById("igual");

        var sign = document.getElementById("sign");

        on.addEventListener("click", function(){           
            Calculadora.on();
        })

        uno.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.uno();   
        })
        dos.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.dos();   
        })
        tres.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.tres();   
        })
        cuatro.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.cuatro();   
        })
        cinco.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.cinco();   
        })
        seis.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.seis();   
        })
        siete.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.siete();   
        })
        ocho.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.ocho();   
        })
        nueve.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.nueve();   
        })
        cero.addEventListener("click", function(){
            if (pantalla.innerHTML.replace("-","").replace(".","").length == 8) return;
            Calculadora.cero();
        })

        punto.addEventListener("click", function() {
            if (pantalla.innerHTML.replace("-","").length == 8) return;
            Calculadora.punto();
        })

        mas.addEventListener("click", function() {
            if (Calculadora.total != 0) return;
            operac.innerHTML = Calculadora.sumar();
        })

        menos.addEventListener("click", function() {
            if (Calculadora.total != 0) return;
            operac.innerHTML = Calculadora.menos();
        })
        dividido.addEventListener("click", function() {
            if (Calculadora.total != 0) return;
            operac.innerHTML =  Calculadora.dividido();
        })
        por.addEventListener("click", function() {
            if (Calculadora.total != 0) return;
            operac.innerHTML = Calculadora.por();
        })
        igual.addEventListener("click", function() {
           pantalla.innerHTML =  Calculadora.igual();
           operac.innerHTML = "=";
        })
        
        sign.addEventListener("click", function() {
            if (Calculadora.total != 0) return;
            
            Calculadora.sign();
        })

      var Calculadora = {
        num1: 0,
        num2: 0,
        total: 0,
        operacion: 0,
        on: function(){
            this.num1 = 0;
            this.num2 = 0;
            this.total = 0;
            this.operacion = 0;
            pantalla.innerHTML = "0";
            operac.innerHTML = "";
        },
        uno: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "1";
            } else {
              pantalla.innerText += "1";
            }    
        },
        dos: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "2";
            } else {
              pantalla.innerText += "2";
            }  
        },
        tres: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "3";
            } else {
              pantalla.innerText += "3";
            }  
        },
        cuatro: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "4";
            } else {
              pantalla.innerText += "4";
            }  
        },
        cinco: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "5";
            } else {
              pantalla.innerText += "5";
            }  
        },
        seis: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "6";
            } else {
              pantalla.innerText += "6";
            }  
        },
        siete: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "7";
            } else {
              pantalla.innerText += "7";
            }  
        },
        ocho: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "8";
            } else {
              pantalla.innerText += "8";
            }  
        },
        nueve: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "9";
            } else {
              pantalla.innerText += "9";
            }  
        },
        cero: function(){
          if (pantalla.innerHTML == '0'){
              pantalla.innerText = "0";
            } else {
              pantalla.innerText += "0";
            }  
        },
        punto: function(){
            if (pantalla.innerHTML == "0"){
                pantalla.innerHTML = "0.";
            }
            else if (pantalla.innerHTML.indexOf('.') == -1){
                pantalla.innerHTML += ".";
            }
            
        },
        sumar: function(){
            if (this.total != 0) return "+";
            this.operacion = 1
            if (this.num1 == 0){
                this.num1 = parseFloat(pantalla.innerHTML);
                pantalla.innerHTML = '0';
            } else {               
                this.num2 = parseFloat(pantalla.innerHTML);
            }
            return "+";

        },
        menos: function(){
            if (this.total != 0) return "-";
            this.operacion = 2
            if (this.num1 == 0){
                this.num1 = parseFloat(pantalla.innerHTML);
                pantalla.innerHTML = '0';
            } else {               
                this.num2 = parseFloat(pantalla.innerHTML);
            }
            return "-";
        },
        por: function(){
            if (this.total != 0) return "x";
            this.operacion = 4
            if (this.num1 == 0){
                this.num1 = parseFloat(pantalla.innerHTML);
                pantalla.innerHTML = '0';
            } else {               
                this.num2 = parseFloat(pantalla.innerHTML);
            }
            return "x";
        },
        dividido: function(){
            if (this.total != 0) return "÷";
            this.operacion = 3
            if (this.num1 == 0){
                this.num1 = parseFloat(pantalla.innerHTML);
                pantalla.innerHTML = '0';
            } else {               
                this.num2 = parseFloat(pantalla.innerHTML);
            }
            return "÷";
        },
        igual: function(){  
            if (this.total == 0){
                this.num2 = parseFloat(pantalla.innerHTML);
                switch(this.operacion) {
                    case 1: // Suma
                        this.total = this.num1 + this.num2;
                        break;
                    case 2: // Resta
                        this.total = this.num1 - this.num2;
                        break;
                    case 3: // Dividir
                        this.total = this.num1 / this.num2;
                        break;
                    case 4: // Multiplicar
                        this.total = this.num1 * this.num2;
                        break;
                    default: 
                        alert('Seleccione una operacion');
                        break;
                }

                return this.total;
            }else {
                return this.total;
               
            }            
        },
        sign: function(){
            if (pantalla.innerHTML.indexOf("-") == -1){
                if (pantalla.innerHTML == "0") return;
                
                pantalla.innerHTML = parseFloat(pantalla.innerHTML) * -1;
            } else{
                pantalla.innerHTML = Math.abs(parseFloat(pantalla.innerHTML));
            }
        }
    }

    }
  };

  