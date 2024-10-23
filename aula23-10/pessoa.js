// // como iniciar


// class Pessoa{
//     nome;
//     rg;
//     cpf;
//     idade;
//     sexo;
//     nacionalidade;
//     estadoCivil;
//     constructor(nome, rg, cpf, idade, sexo, nacionalidade, estadoCivil){
//         this.nome = nome;
//         this.rg = rg;
//         this.cpf = cpf;
//         this.idade = idade;
//         this.sexo = sexo;
//         this.nacionalidade = nacionalidade;
//         this.estadoCivil = estadoCivil; 
//     }
//     //metodos para acessar os atributos
//     getNome(){
//         return this.nome;
//     }
//     getRg(){
//         return this.rg;
//     }
//     getcpf(){
//         return this.cpf;
//     }
//     getidade(){
//         return this.idade;
//     }
//     getsexo(){
//         return this.sexo;
//     }
//     getnacionalidade(){
//         return this.nacionalidade;
//     }
//     getestadoCivil(){
//         return this.estadoCivil;
//     }
//     setNome(nome){
//         this.nome = nome;
//     }
//     exibirDados (){
//         console.log(
//         `   
//             Dados Pessoais : \n
//             NOME: ${this.nome};
//             RG: ${this.rg};
//             CPF: ${this.cpf};
//             IDADE: ${this.idade};
//             SEXO: ${this.sexo};
//             NACIONALIDADE: ${this.nacionalidade};
//             ESTADO CIVIL:  ${this.estadoCivil}; 
//         `
//         )
//     }
// }

// let pessoa01 = new Pessoa("Joel", 12346, 123456789, 18, "M", "brasileira", "casaso");
// console.log(pessoa01.getNome());
// pessoa01.setNome("Joelma");
// console.log(pessoa01.getRg());
// console.log(pessoa01.getcpf());
// console.log(pessoa01.getidade());
// console.log(pessoa01);
// pessoa01.exibirDados();


///EXERCICIO

// como iniciar


class jogo{
    titulo;
    genero;
    anoLancamento;
   
    constructor(titulo, genero, anoLancamento){
        this.titulo = titulo;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
        
    }
    //metodos para acessar os atributos
    gettitulo(){
        return this.titulo;
    }
    getgeneto(){
        return this.genero;
    }
    getanoLancamento(){
        return this.anoLancamento;
    }   
    settitulo(titulo){
        this.titulo = titulo;

    }
    setgenero(genero){
        this.genero = genero;

    }
    setanoLancamento(anoLancamento){
        this.anoLancamento = anoLancamento;

    }
    exibirDados (){
        console.log(
        `   
            Dados Pessoais : \n
            TITULO: ${this.titulo};
            GENERO: ${this.genero};
            ANO DE LANCAMENTO: ${this.anoLancamento};
           
        `
        )
    }
}

let jogo01  = new jogo("BURACO", "DIVERSÃO", "01/01/1950");
let jogo02  = new jogo("POKER", "LAZER", "01/01/1800");
let jogo03  = new jogo("PIFPAF", "RELIGIOSO", "01/01/2000");

jogo01.exibirDados();
jogo02.exibirDados();
jogo03.exibirDados();





///EXERCICIO


