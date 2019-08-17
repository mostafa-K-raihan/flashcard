<template>
    <div>
    <div class="menu">
        <div v-for="(item, index) in mainMenu"
         :key="index" 
         class="menu__item" 
         :class="item.active ? 'active' : ''"
         @click="setActive(mainMenu, index, 'menu')"
         >
            {{item.title}}
        </div>
    </div>

    <div class="menu">
        <div v-for="(item, index) in categories" 
        :key="index" 
        class="menu__item" 
        :class="item.active ? 'active' : ''"
        @click="setActive(categories, index, 'category')"
        >
            {{item.title}}
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name : "Menu",
    props : {},
    data() {
        return {
            mainMenu : [
                {
                    title : "Test Yourself",
                    active : true,
                },

                {
                    title : "Add New Flashcard",
                    active : false,
                },

                {
                    title : "Show All",
                    active : false,
                }
            ],

            categories : [
                {
                    title : "All",
                    active : true,
                },

                {
                    title : "Data Structure",
                    active : false,
                },

                {
                    title : "Algorithm",
                    active : false,
                },

                {
                    title : "Networking",
                    active : false,
                },

                {
                    title : "Database",
                    active : false,
                },


            ],

            
        }
    },
    methods :{
        setActive (array, index, heading) {
            array.forEach(i=>i.active=false);
            array[index].active= !array[index].active;
            if( heading === 'category' ){
                this.$emit("changeCategory", array[index].title);
            }else if( heading === "menu" ) {
                this.$emit("changeMenu", array[index].title);
            } 
        }
    }
}
</script>
<style scoped>
    .menu {
        /* background: red; */
        display: flex;
        justify-content: center;
        margin: .5rem 0;
    }
    
    .menu__item {
        background: white;
        margin : 0 .5rem;
        padding : .5rem;
        color: black;
        border : 1px solid tomato;
        /* cursor : pointer; */
    }

    .active {
        color: white;
        background: blue;
        border : 1px solid black;
        font-weight: bold;
    }

    .menu__item:hover {
        cursor : pointer;
        /* color: black;
        background: white;
        border : 1px solid black;
        transition: 'color background border' 450ms ease-in-out; */
    }
</style>
