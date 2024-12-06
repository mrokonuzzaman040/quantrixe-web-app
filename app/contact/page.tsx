'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>info@quantrixe.net</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p>1128 Vine Street, Waukegan, Illinois, USA - 60085</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white bg-opacity-10 backdrop-blur-md rounded border border-gray-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white bg-opacity-10 backdrop-blur-md rounded border border-gray-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 bg-white bg-opacity-10 backdrop-blur-md rounded border border-gray-600 text-white"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

