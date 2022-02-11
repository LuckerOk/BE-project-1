export const auth = (req, res, next) => {
    try {
        if (req.headers.authorization === process.env.PASSWORD) {
            next();
        } else {
            res.status(401).json({ message: 'Invalid password!' });
        }
    } catch {
        res.status(401).json({ message: 'Invalid request!' });
    }
};
