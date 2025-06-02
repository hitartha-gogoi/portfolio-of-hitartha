'use client';
import { useState } from 'react';
import { sendContactRequest } from '@/utils/sendContactRequest';
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = { name, email, message };

    const result = await sendContactRequest(formData);

    if (result.success) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus(`Error: ${result.message}`);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white">
      <Navbar textColor={`black`} />

      <div className="min-h-screen bg-white flex flex-col md:flex-row py-10 mt-10">
      {/* Left Info Block */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 bg-gray-900 text-white p-10 flex flex-col justify-center"
      >
        <h1 className="text-4xl font-bold mb-4">Let’s Build Something Exceptional</h1>
        <p className="text-gray-400 text-lg mb-8">
          Drop us a line. Whether it's an app, an idea, or something crazy — we’re listening.
        </p>
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-blue-600" />
          <div>
            <p className="font-semibold">Email</p>
            <a href="mailto:bahadurgarhbarassociation@gmail.com" className="text-blue-600 hover:underline">
              hitarthabusiness@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 p-10 flex items-center bg-white"
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 text-gray-600">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your project..."
              onChange={(e)=> setMessage(e.target.value)}
              name='message'
              value={message}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md uppercase "
          >
            Send It
          </button>
          {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}
        </form>
      </motion.div>
    </div>

      <Footer />
    </div>
  );
}
