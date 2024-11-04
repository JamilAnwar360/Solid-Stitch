import React from 'react';
import Title from './Title';

const Testimonial = () => {
  const reviews = [
    {
      name: 'Saima Ali',
      review:
        'Absolutely love the product! The quality is top-notch and the service was exceptional. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Fizza Khan',
      review:
        'Great experience! The product arrived on time and exceeded my expectations. Will definitely shop again.',
      rating: 4,
    },
    {
      name: 'Maham Butt',
      review:
        'Good quality but the delivery was slightly delayed. Overall, happy with the purchase.',
      rating: 3,
    },
  ];

  return (
    <div className="my-10 mt-10 border-t border-white">
      <div className="text-center py-8 text-3xl">
        <Title text1={'CUSTOMER'} text2={'REVIEWS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          maiores porro perspiciatis eaque beatae accusamus quasi necessitatibus
          tempore eveniet debitis!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-600 mb-2 italic">"{review.review}"</p>
            <p className="font-bold text-gray-900 mb-1">{review.name}</p>
            <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
