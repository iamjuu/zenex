import React from 'react'
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { getServiceById, getAllServiceIds } from "../data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}

const page = ({ params }) => {
  const service = getServiceById(params?.id);
  if (!service) return notFound();

  return (
    <div className="pt-[120px]">
      <Navbar/>
      <main className="w-full z-[-1]">
        {/* <h1 className="text-3xl font-semibold mb-4">{service.title}</h1>
        <p className="text-gray-600 mb-8">{service.description}</p> */}
        <section className="w-full">
      {service.components}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default page
