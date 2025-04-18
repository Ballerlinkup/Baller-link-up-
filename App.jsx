import React from 'react';
import { motion } from 'framer-motion';

export default function BallerLinkUp() {
  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      <motion.h1 className="text-4xl font-bold text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Baller Link Up
      </motion.h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Training Sessions</h2>
        <p>Join our elite grassroots football sessions and get your shot at the big leagues. We train Mondays and Fridays.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Session Pricing</h2>
        <ul className="list-disc list-inside">
          <li>£20 per session (Pay-as-you-go)</li>
          <li>£75 for 4 Monday sessions per month</li>
          <li>£130 for 8 Monday + Friday sessions per month</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Book Your Session</h2>
        <div className="grid gap-4">
          <button className="bg-black text-white py-2 px-4 rounded">Pay with Stripe</button>
          <button className="border py-2 px-4 rounded">Pay with PayPal</button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact & Booking</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" required className="border p-2 w-full" />
          <input type="email" placeholder="Your Email" required className="border p-2 w-full" />
          <textarea placeholder="Your Message" required className="border p-2 w-full" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Inquiry</button>
        </form>
      </section>

      <section className="text-center pt-10">
        <a href="https://www.instagram.com/ballerlinkup/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Follow us on Instagram
        </a>
      </section>
    </div>
  );
}
