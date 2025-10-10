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
    <div>
      <Navbar/>
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-4">{service.title}</h1>
        <p className="text-gray-600 mb-8">{service.description}</p>
        <section className="prose max-w-none">
          <h2>What we offer</h2>
          <ul>
            <li>Consultation to understand your goals</li>
            <li>Implementation by certified professionals</li>
            <li>Ongoing support and maintenance</li>
          </ul>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default page
