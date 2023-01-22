import { useState } from "react";
import fetchBook from "./components/book";

const App: React.FunctionComponent = () => {
  const [isbn, setIsbn] = useState<string>("");
  const onClickButton: any = async () => {
    await fetchBook({ isbn });
  };

  return (
    <>
      <h1>Book Request</h1>
      <input
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => {
          setIsbn(e.target.value);
        }}
      />
      <button onClick={onClickButton}>検索</button>
      <div id="result"></div>
    </>
  );
};

export default App;
