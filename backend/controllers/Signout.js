const signout = (req, res) => {
    delete req.session
    return res.json({ message: 'Signed out.' })
}

module.exports = signout