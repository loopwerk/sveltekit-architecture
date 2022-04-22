import { get, readable } from "svelte/store";
import { browser } from "$app/env";
import { books as booksStore } from "$lib/store";

function arrayToDict(arr) {
  const dict = {};
  arr.forEach(value => {
    dict[value.id] = value;
  });
  return dict;
}

export async function fetchBooksStore(fetch) {
  const books = browser && get(booksStore);
  if (books && Object.values(books).length > 0) {
    return booksStore;
  }

  const response = await fetch("/books.json");
  const fetchedBooks = await response.json();

  if (browser) {
    booksStore.set(arrayToDict(fetchedBooks));
    return booksStore;
  } else {
    return readable(arrayToDict(fetchedBooks));
  }
}