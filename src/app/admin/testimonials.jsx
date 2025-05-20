'use client';

import { useState, useEffect } from 'react';

const AdminTestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const handleApprove = async (id) => {
    const updatedTestimonials = testimonials.map((t) =>
      t.id === id ? { ...t, approved: true } : t
    );
    await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTestimonials),
    });
    setTestimonials(updatedTestimonials);
  };

  const handleDelete = async (id) => {
    const updatedTestimonials = testimonials.filter((t) => t.id !== id);
    await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTestimonials),
    });
    setTestimonials(updatedTestimonials);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Moderate Testimonials</h1>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg mb-4">
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-gray-400">{testimonial.role}</p>
            <p className="mt-2">{testimonial.content}</p>
            <p className="mt-2">Rating: {testimonial.rating} Stars</p>
            <p className="mt-2">Status: {testimonial.approved ? 'Approved' : 'Pending'}</p>
            <div className="mt-4 flex gap-4">
              {!testimonial.approved && (
                <button
                  onClick={() => handleApprove(testimonial.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Approve
                </button>
              )}
              <button
                onClick={() => handleDelete(testimonial.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTestimonialsPage;