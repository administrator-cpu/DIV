// src/constants/reviewsData.js

export const ALL_REVIEWS = [
  {
    id: 1,
    text: "Working with the team has completely transformed how we handle our data flow. The custom dashboards are intuitive and incredibly fast.",
    name: "Sarah Jenkins",
    role: "Technical Lead",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah", 
  },
  {
    id: 2,
    text: "DIV helped us streamline operations and reduce manual work across our organization. The integration was seamless and support was top-notch.",
    name: "Marcus Thorne",
    role: "Operations Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus", 
  },
  {
    id: 3,
    text: "An absolute game-changer for our IT asset management. We've seen a 30% reduction in overhead costs since deploying their software ecosystem.",
    name: "Michael Chen",
    role: "Director of IT",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=michael", 
  },
  {
    id: 4,
    text: "The UI/UX design is flawless. Our user engagement metrics went up by 45% within the first month of launching the new platform.",
    name: "Emma Davis",
    role: "Product Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=emma", 
  },
  {
    id: 5,
    text: "Their cloud deployment strategies ensured we had zero downtime during our peak traffic season. Highly recommend their DevOps expertise.",
    name: "David Smith",
    role: "CTO",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=david", 
  },
  {
    id: 101,
    name: "Alex W.",
    role: "CEO",
    text: "Best agency experience we've had. Fast, secure, and scalable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=alexw", 
  },
  {
    id: 102,
    name: "Maria G.",
    role: "Founder",
    text: "The ROI was immediate. Highly recommend their workflow automation.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=mariag", 
  },
  {
    id: 103,
    name: "James T.",
    role: "VP of Eng",
    text: "Flawless code quality and excellent communication.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=jamest", 
  },
  {
    id: 104,
    name: "Nina P.",
    role: "Design Lead",
    text: "They truly understand modern aesthetic and performance.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=ninap", 
  },
  {
    id: 105,
    name: "Omar K.",
    role: "Operations",
    text: "Saved our team hundreds of hours a month.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=omark", 
  },
  {
    id: 106,
    name: "Rachel B.",
    role: "Product",
    text: "Shipped our MVP exactly on schedule.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rachelb", 
  },
];

/**
 * @param {number} count 
 * @returns {Array} 
 */
export const getRandomFeaturedReviews = (count = 5) => {
  if (ALL_REVIEWS.length <= count) {
    return ALL_REVIEWS;
  }

  const shuffled = [...ALL_REVIEWS].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
};