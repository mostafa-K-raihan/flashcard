<template>
  <div id="app">
    <Menu 
      @changeCategory="handleCategoryChange"
      @changeMenu="handleMenuChange"
    />
    <Flashcard 
    :category = "category"
    :menu = "menu"
    />
  </div>
</template>

<script>
import Flashcard from './components/Flashcard.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'app',
  components: {
    Flashcard,
    Menu
  },
  data () {
    return {
      category : "All",
      menu : "Test Yourself",
    }
  },
  methods : {
    handleCategoryChange (value) {
      this.category = value;
    },
    handleMenuChange(value) {
      this.menu = value;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
