import React from "react";

export const GiftGridItem = ({ id, title, url }) => {
  console.log({ id, title, url });
  return (
    <>
      <div className="card animate__animated animate__rubberBand animate__delay-2s">
        <p>{title}</p>
        <img src={url} />
      </div>
    </>
  );
};
