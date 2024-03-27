<template>
    <div>
        <h2>Questão 9</h2>

        <p>
            Implemente um algoritmo que possibilita que você adicione os 5 filmes ou seriados
            que você mais gostou de assistir. Esse código deve impedir que registros sejam informados em duplicidade.
        </p>

        <label>Nome do Filme: </label>
        <br>
        <input type="text" name="nome-filme" v-model="novoFilme" placeholder="Informe o nome do filme...">
        <br>
        <label>Genero</label>
        <br>
        <select name="generos" v-model="generoSelecionado">
            <option>Selecione o Genero...</option>
            <option v-for="genero in generos" :value="genero">
                {{ genero }}
            </option>
        </select>
        <br>
        <label>Situação:</label>
        <div v-for="situacao in situacoes">
            <input type="radio" v-model="situacaoSelecionada" :value="situacao"> {{ situacao }}
        </div>

        <button id="btnAdicionarFilme" @click="adicionarFilme()">Adicionar</button>

        <p :class="corMensagem">
            {{ mensagem }}
        </p>

        <p>Filmes Adicionados: {{ qtdFilmes }}</p>

        <ul>
            <li v-for="filme in filmesFavoritos">

                <p :class="filme.situacao">
                    {{ filme.situacao }}
                </p>
                

                <img v-if="filme.capa" :src="`${BASE_URL}/${filme.capa}`">

                <div v-else class="imagem-nao-localizada">
                    <h3>Imagem não disponível</h3>
                </div>

                <span class="titulo">{{ filme.titulo }} ({{ filme.genero }})</span>
            </li>
        </ul>

    </div>
</template>

<script>

export default {
    data() {
        return {
            BASE_URL: '../../../public/filmes',
            corMensagem: 'sucesso',
            mensagem: null,
            novoFilme: null,
            generoSelecionado: null,
            situacaoSelecionada: "Habilitado",
            qtdFilmes: 0,
            situacoes: [
                "Habilitado",
                "Desabilitado",
                "Cancelado",
                "Arquivado"
            ],
            generos: [
                "terror",
                "comedia",
                "ação"
            ],
            filmesFavoritos: [
                {
                    codigo: 1,
                    titulo: "golpe baixo",
                    capa: "1.jpg",
                    situacao: "Habilitado"
                },
                {
                    codigo: 2,
                    titulo: "voando alto",
                    capa: "2.jpg",
                    situacao: "Cancelado"
                },
                {
                    codigo: 3,
                    titulo: "velozes e furiosos",
                    capa: "3.jpg",
                    situacao: "Habilitado"
                },
                {
                    codigo: 4,
                    titulo: "vingadores",
                    capa: null,
                    situacao: "Arquivado"
                },
            ]
        }
    },
    mounted() {
        this.qtdFilmes = this.filmesFavoritos.length
    },
    methods: {
        adicionarFilme() {
            if (this.validarFormulario()) {
                const filme =
                {
                    codigo: this.filmesFavoritos.length + 1,
                    titulo: this.novoFilme,
                    capa: null,
                    genero: this.generoSelecionado,
                    situacao: this.situacaoSelecionada
                }

                const encontrado = this.filmesFavoritos.filter(f => f.titulo == this.novoFilme)
                if (encontrado.length == 0) {
                    this.filmesFavoritos.push(filme);
                    this.mensagem = `Filme "${this.novoFilme}" adicionado a lista`;
                } else {
                    this.mensagem = `Filme "${this.novoFilme}" ja existe na sua lista`;
                }
                this.novoFilme = null;

                this.qtdFilmes += 1
            } else {
                this.mensagem = "Nome do filme deve ser informado"
            }
        },
        validarFormulario() {
            if (this.novoFilme == null || this.novoFilme.length == 0) {
                this.corMensagem = 'falha'
                return false
            }

            this.corMensagem = 'sucesso'

            return true
        }
    },
}
</script>

<style scoped>
body {
    font-family: Arial;
}

label {
    font-weight: bold;
}

.imagem-nao-localizada {
    background: #000000;
}

.imagem-nao-localizada h3 {
    color: #ffffff;
    text-align: center;
    line-height: 250px;
    font-size: 14px;
}

.imagem-nao-localizada {
    position: absolute;

}

.imagem-nao-localizada,
ul li img {
    width: 100%;
    height: 100%;
}

ul li {
    list-style: none;
    width: 192px;
    height: 263px;
    margin-bottom: 10px;
    position: relative;
    float: left;
    margin-right: 5px;
}

ul li span.titulo {
    text-transform: uppercase;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #000000;
    color: #ffffff;
    width: 100%;
    text-align: center;
}

.sucesso {
    color: green;
}

.falha {
    color: orange;
}

#btnAdicionarFilme {
    border-radius: 26px;
    width: 100px;
    height: 28px;
    color: #ffffff;
    background: green;
    border: none;
    margin-top: 8px;
    cursor: pointer;
}

.Habilitado,
.Cancelado,
.Arquivado {
    color: #ffffff;
    position: absolute;
    right: 5px;
    z-index: 2;
    text-transform: uppercase;
    font-size: 9px;
    padding: 3px;
    border-radius: 10px;
    letter-spacing: 2px;
}

.Habilitado {
    background: green;
}
.Cancelado {
    background: red;
}
.Arquivado {
    background: rgb(99, 98, 98);
}

</style>