import React, { useState } from 'react';
import { FiStar, FiUser, FiCalendar, FiFilter } from 'react-icons/fi';

const DeveloperReviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      client: 'Sarah Johnson',
      project: 'E-commerce Website',
      rating: 5,
      comment: 'Excellent work! The developer delivered exactly what we needed on time and within budget. Great communication throughout the project.',
      date: '2024-01-15',
      avatar: null
    },
    {
      id: 2,
      client: 'Mike Chen',
      project: 'Mobile App Backend',
      rating: 4,
      comment: 'Very professional and skilled developer. The API was well-documented and performed great. Would definitely work with again.',
      date: '2024-01-10',
      avatar: null
    },
    {
      id: 3,
      client: 'Emily Davis',
      project: 'WordPress Plugin',
      rating: 5,
      comment: 'Outstanding developer! Created a custom plugin that exceeded our expectations. Fast delivery and excellent code quality.',
      date: '2024-01-05',
      avatar: null
    },
    {
      id: 4,
      client: 'David Wilson',
      project: 'React Dashboard',
      rating: 4,
      comment: 'Good work overall. The dashboard looks great and functions well. Minor issues were quickly resolved.',
      date: '2023-12-28',
      avatar: null
    },
    {
      id: 5,
      client: 'Lisa Anderson',
      project: 'Database Optimization',
      rating: 5,
      comment: 'Incredible expertise in database optimization. Our application performance improved significantly. Highly recommended!',
      date: '2023-12-20',
      avatar: null
    }
  ]);

  const [filterRating, setFilterRating] = useState('all');

  const filteredReviews = reviews.filter(review => 
    filterRating === 'all' || review.rating === parseInt(filterRating)
  );

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const StarRating = ({ rating, size = 16 }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar
          key={star}
          size={size}
          className={`${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  const ReviewCard = ({ review }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <div className="w-10 h-10 bg-[#d97757] rounded-full flex items-center justify-center mr-3">
            <FiUser size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{review.client}</h4>
            <p className="text-sm text-gray-600">{review.project}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <StarRating rating={review.rating} />
          <span className="text-sm font-medium text-gray-700">{review.rating}.0</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{review.comment}</p>
      
      <div className="flex items-center text-sm text-gray-500">
        <FiCalendar size={14} className="mr-1" />
        <span>{new Date(review.date).toLocaleDateString()}</span>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Reviews & Ratings</h2>
        <p className="text-gray-600">See what clients are saying about your work</p>
      </div>

      {/* Rating Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Average Rating */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d97757] mb-2">
              {averageRating.toFixed(1)}
            </div>
            <StarRating rating={Math.round(averageRating)} size={20} />
            <p className="text-sm text-gray-600 mt-2">
              Based on {reviews.length} reviews
            </p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 lg:col-span-2">
          <h3 className="font-semibold text-gray-800 mb-4">Rating Distribution</h3>
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center">
                <span className="text-sm text-gray-600 w-8">{rating}</span>
                <FiStar size={16} className="text-yellow-400 fill-current mr-2" />
                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-[#d97757] h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <FiFilter size={20} className="text-gray-600" />
            <span className="text-gray-700">Filter by rating:</span>
          </div>
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="grid gap-6">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No reviews found for the selected rating.</p>
        </div>
      )}
    </div>
  );
};

export default DeveloperReviews;
