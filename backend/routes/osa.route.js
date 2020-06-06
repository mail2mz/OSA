

// Post Command to OSA
router.route('/osaEqptPost').post((req, res, next) => {
  alert('osqEqpt/Post Command !')
  axios.post('https://flaskosa.herokuapp.com/cmd/', req.body) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ result from OSA
router.route('/osaEqptGet').get((req, res) => {
  alert('osqEqpt/Post Command !')
  axios.get('https://flaskosa.herokuapp.com/cmd/', req.body) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



module.exports = router;