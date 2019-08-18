<template>
    <div>
    <div class="container" v-if="menu==='Test Yourself'">
        <div class="flashcard" :class="{rotateY180: flipStatus}">
            <div class="flashcard-front">
                <p class="element"> {{filteredFlashcards[flashcardIndex].front}} => {{filteredFlashcards[flashcardIndex].type}}</p>
            </div>
            <div class="flashcard-back">
                <p class="element">{{filteredFlashcards[flashcardIndex].back}} </p>
            </div>
        </div>
        <div class="btn__place">
            <button class="btn btn-flip" @click="flip">Flip</button>
            <button class="btn btn-know" @click="knowIt">I Know It</button>
            <button class="btn btn-next" @click="next">Next Card </button>
        </div>
        {{category}} || {{menu}}
        
    </div>  


    <div class="container" v-if="menu === 'Show All'">
        <div class="show__all" v-if="filteredFlashcards.length">
            <BasicFlashcard v-for="(item, index) in filteredFlashcards"
             :key="index"
             :item="item"
             @click.native="removeFlashcard(index)"
             />

        </div>
        <div class="show__all" v-else>
            Nothing Found
        </div>
    </div>

    <div class="container" v-if="menu === 'Add New Flashcard'">
        <div class="addNew">
            <AddNewFlashcard @addFlashcard="addFlashcard"/>
        </div>
    </div>

    </div>  
</template>
<script>

import { db } from '../firebase'
import BasicFlashcard from './BasicFlashcard'
import AddNewFlashcard from './AddNewFlashcard'

export default {
    props : {
        category : String,
        menu : String,
    },
    components : {
        BasicFlashcard,
        AddNewFlashcard,
    },
    
    data() {
        return {
            
            flashcardIndex:0,
            flipStatus: false,
            styleObject : {
                'transform' : "rotateY('180deg')",
            },
            flashcards : [],
            filteredFlashcards : [],
        
            
        }
        
    },
    firestore () {
        return {
            filteredFlashcards : db.collection('cards')
        }   
    },
    // created() {
    //     this.filteredFlashcards = this.flashcards
    // },
    methods: {
        flip() {
            this.flipStatus =! this.flipStatus;
        },
        next() {
            this.flashcardIndex = Math.floor(Math.random()* this.filteredFlashcards.length)
        },
        knowIt () {
            this.flashcardIndex = Math.floor(Math.random()* this.filteredFlashcards.length)
        },
        addFlashcard(val) {
            db.collection('cards').add(val)
            .then(()=>this.$toasted.success('New Flashcard Added!').goAway(2500))
            .catch(err=>{
                    this.$toasted.error('Oops! Something went wrong!').goAway(2500)
                    console.log(err)
                }
            );
        },
        removeFlashcard(index) {
            let uuid = this.filteredFlashcards[index]['.key']
            db.collection('cards').doc(uuid).delete()
            .then(()=>this.$toasted.success('Successfully Deleted').goAway(2500))
            .catch(err=>{
                    this.$toasted.error('Oops! Something went wrong!').goAway(2500)
                    console.log(err)
                }
            );
        }
    },
    watch :{
        category () {
            this.flashcardIndex=0;
            this.filteredFlashcards =  this.flashcards.filter(i=> {
                return this.category === "All" || i.category === this.category;
            });
            if(!this.filteredFlashcards.length){
                this.filteredFlashcards = [
                    {
                        front : "Nothing found! Add a flashcard!",
                        back : "Nothing found! Add a flashcard!",
                        type : "Default",
                        category : "Default"
                    }
                ]
            }
            
            
        },
        
    }
}
</script>
<style scoped>

    .addNew {
        width: 50%;
        height : 100%;
        border : 1px solid black;
    }
    .btn__place {
        display : flex;
        align-self: center;
        /* width: 50%; */
        /* margin-top: .5rem; */
        padding-top: .5rem;
    }

    .btn {
        cursor:pointer;
        padding: 10px 20px;
        text-align: center;    
        border: none;
        font-size: 1.3rem;
        transition-duration: 700ms;
        transition-property: background-color;
        transition-timing-function: ease-out;
        color : white;
        margin: 0 .2rem;
    }
    
    .btn:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
        transition: 'color background-color border' 300ms ease-in-out;
    }

    .btn-flip {
        background-color: #ff5600;
    }

    .btn-know {
        background-color: #00ff3d;
    }

    .btn-next {
        background-color: #00adff;
    }

    
    .element {
        flex-grow: 1
    }
    .rotateY180{
        transform : rotateY(180deg);
    }
    .container{
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: transparent; */
        perspective: 1000px;
        flex-direction: column;
    }
    .flashcard {
        border: 1px solid black;
        background-color: white;
        
        width: 50%;
        height : 100%;
        position: relative;
        transition: transform 800ms;
        /* text-align: center; */
        transform-style: preserve-3d;

    }
    .show__all {
        border: 1px solid black;
        width: 50%;
        height: 100%;
        overflow-y: scroll;
        cursor: pointer;
    }



    .flashcard-front, .flashcard-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column; 
    }

    .flashcard-front {
        background-color: blue;
        color : white;
    }
    .flashcard-back {
        background-color: brown;
        transform: rotateY(180deg);
        color: white;
    }

    
    
</style>


