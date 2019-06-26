const express = require('express');
const router = express.Router();

const blogCtrl = require('../controllers/blog');
const authService = require('../services/auth');

router.post('', authService.checkJWT,
                authService.checkRole('siteOwner'),
                blogCtrl.createBlog);

module.exports = router;