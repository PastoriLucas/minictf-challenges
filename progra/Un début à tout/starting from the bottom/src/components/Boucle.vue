<template>
    <div>
      <h2>Les Boucles</h2>
      <span> Une boucle permet de répéter un certain nombre de fois une action dans un programme.</span>
      <span> Celles-ci peuvent être représentées de plusieurs manières mais dans notre cas, nous nous intéresserons au "while".</span>
      <pre>
        <code>
            <span class="comments">// Imaginons que nous avons un nombre que nous voulons afficher dans la console en incrémentant à chaque affichage jusqu'à 100
            </span>
            <span class="comments">// Nous aurons alors comme code :</span> 
            var i = 0;
            while (i &lt 100){
              console.log(i); <span class="comments">// console.log() permet d'afficher en console ce qu'il se trouve entre ses parenthèses</span> 
              i = i+1;
            }
        </code>
      </pre>
    </div>
    <div>
      <h3> Exercice </h3>
      <span>Donnez moi la valeur finale de <code>thirdStep</code> : </span>
      <pre>
        <code>
          var thirdStep = 4;
          while (thirdStep &lt 1200000){
            thirdStep = thirdStep * thirdStep;
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
        if(this.$data.soluce == '4294967296'){
          this.$router.push('/hbo');
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