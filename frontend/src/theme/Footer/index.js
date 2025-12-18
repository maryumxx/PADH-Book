import React from "react";
import OriginalFooter from "@theme-original/Footer";
import BookChatWidget from "@site/src/components/BookChatWidget";

export default function Footer(props) {
  return (
    <>
      <OriginalFooter {...props} />
      <BookChatWidget />
    </>
  );
}
