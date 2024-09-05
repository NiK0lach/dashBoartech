import CategoryList from "@/components/frontend/CategoryList";
import Hero from "@/components/frontend/Hero";
import StoreList from "@/components/frontend/StoreList";
import { getData } from "@/lib/getData";
import TrainingList from "@/components/frontend/TrainingList";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";


export default async function Home() {
  const categoriesData = await getData('categories');
  const categories = await categoriesData.filter((category)=>{
    return category.products.length > 2
  });
  const training = await getData("training");
  
  const session = await getServerSession(authOptions);
  //console.log(session?.user);  
  //console.log(categories);
  return (
   <div className="min-h-screen">
    <Hero/>
    <StoreList/>
      {categories.map((category, i) => {
       return(
          <div key={i} className="py-8">
            <CategoryList isStorePage={false} category={category}/>
          </div> 
          );
     })}

    <TrainingList title="Featured trainings" training={training.slice(0,3)}/>
    
   </div>
  );
}
