<!-- BookDetails.vue -->
<template>
  <div class="row">
   <div class="eleven column" style="margin-top: 5%">
    <h2>{{title}}</h2>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "Book Details",
  props: ['create','edit','create'],
  data() {
    return {
      title: "Book Data",
      book: {}
    }
  },
  mounted() {
    const route = useRoute()
    if (route.params.id != null)
      this.findBook(route.params.id);
    else {
      this.book = {
        '_id': Math.floor(Math.random()*100000000),'title':'','edition':'',
        'copyright':0,'language':'','pages':0,'author':'','author_id':0,
        'publisher':'','publisher_id':0 };
    }
  },
  methods: {
    findBook: function(id) {
      fetch(this.url+'/.netlify/functions/bookFind/'+id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((items) => {
       this.book = items[0];
      })
    },
    updateBook: function(id) {
      fetch(this.url+'/.netlify/functions/bookUpdate/'+id,
        { headers: {'Content-Type':'application/json'},
          method: 'PUT',
          body: JSON.stringify(this.book)})
        .then((data) => {
          this.$router.push('/book');
        }
      )
    },
    createBook: function() {
      fetch(this.url+'/.netlify/functions/bookInsert',
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.book)})
        .then((data) => {
           this.$router.push('/book');
        }
      )
    }
  }
};
</script>