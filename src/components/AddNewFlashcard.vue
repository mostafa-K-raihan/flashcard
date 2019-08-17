<template>
    <div>
        <form class="form" @submit.prevent="newFlashcard">
            <div class='group'>
                <input  required type="text" class="form__input" v-model="front">
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Question</label>
            </div>

            <div class="group">
                <textarea required type="text" class="form__input" v-model="back"></textarea>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label> Answer</label>
            </div>
            
            <button type="submit"> Add </button>
        </form>    
    </div>    
</template>

<script>
export default {
    name : "AddNewFlashcard",
    props : {

    },
    data() {
        return {
            front : "",
            back : "",
        }
    },
    methods :{
        newFlashcard() {
            alert(this.front + " " + this.back);
        }
    }
}
</script>

<style scoped>

    .bar {
        width:100%;
        display: block;

    }

    .bar::before, .bar::after {
        content: 'a';
        height: 2px;
        bottom: 1px;
        position: absolute;
        background: #5264ae;
        transition: 200ms ease all;
    }

    .bar:before {
        left:50%;
    }
    .bar:after {
        right:50%; 
    }

    input:focus ~ .bar:before, input:focus ~ .bar:after {
        width:50%;
    }

    .highlight {
        position:absolute;
        height:60%; 
        width:100px; 
        top:25%; 
        left:0;
        pointer-events:none;
        opacity:0.5;
    }

    .form {
        display : grid;
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;

    }

    .group {

        margin: .5rem;
        padding : .5rem;
        font-weight: bold;
        font-size: 1.2rem;
        display : block;
        


    }

    .form__input {
        border : none;
        border-bottom: 1px solid #757575;
    }

    .form__input:focus {
        outline: none;
    }

    label {
        color: #999;
        font-size: 1.5rem;
    
      
        transition : 500ms ease all;
    }

    .form__input:focus ~ label {
        font-size: 1.2rem;
        color: #1256de;
    }
</style>