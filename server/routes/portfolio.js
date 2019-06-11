const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio');
const authService = require('../services/auth');

router.post('', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                portfolioController.savePortfolio);

router.get('', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                portfolioController.getPortfolios);

router.patch('/:id', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                portfolioController.updatePortfolio);

router.delete('/:id', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                portfolioController.deletePortfolio);                

module.exports = router;