<script context="module">
  export async function load({ stuff }) {
    return { props: stuff };
  }
</script>

<script>
  export let fetchedBooksStore;
  $: books = Object.values($fetchedBooksStore);
</script>

<h1>List of books</h1>

<ul>
  {#each books as book (book.id)}
    <li><a href="/{book.id}">{book.title}</a></li>
  {/each}
</ul>
