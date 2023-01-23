import type { Book } from "../types/book";

const fetchBook: any = async ({ isbn }: { isbn: string }) => {
  const url = `https://api.openbd.jp/v1/get?isbn=${isbn}`;
  const res = await fetch(url);
  const json: any = await res.json();
  const data = json;

  renderBook(data[0] as Book);
};

const renderBook: any = (book: Book | null) => {
  if (book != null) {
    const title = book.summary.title;
    const authors = book.summary.author;
    const publisher = book.summary.publisher;
    let price;
    if (
      Boolean(book.onix) &&
      Boolean(book.onix.ProductSupply) &&
      Boolean(book.onix.ProductSupply.SupplyDetail) &&
      Boolean(book.onix.ProductSupply.SupplyDetail.Price) &&
      Boolean(book.onix.ProductSupply.SupplyDetail.Price[0]) &&
      Boolean(book.onix.ProductSupply.SupplyDetail.Price[0].PriceAmount)
    ) {
      price = book.onix.ProductSupply.SupplyDetail.Price[0].PriceAmount;
    } else {
      price = "価格情報がありません";
    }
    const isbn = book.summary.isbn;

    console.log(title, authors, publisher, price, isbn);
  } else {
    console.log("No book found");
  }
};

export default fetchBook;
