import Personagem from "./Personagem";
import Personagem_2 from "./Personagem_2";
import prompt from "prompt-sync";

let person: Personagem = new Personagem("Sansa Stark", 100, 40, 20, 30);
let jack: Personagem_2 = new Personagem_2("Jack Muller", 100, 40, 20, 30, 10, 10, 5, 0);

let teclado = prompt();
let option: number = 0;

while (option != 9 || person.isDead() || jack.isDead()) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Treinar Soco                   |");
    console.log("|4. Treinar Chute                  |");
    console.log("|5. Treinar Agilidade              |");
    console.log("|6. Treinar Especial               |");
    console.log("|7. Descansar                      |");
    console.log("|8. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            person.treinarAtacar();
            console.log(person.status());

            jack.treinarAtacar();
            console.log(jack.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());

            jack.treinarDefesa();
            console.log(jack.status());
            break;
        case 3:
            jack.treinarSoco();
            console.log(jack.status());
            break;
        case 4:
            jack.treinarChute();
            console.log(jack.status());
            break;
        case 5:
            jack.treinarAgilidade();
            console.log(jack.status());
            break;
        case 6:
            jack.treinarEspecial();
            console.log(jack.status());
            break;
        case 7:
            let horas: number = +teclado("Digite o número de horas: ");
            person.Descansar(horas);
            console.log(person.status());

            jack.Descansar(horas);
            console.log(jack.status());
            break;
        case 8:
            console.log(jack.status());
            console.log(person.status());
            break;
        default:
            break;
    }
}
console.log("Ops! Você morreu!");
