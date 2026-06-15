'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ALL_REVIEWS } from '../../constants/reviewsData'; // Your single source of truth

// Mocking a logged-in user so you can see the Edit/Delete UI in action.
// In production, you would pull this from your JWT/Auth context.
const CURRENT_USER = {
  id: 999,
  name: "Harsh Jha",
  role: "Lead Technical Architect",
  avatar: "https://i.pravatar.cc/150?u=harsh"
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'overall', 'samadhan', 'connect', 'bahikhata'
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [formData, setFormData] = useState({ serviceId: 'overall', stars: 5, text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize reviews (merging your bulk reviews with any mock local state)
  useEffect(() => {
    // We map your bulk reviews to act as 'overall' brand reviews for the mock
    const initialReviews = ALL_REVIEWS.map(r => ({ ...r, serviceId: 'overall', authorId: r.id }));
    setReviews(initialReviews);
  }, []);

  // Filter Logic
  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.serviceId === filter);

  // Form Handlers
  const openWriteModal = () => {
    setFormData({ serviceId: 'overall', stars: 5, text: '' });
    setEditingReviewId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (review) => {
    setFormData({ serviceId: review.serviceId, stars: review.rating, text: review.text });
    setEditingReviewId(review.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (reviewId) => {
    if (confirm("Are you sure you want to permanently delete this review?")) {
      // In production: await fetch(`/api/v1/ratings/${reviewId}`, { method: 'DELETE' })
      setReviews(reviews.filter(r => r.id !== reviewId));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Delay
    await new Promise(resolve => setTimeout(resolve, 800)); 

    if (editingReviewId) {
      // UPDATE EXISTING
      setReviews(reviews.map(r => r.id === editingReviewId ? { ...r, rating: formData.stars, text: formData.text, serviceId: formData.serviceId } : r));
    } else {
      // CREATE NEW
      const newReview = {
        id: Date.now(), // Mock ID
        authorId: CURRENT_USER.id,
        name: CURRENT_USER.name,
        role: CURRENT_USER.role,
        avatar: CURRENT_USER.avatar,
        text: formData.text,
        rating: formData.stars,
        serviceId: formData.serviceId,
      };
      setReviews([newReview, ...reviews]);
    }

    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen font-sans pb-24 relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-16 px-6 bg-gray-50/50 border-b border-gray-100 text-center">
        <div className="absolute top-[-30%] left-[20%] w-[50%] h-[70%] rounded-full bg-gradient-to-tr from-pink-100/50 to-orange-50/50 blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm inline-block">
            Client Testimonials
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Trusted by Enterprise Leaders
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Read transparent, verified reviews from teams using our architectures to scale their operations.
          </p>
          <button 
            onClick={openWriteModal}
            className="px-8 py-3.5 rounded-full bg-[#1C1C1C] text-white font-bold text-sm shadow-xl hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
          >
            Write a Review
          </button>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-6 mt-12 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'overall', label: 'Overall Brand' },
            { id: 'samadhan', label: 'Samadhan' },
            { id: 'connect', label: 'Connect CRM' },
            { id: 'bahikhata', label: 'Bahi Khata' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === tab.id 
                ? 'bg-pink-500 text-white shadow-md' 
                : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-pink-200 hover:bg-pink-50/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. REVIEWS GRID */}
      <section className="max-w-7xl mx-auto px-6">
        {filteredReviews.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-[2rem] border border-gray-100">
            <p className="text-gray-500 font-medium">No reviews found for this category yet.</p>
            <button onClick={openWriteModal} className="mt-4 text-pink-500 font-bold hover:underline">Be the first to review!</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => {
              const isOwnReview = review.authorId === CURRENT_USER.id;

              return (
                <div key={review.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                  
                  {/* Top Bar: Stars & Category Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <svg key={idx} className={`w-4 h-4 shrink-0 ${idx < review.rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      {review.serviceId}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                  
                  {/* Bottom Bar: User Info & Controls */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-3">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-gray-200 shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                        <p className="text-pink-500 text-xs font-semibold">{review.role}</p>
                      </div>
                    </div>

                    {/* Edit / Delete Controls (Only visible to the author) */}
                    {isOwnReview && (
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEditModal(review)} className="text-gray-400 hover:text-gray-900 transition-colors" aria-label="Edit Review">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                        </button>
                        <button onClick={() => handleDelete(review.id)} className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Delete Review">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. WRITE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100">
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-xl font-bold text-gray-900">{editingReviewId ? 'Edit Your Review' : 'Submit a Review'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">Service to Review</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all appearance-none"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({...formData, serviceId: e.target.value})}
                  disabled={editingReviewId} // Usually, you shouldn't be able to change the target product after rating it
                >
                  <option value="overall">Overall DIV Brand</option>
                  <option value="samadhan">Samadhan</option>
                  <option value="connect">Connect CRM</option>
                  <option value="bahikhata">Bahi Khata</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, stars: star})}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${formData.stars >= star ? 'bg-yellow-50 text-yellow-500 border border-yellow-200' : 'bg-gray-50 text-gray-300 border border-gray-200 hover:border-yellow-200 hover:text-yellow-200'}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">Your Experience</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.text}
                  onChange={(e) => setFormData({...formData, text: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all resize-none"
                  placeholder="What did you love? What could be improved?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-yellow-400 hover:opacity-90 shadow-lg'
                }`}
              >
                {isSubmitting ? 'Processing...' : (editingReviewId ? 'Save Changes' : 'Submit Review')}
              </button>

            </form>
          </div>
        </div>
      )}

    </main>
  );
}