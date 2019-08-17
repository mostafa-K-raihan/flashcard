<template>
    <div class="container">
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
        {{category}}
        
    </div>    
</template>
<script>
export default {
    props : {
        category : String,
    },
    data() {
        return {
            flashcardIndex:0,
            flipStatus: false,
            styleObject : {
                'transform' : "rotateY('180deg')",
            },
            flashcards : [
                {
                    front : "Question 1",
                    back : "Answer 1",
                    type : "General",
                    category : "Algorithm"

                },

                {
                    front : "Question 2",
                    back : "Answer 2",
                    type : "Code",
                    category : "Database"
                },

                {
                    front : "Question 3",
                    back : "Answer 3",
                    type : "General",
                    category : "Networking",
                },

                {
                    front : "Question 4",
                    back : "Answer 4",
                    type : "General",
                    category : "Networking",
                },
            ],
            filteredFlashcards : [],
            
        }
        
    },
    created() {
        this.filteredFlashcards = this.flashcards
    },
    methods: {
        flip() {
            this.flipStatus =! this.flipStatus;
        },
        next() {
            if(this.flashcardIndex < this.filteredFlashcards.length-1) {
                this.flashcardIndex ++;
            }
        },
        knowIt () {
            if(this.flashcardIndex < this.filteredFlashcards.length-1) {
                this.flashcardIndex ++;
            }
        },
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
            
            
        }
    }
}
</script>
<style scoped>

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
        
        width: 40%;
        height : 100%;
        position: relative;
        transition: transform 800ms;
        /* text-align: center; */
        transform-style: preserve-3d;

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


