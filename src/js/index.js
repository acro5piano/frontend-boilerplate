import Vue from 'vue'

var navbar = new Vue({
  el: "#js-navbar",
  data () {
    return {
      dropdownOpened: false
    }
  },
  methods: {
     toggleDropdown() {
      this.dropdownOpened = ! this.dropdownOpened
    }
  }
})
