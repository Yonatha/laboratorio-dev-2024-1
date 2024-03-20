<template>
    <div>
        <h2>Questão 3</h2>

        <ul class="erros">
            <li v-for="erro in erros">
                {{ erro }}
            </li>
        </ul>

        <label for="">Cliente</label><br>
        <input v-model="nome" />
        <br>
        <br>
        <label>Produto</label><br>
        <input v-model="descricao" />
        <br>
        <br>
        <label>Quantidade</label> <br>
        <input v-model="quantidade" />
        <br>
        <br>
        <label>Valor R$</label> <br>
        <input v-model="valor" />
        <br>
        <br>
        <button @click="adicioanrConta()">Adicionar</button>
        <button @click="limparFormulario()">Limpar</button>
        <br>
        <ul>
            <li v-for="(conta, index) in contas">
                ID {{ index }}
                {{ conta.descricao }}
                Qtd {{ conta.quantidade }}
                R$ {{ conta.valor }}
                R$ {{ conta.totalParcial }}
                <a href="#" @click="removerProduto(index)">Remover</a>
            </li>
        </ul>

        <h4>TOTAL R$ {{ total }}</h4>
    </div>
</template>


<script>

export default {
    data() {
        return {
            mensagem: "",
            formularioValido: true,
            erros: [],
            nome: "",
            saldoBancario: 100,
            contas: [],
            totalgasto: 0,
            saldoFinal: 0,
            descricao: "",
            quantidade: 1,
            valor: null,
            total: 0.00
        }
    },
    methods: {
        adicioanrConta() {
            if (this.validarFormulario()) {
                let totalParcial = this.quantidade * this.valor;
                const conta = {
                    descricao: this.descricao,
                    valor: this.valor,
                    quantidade: this.quantidade,
                    totalParcial
                };
                this.contas.push(conta);
                this.limparCamposDeConta();
                this.calcularTotal()
            }
        },
        validarFormulario() {
            this.erros = []; 
            if (this.nome.length == 0) {
                this.erros.push('O nome do cliente deve ser informado')
                this.formularioValido = false;
            }

            if (this.descricao.length == 0) {
                this.erros.push('O produto não foi informado')
                this.formularioValido = false;
            }

            return this.formularioValido;
        },
        limparCamposDeConta() {
            this.descricao = null;
            this.valor = null;
            this.quantidade = 1;
        },
        exibirMensagem() {
            if (this.totalgasto <= this.saldoBancario) {
                this.mensagem = `conseguiu pagar a conta na lanchonete`;
            } else {
                this.mensagem`saldo insuficiente, falta R$ ${saldoFinal},00 para pagar a conta`;
            }
        },
        limparFormulario() {
            this.nome = null;
            this.contas = [];
            limparCamposDeConta();
        },
        calcularTotal() {
            this.total = this.contas.map(conta => conta.totalParcial).reduce((a, c) => a + c, 0);
        },
        removerProduto(id) {
            this.contas.splice(id, 1)
            this.calcularTotal()
        }
    },
}
</script>

<style>
.erros {
    color: red;
}
</style>