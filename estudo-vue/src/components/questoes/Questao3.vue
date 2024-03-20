<template>
    <div>
        <h2>Questão 3</h2>

        <label for="">Cliente</label><br>
        <input v-model="nome" />
        <br>
        <br>
        <label>Descrição Conta</label><br>
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
            <li v-for="conta in contas">
                {{ conta.descricao }} Qtd {{ conta.quantidade }} R$ {{ conta.valor }} R$ {{ conta.totalParcial }}
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
        },
        limparCamposDeConta() {
            this.descricao = null;
            this.valor = null;
            this.quantidade = 1;
        },
        somarGastos(listaDeContas) {
            let total = 0;
            for (let index = 0; index < listaDeContas.length; index++) {
                const conta = listaDeContas[index];
                total += conta;
            }
            return total;
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
        }
    },
}
</script>