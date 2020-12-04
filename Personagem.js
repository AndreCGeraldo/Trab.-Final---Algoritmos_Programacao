"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = /** @class */ (function () {
    function Personagem(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    Personagem.prototype.status = function () {
        return ("Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1)));
    };
    Personagem.prototype.treinarAtacar = function () {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.treinarDefesa = function () {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.Descansar = function (tempo) {
        this.energia += tempo * (Math.random() * 10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    };
    Personagem.prototype.Batalhar = function () {
        var desgaste = Math.random() * 100;
        this.energia -= desgaste;
        return desgaste;
    };
    Personagem.prototype.isDead = function () {
        return this.energia < 0;
    };
    return Personagem;
}());
exports.default = Personagem;
