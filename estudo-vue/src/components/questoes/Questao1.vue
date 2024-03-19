<template>
    <div>
        <h1>Questão1</h1>

        <h3 v-if="exibir_mensagem">
            {{ aluno }}, você foi <span :class="corResultado">{{ resultado }}</span>
        </h3>

        Aluno:
        <input v-model="aluno" type="text" />
        <br>
        Nota 1:
        <input v-model="nota1" type="text" />
        <br>
        Nota 2:
        <input v-model="nota2" type="text" />
        <br>
        Nota 3:
        <input v-model="nota3" type="text" />
        <br>
        Nota 4:
        <input v-model="nota4" type="text" />
        <br>
        <button @click="carregarResultado()">Calcular média</button>
    </div>
</template>

<script>

/*
TODO: implementar um botão chamado Limpar Resultado, que ao clicar, remover 
todos os campos preenchidos e oculte a mensagem de resultado
*/

export default {
    data() {
        return {
            corResultado: null,
            exibir_mensagem: false,
            aluno: null,
            nota1: null,
            nota2: null,
            nota3: null,
            nota4: null,
            resultado: ""
        }
    },
    methods: {
        carregarResultado() {
            const media = this.calcularMedia()
            if (media >= 7) {
                this.resultado = "APROVADO";
                this.corResultado = 'corAprovado';
            } else {
                this.resultado = "REPROVADO";
                this.corResultado = 'corReprovado';
            }

            this.exibir_mensagem = true
        },
        calcularMedia() {
            return ((parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3) + parseFloat(this.nota4))/ 4)
        }
    },
}
</script>

<style>

.corAprovado {
    color: green;
}

.corReprovado {
    color: red;
} 
</style>