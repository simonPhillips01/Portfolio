const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://simon-phillips-portfolio.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://simon-phillips-portfolio.herokuapp.com',
    'process.env.CLIENT_ID': 'Ynu5NNbuWT1rC11Hp9ASQa24X9lrHfPz'
}