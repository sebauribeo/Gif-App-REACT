import React, { useState } from "react";
import { Addcategory } from "./components/Addcategory";
import { GiftRead } from "./components/GiftRead";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  return (
    <>
      <h1>GiftExpertApp</h1>
      <Addcategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GiftRead key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
