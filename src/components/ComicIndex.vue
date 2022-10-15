<!-- ComicIndex.vue -->
<template>
  <div class="row">
   <div style="margin-top: 5%">
     <h2>{{title}}</h2>
     <table><thead>
       <tr>
         <th>Title</th>
	   </tr>
       </thead><tbody>
       <tr v-for='comic in comics'>
        <td>{{comic.title}}</td>
       </tr></tbody>
     </table>
     <router-link class="button button-primary" 
       to="/book/create">New</router-link>
   </div>
  </div>
</template>

<script>
	
export default {
  name: "Comics Index",
  data() {
    return {
      title: 'Comics List',
      comics: []
    };
  },
  mounted() {
    this.allComics()
  },
  methods: {
    allComics() {
      fetch(this.url+'/.netlify/functions/comicFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.comics = items;
          console.log("Hellos"+items)
        })
     },
     deleteComic(id) {
       fetch(this.url+'/.netlify/functions/comicDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allBooks();
          }
        )
     }
  }
};
</script>