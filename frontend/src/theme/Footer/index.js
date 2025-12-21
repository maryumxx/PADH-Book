import React from "react";
import OriginalFooter from "@theme-original/Footer";
import BookChatWidget from "@site/src/components/BookChatWidget";
import GlassMorphismFooter from "@site/src/components/GlassMorphismFooter";

export default function Footer(props) {
  return (
    <>
      <GlassMorphismFooter />
      <BookChatWidget />
    </>
  );
}
