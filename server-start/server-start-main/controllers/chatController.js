// const { OpenAIApi, Configuration } = require('openai');

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const getContextualResponse = async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: message,
//       max_tokens: 150,
//     });

//     res.json({ response: response.data.choices[0].text });
//   } catch (error) {
//     console.error('Error fetching response from OpenAI:', error);
//     res.status(500).json({ error: 'Error fetching response from OpenAI' });
//   }
// };

// module.exports = { getContextualResponse };
