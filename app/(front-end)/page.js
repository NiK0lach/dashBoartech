import Hero from "@/components/frontend/Hero";
import Link from "next/link";


export default function Home() {
  return (
   <div className="min-h-screen">
    <Hero/>
    <h2 className="text-4xl">Front end Webapp Gernik</h2>

    <Link className="my-4 underline" href="/register-supplier">Registrate como Contratista </Link> 
   </div>
  );
}
