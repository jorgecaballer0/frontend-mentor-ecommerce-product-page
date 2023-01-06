import React from "react";

const MainProduct = () => {
  return (
    <main>
      <section>Galeria de imagenes</section>
      <section>
        <p>Sneaker Company</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          dignissimos dolorum ab exercitationem, nulla veritatis ad quasi eius
          reiciendis, quas velit, iste facilis eligendi magnam voluptates
          temporibus? Inventore, neque magnam.
        </p>
        <p>
          <span>$125.00</span>
          <span>50%</span>
        </p>
        <p>$240.00</p>
        <div>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </section>
    </main>
  );
};

export default MainProduct;
