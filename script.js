function hello() {
    //console.log("hello word!");
    //console.log("alterei a função");
};

let helloAnonimo = function() {
    //console.log("dentro da função anonima");
};

let funcao = helloAnonimo;

let exibirmensagem = function() {
    let mensagem = "uma maçã";
    //console.log(mensagem);
};

exibirmensagem();
//console.log(mensagem);

let mensagem2 = "um pão de queijo";

let exibirmensagem2 = function() {
    mensagem2 = "mudei";
   // console.log(mensagem2);
};

exibirmensagem2();
//console.log(mensagem2);

let msg = "apresente essa mensagem para mim";

let mostrar = function(msg, gritar = false) {
    if (gritar) {
    let msgObj = String(msg);
    console.log(msgObj.toLocaleUpperCase());
}
else {
    console.log(msg);
}
};

let soma = function(x, y) {
    return x + y;
};

let mostrar02 = function() {
    let msg01 = "olá";
    console.log(msg01);

    return;

    let msg02 = "pessoas";
    console.log(msg02);
}

let ePar = function(num) {
    if (num % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}

let soma2 = (x, y) => x + y;

let numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach(n => console.log(n));

let continhas = {
    x: 0, 
    y: 0,
    soma2,
    ePar
};

/*let segundoModulo = [
    { nome: "ALEX JESUS" },
    { nome: "ANA CABRAL" },
    { nome: "ANDREY OLIVEIRA" },
    { nome: "ARTHUR FERREIRA" },
    { nome: "CAMILI COSTA" },
    { nome: "CAMILLI CHIZZOLINI" },
    { nome: "CAUA LARA" },
    { nome: "EDUARDO GUEDES" },
    { nome: "EDUARDO SILVA" },
    { nome: "ENZO RODRIGUES" },
    { nome: "ESTHER SILVA" },
    { nome: "EVERTON ALVES" },
    { nome: "FELIPE MARTINS" },
    { nome: "FERNANDA AMERICO" },
    { nome: "GABRIEL DUARTE" },
    { nome: "GABRIEL GREGHI" },
    { nome: "GICELLY GOMES" },
    { nome: "GUSTAVO BARBOSA" },
    { nome: "ISABELLA SANTOS" },
    { nome: "JENIFER GOMES" },
    { nome: "KAUAN IZAR" },
    { nome: "LAURA COSCARELLI" },
    { nome: "MARIA AMARAL" },
    { nome: "MELISSA PORTELA" },
    { nome: "NICOLE OSORIO" },
    { nome: "PEDRO JACINTO" },
    { nome: "RENATO SOUZA" },
    { nome: "RICARDO SANTOS" },
    { nome: "STEFESON ALMEIDA" },
    { nome: "VICTOR REFUNDINI" },
    { nome: "VITORIA ROSSI" },
    { nome: "WILLIAM NOGUEIRA" },
  ];

  let alex = segundoModulo.find(aluno => aluno.nome === "alex jesus");*/