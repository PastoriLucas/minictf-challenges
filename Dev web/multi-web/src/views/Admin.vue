<template comments>
    <div id="main">
        <div id='form'>
           <b-field label="Username" class="field"
                type="is-success">
                <b-input value="" maxlength="30"  v-model="username" class="input"></b-input>
            </b-field>
            <hr class="hr">
            <b-field label="Password" class="field">
                <b-input type="password"
                    value=""
                    password-reveal
                    class="input"
                    v-model="password">
                </b-input>
            </b-field>
            <hr class="hr">
            <div>
                <b-button type="is-info" v-on:click="login" class="button">Submit</b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Admin',

    data() {
        return {
            username : "",
            password :"",
        }
    },

    methods: {
        login(){
            if(this.username == 'admin' && this.password == 'Motivation'){
                alert("i added a useless admin page to look more serious -_-, please don't tell to anybody i'll offer you this flag as a promise : "+ atob('RVBIQ3tINGNrZXJtNG59') );
            }
            else{
                alert('Try again');
            }
        },
    },
}
</script>
<style >
    #main{
        height: 100%;
        width: 100%;
        padding-top: 5%;
    }
    #form{
        width: 50%;
        text-align: left;
        padding-left: 5%;
    }
    .field{
        margin: 3% 0%;
    }
    .button{
        margin: 3% 0%;
    }
     .input{
        margin: 3% 0%;
    }
    .hr{
        margin: 3% 0%;
    }
</style>