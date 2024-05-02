const ReviewsInfo = ({ reviewsData }) => {
  console.log(reviewsData);
  return reviewsData && reviewsData.length > 0 ? (
    reviewsData.map(({ author, content, id }) => (
      <div key={id}>
        <h3>{author}</h3>
        <p>{content}</p>
      </div>
    ))
  ) : (
    <p>N/A</p>
  );
};

export default ReviewsInfo;
