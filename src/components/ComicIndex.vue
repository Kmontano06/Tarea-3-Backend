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
       <tr>
        <td>{{comic.name}}</td>
       </tr></tbody>
     </table>
   </div>
  </div>
</template>

<script>
	
export default {
  name: "Comics Index",
  data() {
    return {
      title: 'Comics List',
      comics: [],
      comic: {}
    };
  },
  mounted() {
    this.oneComic()
  },
  methods: {
    allComics() {
      fetch(this.url+'/.netlify/functions/comicFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.comics = items;
          console.log(items)
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
     },
     oneComic() {
      fetch(this.url+'/.netlify/functions/comicFind/1',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.comic = items;
          console.log(items)
        })
     },

  }
};
</script>