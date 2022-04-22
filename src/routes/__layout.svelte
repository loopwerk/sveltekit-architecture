<script context="module">
  import { fetchBooksStore } from "$lib/utils";

  export async function load({ fetch, stuff }) {
    try {
      const updatedStuff = {
        ...stuff,
        fetchedBooksStore: await fetchBooksStore(fetch),
      };

      return {
        props: updatedStuff,
        stuff: updatedStuff,
      };
    } catch (error) {
      return error;
    }
  }
</script>

<slot />
