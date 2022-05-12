import React from "react";
import { GiftGridItem } from "./GiftGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftRead = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <div className="card-grid">
        <h3 className="animate__animated animate__rubberBand animate__delay-2s">{category}</h3>
        {loading && <p>Cargando...</p>}
        <ol>
          {data.map((img) => (
            <GiftGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};
