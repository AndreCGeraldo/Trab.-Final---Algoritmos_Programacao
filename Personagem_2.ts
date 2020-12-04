// Criação de Classe
export default class Personagem_2 {
    // Criação de Atributos
    constructor(
        private _nome: string,
        private energia: number,
        private vida: number,
        private ataque: number,
        private defesa: number,
        private soco: number,
        private chute: number,
        private agilidade: number,
        private especial: number,
    ) { }

    // TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
    // TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO

    public get nome(): string {
        return this._nome;
    }
    

    public status(): string {
        return ("\n" +
            "Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1)) +
            ("\nSoco: " + this.soco.toFixed(1)) +
            ("\nChute: " + this.chute.toFixed(1)) +
            ("\nAgilidade: " + this.agilidade.toFixed(1)) +
            ("\nEspecial: " + this.especial.toFixed(1)) +
            "\n"
        );

    }
    public treinarAtacar(): void {
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public treinarDefesa(): void {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public treinarSoco(): void {
        this.soco += this.randomizar(6);
        this.energia -= this.randomizar(9);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public treinarChute(): void {
        this.chute += this.randomizar(12);
        this.energia -= this.randomizar(15);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public treinarAgilidade(): void {
        this.agilidade += this.randomizar(10);
        this.energia -= this.randomizar(15);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public treinarEspecial(): void {
        this.especial += this.randomizar(20);
        this.energia -= this.randomizar(30);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }

    public Descansar(tempo: number): void {
        this.energia += tempo * this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    }
    public Batalhar(): number {
        let desgaste: number = this.randomizar(100);
        this.energia -= desgaste;
        return desgaste;
    }
    public isDead(): boolean {
        return this.energia < 0;
    }
    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}