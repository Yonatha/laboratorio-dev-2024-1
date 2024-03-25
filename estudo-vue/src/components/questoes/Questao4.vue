<template>
    <div>
        <h2>Questão 4</h2>
        <label>Nome</label><br>
        <input v-model="nome"><br><br>

        <label>Frutas </label>
        <input v-model="fruta"> 
        
        <label> Quantidade </label>
        <input v-model="und">

        <label> Preço </label>
        <input v-model="preco">

        <br><br>
        <button>Adicionar</button>  <button>Finalizar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: "",
            fruta: "",
            und: "",
            preco: null,
            sacola: [],            
            valorTotal: null,
            resultado: false
        }
    },
    methods: {

    }
}
</script>








