import React from 'react';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { getData } from '@/lib/getData';



export default async function SupplierDashboard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { name, email, id, role, emailVerified, status= false } = user;
  const sales =await getData("sales");
  const salesById = sales.filter((sale) => sale.vendorId === id);
  const products = await getData("products");
  const productById = products.filter((product)=> product.productId === id);

  if(!status){
    return (
      <div>
        <h2>Supplier dashboard</h2>
      </div>
    );
  }

  
}
