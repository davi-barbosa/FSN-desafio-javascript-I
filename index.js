const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação

//Função adicionarAluno

const adicionarAluno = (alunoMatriculado)=>{
    alunosDaEscola.push({
        nome:alunoMatriculado,
        notas:[],
        cursos:[],
        faltas:0
    });
    console.log(`Aluno(a) ${alunoMatriculado} cadastrado com sucesso!`);
}

//Função listar alunos
const listarAlunos = ()=>{
    let alunosCadastrados = [];
    let alunosMatriculados = [];
    alunosDaEscola.forEach((alunos, indice)=>{
        if(alunosDaEscola[indice].cursos[0]==undefined){
            alunosCadastrados.push(alunosDaEscola[indice])
        } else{
            alunosMatriculados.push(alunosDaEscola[indice])
        }
    })

    console.log('-----Alunos Cadastrados-----')
    alunosCadastrados.forEach((aluno,indice)=>{console.log('Nome: '+ alunosCadastrados[indice].nome)})
    
    console.log('\n-----Alunos matriculados-----')
    alunosMatriculados.forEach((aluno,indice)=>{console.log(`Nome: ${alunosMatriculados[indice].nome} 
Curso: ${alunosMatriculados[indice].cursos[0].nomeDoCurso}\n`)})
}

const buscarAluno = (alunoBuscado)=>{
    let encontrou = 0;

    alunosDaEscola.forEach((aluno, indice)=>{
        if(alunosDaEscola[indice].nome.indexOf(alunoBuscado)>=0){
            console.log('Aluno encontrado!!')
            encontrou = 1;
        }
    })

    if(encontrou == 0){console.log('Aluno não encontrado!!')}
}

const matricularAluno = (aluno, curso)=>{
    let encontrou = 0;

    alunosDaEscola.filter(function(alunos, indice){
        if (aluno == alunosDaEscola[indice].nome){
            if(alunosDaEscola[indice].cursos == 0){
                alunosDaEscola[indice].cursos = [{nomeDoCurso: curso,dataMatricula: new Date}]
                console.log(`Aluno ${aluno} matriculado com sucesso no curso de ${curso}!`)  
                encontrou = 1;
            } else if(alunosDaEscola[indice].cursos != 0){
                console.log(`Aluno ${aluno} já está matriculado no curso de ${curso}!`)
                encontrou = 1;
            } 
        } 
    })
    if(encontrou == 0){
        console.log(`Aluno ${aluno} não cadastrado em sistema`);
    }
}

const aplicarFalta = (aluno)=>{
    let encontrou = 0
    alunosDaEscola.forEach((alunos, indice)=>{
        if(aluno == alunosDaEscola[indice].nome){
            encontrou = 1;
            if(alunosDaEscola[indice].cursos != 0){
                alunosDaEscola[indice].faltas++;

                    console.log(`Falta aplicada!\nAluno: ${alunosDaEscola[indice].nome} - Faltas: ${alunosDaEscola[indice].faltas}`)
            }else{
                console.log(`ERRO - Aluno ${aluno} não está matriculado em nenhum curso!`)
            }
        }
    })
    if(encontrou == 0){
        console.log(`Aluno ${aluno} não cadastrado em sistema`);
    }
}

const aprovarAluno = (aluno)=>{
    let encontrou = 0;
    alunosDaEscola.forEach(alunos =>{
        if(aluno == alunos.nome){
            encontrou = 1;
            if(alunos.cursos != 0){
                let somaNotas = alunos.notas.reduce((nota1, nota2)=>nota1+nota2);
                let mediaNotas = somaNotas/alunos.notas.length; 

                if(mediaNotas >= 7 && alunos.faltas<=3){
                    console.log("Aluno aprovado!\n")
                    console.log(`Nota: ${mediaNotas.toFixed(2)} - Faltas: ${alunos.faltas}`)
                }else{
                    console.log("Aluno reprovado")
                }
            }else{
                console.log("Aluno não está matriculado em nenhum curso!");
            }
        }   
    })

    if(encontrou == 0){
        console.log(`Aluno ${aluno} não cadastrado em sistema`);
    }
}

aprovarAluno("Lucca")