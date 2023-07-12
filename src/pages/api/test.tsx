export default function (req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      test: 'hola',
    });
  }
}
