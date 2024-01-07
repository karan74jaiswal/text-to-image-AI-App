import { useState } from "react";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

export function ImageToText() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [image, setImage] = useState("sample.jpg");
  const handleSearchPage = function (value) {
    setShowSearchPage(value);
  };
  return (
    <>
      <Navbar
        showSearchPage={showSearchPage}
        handleSearchPage={handleSearchPage}
        image={image}
      />
      <Main
        showSearchPage={showSearchPage}
        handleSearchPage={handleSearchPage}
        image={image}
        setImage={setImage}
      ></Main>
    </>
  );
}
