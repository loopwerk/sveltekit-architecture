<script context="module">
  import { fetchBooksStore } from "$lib/utils";

  export async function load({ fetch, stuff }) {
    try {
      const updatedStuff = {
        ...stuff,
        fetchedBooksStore: await fetchBooksStore(fetch),
      };

      return {
        stuff: updatedStuff,
      };
    } catch (error) {
      return error;
    }
  }
</script>

<slot />
