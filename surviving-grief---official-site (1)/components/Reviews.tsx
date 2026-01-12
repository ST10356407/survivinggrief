
import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
  { id: 1, author: "The Sunday Times", content: "A quiet masterpiece. Thorne manages to articulate the unutterable." },
  { id: 2, author: "Dr. Sarah Miller", content: "Essential reading for anyone in the therapeutic community and beyond." },
  { id: 3, author: "Reader Review", content: "It felt like a soft hand on my shoulder when I needed it most." }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col justify-between"
            >
              <div className="text-5xl font-serif text-gray-200 mb-4">“</div>
              <p className="text-xl font-serif mb-8 leading-relaxed italic">
                {review.content}
              </p>
              <div className="text-xs uppercase tracking-[0.2em] font-bold">
                — {review.author}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
