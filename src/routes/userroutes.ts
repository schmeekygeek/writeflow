import express from "express";

const router = express.Router()

router.get('/hello', function(req, res) {
  res.send('Hello from user')
})

export default router
