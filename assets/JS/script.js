var carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'1000kg',
    motor: false, // Carro ligado ou desligado
    freiodm: true, // Freio de mão do carro
    portamalas: false, // Porta malas do carro
    marchare: false, // Carro andando de ré
    movimento: false,
    ligar:function(){
        this.motor = true;
        clearImage();
        console.clear();
        if (this.motor == true) {
            document.querySelector('.ligado').style.display = "block";
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" e com peso de "+this.peso+" está ligado e pronto para acelerar!" );
        } else {
            document.querySelector('.ligado').style.display = "none";
            document.querySelector('.desligado').style.display = "block";
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" e com peso de "+this.peso+" está desligado e pronto para ser ligado novamente!" );
        }

    },

    desligar:function() {
        clearImage();
        console.clear();
        if (this.motor == true){
            this.motor = false;
            this.movimento = false;
            this.freiodm = true;
            document.querySelector('.desligado').style.display = "block";
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" e com peso de "+this.peso+" está desligado e pronto para ser ligado novamente!" );
        }

    },

    freiodemao:function(){
        if (this.freiodm == true){
            this.freiodm = false;
            this.movimento = true;
            console.clear();
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" está com o freio de mão solto!" );
        } else {
            this.freiodm = true;
            this.movimento = false;
            console.clear();
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" está com o freio de mão preso!" );
        }
    },
    
    acelerar:function(){
        this.portamalas = false;
        clearImage();
        console.clear();
        if (this.motor == true && this.freiodm == false) {
            this.movimento = true;
            document.querySelector('.acelerado').style.display = "block";
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" está acelerando!!! " );
        }
    },

    freiar:function(){
        clearImage();
        console.clear();
        if (this.motor == true && this.movimento == true) {
            this.movimento = false;
            document.querySelector('.freiado').style.display = "block";
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" está freiando!");
        }
    },

    andardere:function() {
        clearImage();
        if (this.motor == true && this.freiodm == false && this.marchare == false) {
            this.marchare = true;
            this.movimento = true;
            document.querySelector('.estadodere').style.display = "block";
            console.clear();
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" está na marcha ré!");
        } else {
            console.clear();
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" voltou para marcha normal!");
        }
        if (this.motor == false && this.freiodm == true || this.freiodm == true) {
            console.clear();
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" não consegue andar de ré!");
        }
    },

    portamalasaction:function(){
        clearImage();
        if (this.movimento == false && this.portamalas == false) {
            this.portamalas = true;
            document.querySelector('.portamalas').style.display = "block";
            console.clear();
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" está com o porta malas aberto!");
        } else {
            clearImage();
            this.portamalas = false;
            console.clear();
            console.log("O carro "+this.nome+" com o modelo "+this.modelo+" está com o porta malas fechado!");
        }
    }


};

function clearImage() {
    document.querySelector('.ligado').style.display = "none";
    document.querySelector('.desligado').style.display = "none";
    document.querySelector('.acelerado').style.display = "none";
    document.querySelector('.freiado').style.display = "none";
    document.querySelector('.estadodere').style.display = "none";
    document.querySelector('.portamalas').style.display = "none";
}