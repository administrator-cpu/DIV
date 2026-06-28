'use client';

import { useState } from 'react';
import ProductHero from '../../../../components/Product/ProductHero';
import ProductCTA from '../../../../components/Product/ProductCTA';
import VideoEmbed from '../../../../components/Product/VideoEmbed';
import VideoThumbnail from '../../../../components/Product/VideoThumbnail';
import PreviewImages from '../../../../components/Product/PreviewImages';
import { useProduct } from '../../api/hooks/useProducts';

// Helper function to extract YouTube ID from any YouTube URL format
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function ProductDetailClient({ product: initialProduct, initialDataUpdatedAt }) {
  const [showVideo, setShowVideo] = useState(false);

  const { data: product } = useProduct(initialProduct.slug, {
    initialData: initialProduct,
    initialDataUpdatedAt,
  });

  const currentProduct = product || initialProduct;
  
  // Extract the ID from the URL provided by the database
  const videoId = getYouTubeId(currentProduct.demoVideoUrl);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 mb-4">
            {currentProduct.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentProduct.title}</h1>
          <p className="text-lg text-gray-300 max-w-3xl">{currentProduct.description}</p>

          {currentProduct.totalRatings > 0 && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-400 text-lg">★ {currentProduct.averageRating.toFixed(1)}</span>
              <span className="text-gray-400">({currentProduct.totalRatings} reviews)</span>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Demo Video - NOW CHECKING FOR videoId */}
            {videoId && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Demo</h2>
                {showVideo ? (
                  <VideoEmbed videoId={videoId} title={`${currentProduct.title} Demo`} />
                ) : (
                  <VideoThumbnail
                    videoId={videoId}
                    title={`Watch ${currentProduct.title} demo`}
                    onClick={() => setShowVideo(true)}
                  />
                )}
              </section>
            )}

            {/* Preview Images */}
            {currentProduct.previewImages && currentProduct.previewImages.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
                <PreviewImages images={currentProduct.previewImages} />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Interested?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get in touch to discuss how {currentProduct.title} can transform your business.
              </p>
              <a
                href="/support"
                className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-sm font-bold text-white shadow-lg hover:from-pink-600 hover:to-yellow-500 transition-all"
              >
                Book Demo
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}