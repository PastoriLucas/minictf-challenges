<template>
    <div>
      <h2>Les conditions</h2>
      <span> Une condition indique à la machine comment réagir en fonction de différents paramètres.
        La condition intervient chaque fois que le programmeur demande à la machine de faire un choix. 
        Une instruction conditionnelle se réalise si la condition est réalisée.
      </span>
      <span> Les conditions sont principalement représentées par le mot "if" en programmation. Celui-ci sera souvent poursuivi par des parenthèses contenant la condition en elle-même et des crochets donnant l'action en cas de respect de la condition.</span>
      <span>
        Cela peut par exemple être utile dans le cas où un développeur veut permettre à quelqu'un de se connecter à un site.
      </span>
      <pre>
        <code>
            <span class="comments">// Imaginons que nous n'autorisons l'accès à la page admin que si l'utilisateur donne comme 
              nom d'utilisateur "admin" et comme mot de passe "1234" (je vous déconseille fortement ce mot de passe)
            </span>
            <span class="comments">// Nous aurons alors comme code :</span> 
            if (nomUtilisateur == "admin" && password == "1234"){
              <span class="comments">// code permettant l'accès à la page admin</span>
            } 
        </code>
      </pre>
    </div>
    <div>
      <h3> Exercice </h3>
      <span>Donnez moi la valeur finale de <code>secondStep</code> : </span>
      <pre>
        <code>
          var secondStep = 5;
          var x = true;
          if(x){
            secondStep = secondStep + 1;
          }
          if(secondStep > 5){
            secondStep = secondStep * 5;
          }
          if(0){
            secondStep = secondStep - 12;
          }
        </code>
      </pre>
      <form>
        Solution : 
        <input v-model="soluce" type="text">
      </form>
      <div>
        <span>De nouveau, n'hésitez pas à faire des recherches internet pour les éléments non expliqués</span>
      </div>
    </div>
    <button v-on:click="verificationSoluce">next</button>
    <p v-if="error.length" class="error">
      <b>{{error}}</b>
    </p>
</template>
  
<script>
  export default {
    data() {
      return {
        soluce : 0,
        error : ""
      };
    },

    methods: {
      verificationSoluce(){
        if(this.$data.soluce == '30'){
          this.$router.push('/boucle');
        }
        else{
          this.$data.error = "Ce n'est pas la bonne réponse ;)"
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
  .error{
    color: red;
  }
</style>