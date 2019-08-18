<template>
    <div>
        <form class="form" @submit.prevent="addCard">
            <div class='group'>
                <input required type="text" class="form__input" v-model="newFlashcard.front" placeholder="Enter your question">
                <label>Question</label>
                
            
                
            </div>

            <div class="group">
                <textarea required type="text" class="form__input" v-model="newFlashcard.back" rows=10 placeholder="Enter your answer"></textarea>
                <label> Answer</label>
            </div>
            
            <div class="group">
                <input required type="text" class="form__input" v-model="newFlashcard.category" placeholder="Enter Category">
                <label>Category</label>
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
            newFlashcard : {},
        }
    },
    methods :{
        addCard() {
            this.$emit("addFlashcard", this.newFlashcard);
        }
    }
}
</script>

<style scoped>

    button {
        align-self: center;
        justify-self: center;
        padding : .8rem 2rem;
        border: none;
        border-radius: 1.5rem;
        font-weight: bold;
        color :honeydew;
        background: #2196f3;
        outline : none;
        font-size: 20px;
        text-transform: uppercase;
        background-position: center;
        transition: background .8s;

    }

    button:hover {
        cursor: pointer;
        background: #c radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
    }

    /*  */

    button:active {
        background-color: #6eb9f7;
        background-size: 100%;
        transition: background 20ms;
    }

    .form {
        display : grid;
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
        

    }

    .group {
        display: flex;
        flex-direction: row-reverse;
        
        margin: .5rem;
        /* border : 1px solid black; */
        padding : .5rem;
        font-weight: bold;
        font-size: 1.2rem;
        
    
    }

    .form__input {
        width : 80%;
        border : none;
        margin : 1rem;
        border-bottom: 1px solid #757575;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    textarea {
        resize: none;
        
    }

    .form__input:focus {
        outline: none;
    }

    label {
        
        color: #6eb9f7;
        font-size: 1.5rem;
        transition : 500ms ease all;
    }

    .form__input:focus ~label {
        font-size: 1.2rem;
        color: #1256de;
    }
</style>