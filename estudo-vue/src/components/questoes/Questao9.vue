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
                    capa: "1.jpg"
                },
                {
                    codigo: 2,
                    titulo: "voando alto",
                    capa: "2.jpg"
                },
                {
                    codigo: 3,
                    titulo: "velozes e furiosos",
                    capa: "3.jpg"
                },
                {
                    codigo: 4,
                    titulo: "vingadores",
                    capa: null
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
                    genero: this.generoSelecionado
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

<style>
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
    line-height: 300px;
    font-size: 14px;
}

.imagem-nao-localizada,
ul li img {
    width: 25%;
    height: 25%;
}

ul li {
    list-style: none;
}

ul li span.titulo {
    text-transform: uppercase;
    font-weight: bold;
}

.sucesso {
    color: green;
}

.falha {
    color: orange;
}

#btnAdicionarFilme {
    background: green;
    color: #ffffff;
    border: none;
    width: 100px;
    height: 28px;
    margin-top: 8px;
    border-radius: 26px;
    cursor: pointer;
}

</style>