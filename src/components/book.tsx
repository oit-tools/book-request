import type { Book } from "../types/book";

const fetchBook: any = async ({ isbn }: { isbn: string }) => {
  const url = `https://api.openbd.jp/v1/get?isbn=${isbn}`;
  const res = await fetch(url);
  const json: any = await res.json();
  const data = json;

  renderBook(data[0] as Book);
};

const renderBook: any = (book: Book) => {
  const title = book.summary.title;
  const authors = book.summary.author;
  const publisher = book.summary.publisher;
  const price = book.onix.ProductSupply.SupplyDetail.Price[0].PriceAmount;
  const isbn = book.summary.isbn;

  console.log(title, authors, publisher, price, isbn);
};

export default fetchBook;
