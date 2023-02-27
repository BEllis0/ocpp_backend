import express from 'express';
import placeholderRoute from './placeholderRoute';

const router = express.Router({});

router.use((req, res, next) => {
  console.log('Routing in indexRoute');
  next();
});

router.use('/placehoilder', placeholderRoute);
export default router;
