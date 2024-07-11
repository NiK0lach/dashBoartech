import CategoryList from "@/components/frontend/CategoryList";
import Hero from "@/components/frontend/Hero";
import StoreList from "@/components/frontend/StoreList";

import TrainingList from "@/components/frontend/TrainingList";
import Link from "next/link";


export default function Home() {
  return (
   <div className="min-h-screen">
    <Hero/>
    <StoreList/>
    <CategoryList/>
    <TrainingList/>
    <h2 className="text-4xl px-8 mt-8">Front end Webapp Gernik</h2>
    <Link className="my-4 underline px-8" href="/register-supplier">Registrate como Contratista </Link> 
   </div>
  );
}
