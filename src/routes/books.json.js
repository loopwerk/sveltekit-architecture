export async function get({ request }) {
  console.log("RECEIVED REQUEST");
  return { 
    body: [
      {id: 1, title: "It", author: "Stephen King"},
      {id: 2, title: "The Road", author: "Cormac McCarthy"},
      {id: 3, title: "Project Hail Mary", author: "Andy Weir"},
      {id: 4, title: "Ready Player One", author: "Ernest Cline"},
      {id: 5, title: "Becoming", author: "Michelle Obama"},
      {id: 6, title: "The Last Black Unicorn", author: "Tiffany Haddish"},
    ]
  };
}