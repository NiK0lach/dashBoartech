import React from 'react';

export default function PriceFilter() {
    const priceRanges =[
        {
            display:"under 200",
            max:200
        },
        {
            display:"Between 200 and 400",
            max:400,
            min:200,
        },
        {
            display:"Between 500 and 700",
            max:700,
            min:500,
        },
     ];
  return (
    <div>
        <div className="flex">
          <h2>Price</h2>
           <button></button> 
        </div>
         {}
    </div>
  );
}
