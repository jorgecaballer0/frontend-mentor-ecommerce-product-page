import React from "react";

const DetailProducts = () => {
  return (
    <section className="container mx-auto px-4">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
        Sneaker Company
      </p>
      <h2 className="mb-4 text-3xl font-bold">Fall Limited Edition Sneakers</h2>
      <p className="mb-4 text-dark-grayish-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        dignissimos dolorum ab exercitationem, nulla veritatis ad quasi eius
        reiciendis, quas velit, iste facilis eligendi magnam voluptates
        temporibus? Inventore, neque magnam.
      </p>
      <div className="grid gap-4 grid-cols-3 items-center font-bold">
        <span className="text-3xl">$125.00</span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2">50%</span>
        <span className="text-right text-lg text-grayish-blue line-through">
          $250.00
        </span>
      </div>
      <div>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
      <button>Add to cart</button>
    </section>
  );
};

export default DetailProducts;
