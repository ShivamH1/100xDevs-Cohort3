import React, { useState } from "react";

export default function Sixteen({ items, itemsperpage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsperpage;
  const indexOfFirstItem = indexOfLastItem - itemsperpage;

  return <div></div>;
}
