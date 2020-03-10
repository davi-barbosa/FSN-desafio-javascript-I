// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

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

adicionarAluno('Douglas')

//Função listar alunos
const listarAlunos = ()=>{
    let alunosCadastrados = [];
    let alunosMatriculados = [];
    alunosDaEscola.forEach((alunos,indice)=>{
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

listarAlunos();

const buscarAluno = (alunoBuscado)=>{
    let encontrou = 0;

    alunosDaEscola.forEach((aluno, indice)=>{
        if(alunosDaEscola[indice].nome.indexOf(alunoBuscado)>=0){
            console.log('Aluno encontrado!!')
            encontrou = 1;
        }
    })

    if(encontrou == 0){console.log('Aluno não cadastrado!!')}
}

buscarAluno('Henrique')
