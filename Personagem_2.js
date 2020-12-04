"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criação de Classe
var Personagem_2 = /** @class */ (function () {
    // Criação de Atributos
    function Personagem_2(_nome, energia, vida, ataque, defesa, soco, chute, agilidade, especial) {
        this._nome = _nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.soco = soco;
        this.chute = chute;
        this.agilidade = agilidade;
        this.especial = especial;
    }
    Object.defineProperty(Personagem_2.prototype, "nome", {
        // TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
        // TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Personagem_2.prototype.status = function () {
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
            "\n");
    };
    Personagem_2.prototype.treinarAtacar = function () {
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem_2.prototype.treinarDefesa = function () {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem_2.prototype.treinarSoco = function () {
        this.soco += this.randomizar(6);
        this.energia -= this.randomizar(9);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem_2.prototype.treinarChute = function () {
        this.chute += this.randomizar(12);
        this.energia -= this.randomizar(15);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem_2.prototype.treinarAgilidade = function () {
        this.agilidade += this.randomizar(10);
        this.energia -= this.randomizar(15);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem_2.prototype.treinarEspecial = function () {
        this.especial += this.randomizar(20);
        this.energia -= this.randomizar(30);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem_2.prototype.Descansar = function (tempo) {
        this.energia += tempo * this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    };
    Personagem_2.prototype.Batalhar = function () {
        var desgaste = this.randomizar(100);
        this.energia -= desgaste;
        return desgaste;
    };
    Personagem_2.prototype.isDead = function () {
        return this.energia < 0;
    };
    Personagem_2.prototype.randomizar = function (fator) {
        return Math.random() * fator;
    };
    return Personagem_2;
}());
exports.default = Personagem_2;
