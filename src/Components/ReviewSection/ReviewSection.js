import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    user: "Jess Hopkins",
    avatarColor: "bg-red-500",
    rating: 4.5,
    date: "Feb 13, 2024",
    review: "Gorgeous design! Such an elegant clothing wow. A pleasure to use!",
  },
  {
    id: 2,
    user: "Alice Banks",
    avatarColor: "bg-yellow-500",
    rating: 5,
    date: "May 16, 2024",
    review:
      "The cloth has a clean design and it is very comfortable to wear as well. Soft material makes it a pleasure to wear. A fantastic product indeed!",
  },
];

export default function ReviewSection() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="flex justify-center items-center py-10 w-full">
      <div className="w-full max-w-5xl px-6 lg:px-32">
        <h1 className="text-lg font-semibold text-center border border-gray-300 p-4 mb-6">
          Reviews
        </h1>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div className="p-4 border border-gray-300 rounded-lg" key={review.id}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex justify-center items-center ${review.avatarColor} text-white`}
                  >
                    {review.user.charAt(0)}
                  </div>
                  <span className="font-medium">{review.user}</span>
                </div>
                <div className="flex items-center text-orange-300 gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="mb-4">{review.review}</p>
              <div className="flex justify-end">
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
