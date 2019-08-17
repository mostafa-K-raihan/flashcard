<template>
    <div class="basicFlashcard">
       <div class="item question">{{item.front}}</div>
       <div class="item type">{{item.type}}</div>
       <div class="item category ">{{item.category}}</div>
       
    </div>

</template>
<script>
export default {
    name : "BasicFlashcard",
    props: {
        item : Object,
    }
}
</script>
<style scoped>
    .basicFlashcard {
        border: 1px solid gray;
        margin : 1rem;
        padding: 1.5rem;
        display : grid;
        grid-template-columns: 1fr 10% 12% ;
        grid-gap: .7rem;
    
        background: gray;
        color: white;
        box-shadow: 0 5px 10px 2px rgb(185, 183, 183);

    }

    .basicFlashcard:hover{
        transform: scale(1.02);
        transition : transform 500ms ease-in-out;
    }
    
    .item {
        /* border: 1px solid #ffffff; */
        padding: .5rem;
        align-self: center;
        /* justify-self: center; */
        
    }


</style>


