class Forecast {
  constructor () {
    this.key = 'k7Wwn4S1lCezbzGMrwEPTHAM5DUbTF8y'
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  }

  async updateCity (city) {
    const cityDets = await this.getCity(city)
    const weather = await this.getWeather(cityDets.Key)
    return { cityDets, weather }
  }

  // Get City Location
  async getCity (city) {
    const query = `?apikey=${this.key}&q=${city}`

    const response = await window.fetch(this.cityURI + query)
    const data = await response.json()

    return data[0]
  }

  // Get Weather information
  async getWeather (id) {
    const query = `${id}?apikey=${this.key}`

    const response = await fetch(this.weatherURI + query)
    const data = await response.json()

    return data[0]
  }
}
