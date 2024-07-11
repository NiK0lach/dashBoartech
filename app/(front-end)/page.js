import CategoryList from "@/components/frontend/CategoryList";
import Hero from "@/components/frontend/Hero";
import StoreList from "@/components/frontend/StoreList";
import { getData } from "@/lib/getData";
import TrainingList from "@/components/frontend/TrainingList";
import Link from "next/link";


export default async function Home() {
  const categories= await getData('categories');
  return (
   <div className="min-h-screen">
    <Hero/>
    <StoreList/>
    {categories.map((category, i) =>
        {
          return(
          <div key={i} className="py-8">
            <CategoryList category={category}/>
          </div> 
          )
        }
      )}
    <TrainingList/>
    <h2 className="text-4xl px-8 mt-8">Front end Webapp Gernik</h2>
    <Link className="my-4 underline px-8" href="/register-supplier">Registrate como Contratista </Link> 
   </div>
  );
}
