import feeds from '../../feed/sample.json'

export default (req, res) => {
   res.status(200).json(JSON.stringify(feeds).replace(/\s(?=\w+":)/g, ''))
}
