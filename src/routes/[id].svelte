<script context="module">
  import { get } from "svelte/store";

  export async function load({ params, stuff }) {
    // Bail out if we don't have the book in the store
    const book = get(stuff.fetchedBooksStore)[params.id];
    if (!book) {
      return {
        status: 404,
        error: "Book not found",
      };
    }
    return { props: stuff };
  }
</script>

<script>
  import { page } from "$app/stores";
  export let fetchedBooksStore;
  $: book = $fetchedBooksStore[$page.params.id];
</script>

<a href="/">&lt; back to list</a>

<h1>{book.title}</h1>
Author: {book.author}
