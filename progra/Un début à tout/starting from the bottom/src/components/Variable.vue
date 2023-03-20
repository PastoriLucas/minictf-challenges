<template>
    <div>
      <h2>Les variables</h2>
      <span> Une variable est quelque chose servant à stocker une valeur, parfois modifiable par la suite, à l'aide d'un nom.</span>
      <pre>
        <code> 
            Exemple :
            var monChiffre = 2;
        </code>
      </pre>
      <span>Ceci permet de stocker la valeur 2 dans une variable nommée "monChiffre". Celle-ci peut-être appelée plus tard afin de récupérer la valeur étant dedans</span>
      <pre>
        <code>
            Exemple : 
                monChiffre
            <span class="comments">//renverra</span>
                2
        </code>
      </pre>
      <span> Les variables peuvent aussi est réatribuées pour changer la valeur la contenant</span>
      <pre>
        <code>
          Exemple :
            var monChiffre = 2;
            <span class="comments">// monChiffre vaut 2</span>
            monChiffre = 4;
            <span class="comments">// maintenant il vaut 4</span>
        </code>
      </pre>
    </div>
    <div>
      <h3> Exercice </h3>
      <span>Donnez moi la valeur finale de <code>firstStep</code> : </span>
      <pre>
        <code>
          var firstStep = 20;
          var test = 12;
          const constante = 5;
          constante = test;
          firstStep = firstStep + constante;
          firstStep = firstStep - 1;
        </code>
      </pre>
      <form>
        Solution : 
        <input v-model="soluce" type="text">
      </form>
      <div>
        <span>N'hésitez pas à faire des recherches internet pour les éléments non expliqués</span>
      </div>
    </div>
    <button v-on:click="verificationSoluce">next</button>
</template>
  
<script>
  export default {
    data() {
      return {
        soluce : 0
      };
    },

    methods: {
      verificationSoluce(){
        if(this.$data.soluce == '24'){
          this.$router.push('/condition');
        }
      }
    },
  };
</script>
  
<style scoped>
  span {
    color: white;
  }
  .comments{
    color: green;
  }
</style>