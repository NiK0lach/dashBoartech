import React from 'react';
import CouponForm from '@/components/backoffice/Forms/NewCouponForm';
import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from '@/lib/getData';

export default async function UpdateCoupon( { params:{id} } ) {
  const coupon = await getData(`coupons/${id}`);
 
  return (
    <div>
     <FormHeader title="Update Coupon"/>
     <CouponForm updateData={coupon}  />
    </div>
  );
}



