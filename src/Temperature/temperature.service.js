const axios = require('axios');

async function getTemperature() {
  const { data } = await axios.get(process.env['WEATHER_URL']);
  return data.current.temp;
}

module.exports = { getTemperature };
