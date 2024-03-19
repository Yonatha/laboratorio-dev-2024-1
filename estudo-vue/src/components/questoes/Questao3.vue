<template>
    <div>
        <h2>Questão 3</h2>

        <label for="">Cliente</label><br>
        <input v-model="nome" />
        <br>
        <label>Descrição Conta</label><br>
        <input v-model="descricao" />
        <label>Valor R$</label> <input v-model="valor" />
        <br>
        <button @click="adicioanrConta()">Adicionar</button>
        <button @click="limparFormulario()">Limpar</button>
        <br>
        <ul>
            <li v-for="conta in contas">
                {{ conta.descricao }} R$ {{ conta.valor }}
            </li>
        </ul>

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
            valor: null
        }
    },
    methods: {
        adicioanrConta() {
            const conta = { descricao: this.descricao, valor: this.valor };
            this.contas.push(conta);
            this.limparCamposDeConta();
        },
        limparCamposDeConta() {
            this.descricao = null;
            this.valor = null;
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
            this.contas = []
            limparCamposDeConta();
        }
    },
}
</script>