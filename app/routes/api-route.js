const Router = require('express').Router;
const { ratingsAndReviews, myReviews, getRatingsAndReviews, getEntityIdRatingsAndReviews, getAverageRatings, patchReportReviews } = require('../middlewares');

const router = Router();

// Add a new RatingsAndReviews
router.post('/ratingsAndReviews', ratingsAndReviews);

// Get all RatingsAndReviews for a specific user
router.get('/myReviews', myReviews);

// Get all RatingsAndReviews for a specific entity(product/seller)
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);

// Get all RatingsAndReviews for a specific entity(product/seller)
router.get('/reviews', getEntityIdRatingsAndReviews);

// Reports one review
router.patch('/reviews/report', patchReportReviews);

// Get average Ratings for a specific entity
router.get('/averageRatings', getAverageRatings);

module.exports = router;
