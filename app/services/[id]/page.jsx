import React from 'react'
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { getServiceById, getAllServiceIds } from "../data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}

const page = async ({ params }) => {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return notFound();

  return (
    <div className="pt-[120px]">
      <Navbar/>
      <main className="w-full z-[-1]">

        <section className="w-full">
      {service.components}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default page
