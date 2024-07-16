import React from 'react';
import CouponForm from '@/components/backoffice/Forms/NewCouponForm';
import FormHeader from "@/components/backoffice/FormHeader";

export default function NewCoupon() {
  return (
    <div>
         <FormHeader title="New Coupon"/>
         <CouponForm />
    </div>
  );
}