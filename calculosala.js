//Calculo para media de alunos //

var alunos = [
    [10,10,8,10],
    [8,5,6,8],
    [10,6,8,7],
    [8,8,8,9],
    [10,5,6,8],
]

var nota = 0;
for (var i = 0; i < alunos.length; i++){
    
    nota = 0
    notasAluno = alunos[i]
    console.log ("Aluno: " + parseInt(i+1));
    console.log ("Notas: " + notasAluno);

    for( c = 0; c < notasAluno.length; c++){
        nota += notasAluno[c];
    }
    
    media = nota /4;

    if(media >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    console.log("Media: " + media + " - " + resultado);
    }