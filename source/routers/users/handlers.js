export const get = (req, res) => {
    try {
        res.status(200).json({ data: [{ hash: '10ba038e-48da-487b-96e8-8d3b99b6d18a' }] });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    try {
        res.status(201).json({ data: { hash: '10ba038e-48da-487b-96e8-8d3b99b6d18a' } });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
