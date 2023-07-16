using System.Net.Http;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using WeatherAppTemplate.Configurations;
using WeatherAppTemplate.Models;

namespace WeatherAppTemplate.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly ILogger<WeatherController> _logger;
        private readonly IHttpClientFactory _clientFactory;
        private readonly AccuWeatherApiConfig _config;

        public WeatherController(ILogger<WeatherController> logger, IHttpClientFactory clientFactory, IOptions<AccuWeatherApiConfig> config)
        {
            _logger = logger;
            _clientFactory = clientFactory;
            _config = config.Value;
        }

        /*
         * This method gets the weather data for the next 5 days for a given city.
         * In order to get the weather data, we first need to get the LocationKey for the city.
         * After that, we can use the LocationKey to get the weather data.
         * 
         * params:
         *    string city - The name of the city.
         *     
         * return:
         *    List<WeatherData> - The weather data for the next 5 days.
         */
        [HttpGet("GetWeatherForCity")]
        public async Task<List<WeatherData>> GetWeatherForCity(string city)
        {
            string apiKey = "urWbfVGIGhZyaNlGGBGy65PpO4iUsAgz"; // Our API key.

            // Create a client to call the AccuWeather API.
            var client = _clientFactory.CreateClient("AccuWeatherClient");

            // This is the URL for the AccuWeather Locations API.
            var locationUrl = $"locations/v1/cities/search?apikey=%20{apiKey}&q={city}";

            // Get the location response from the API.
            HttpResponseMessage? locationResponse = await client.GetAsync(locationUrl);
            locationResponse.EnsureSuccessStatusCode(); // Ensure that the response was successful.

            // Read the response body.
            string locationResponseBody = await locationResponse.Content.ReadAsStringAsync();

            // Parse the response to get the LocationKey.
            // The response is a JSON array and we're interested in the first object.
            JsonDocument document = JsonDocument.Parse(locationResponseBody);
            string locationKey = document.RootElement[0].GetProperty("Key").GetString();

            // Now use the LocationKey to get the weather data for the next 5 days.
            // language = de-DE means that we want the weather data in German.
            // details = true means that we want to get the details for the weather data.
            // metric = true means that we want the temperature in metric units (Celsius).
            var weatherUrl = $"forecasts/v1/daily/5day/{locationKey}?apikey={apiKey}&language=de-DE&details=true&metric=true";

            // Get the weather response from the API.
            HttpResponseMessage? weatherResponse = await client.GetAsync(weatherUrl);
            weatherResponse.EnsureSuccessStatusCode(); // Ensure that the response was successful.

            // Read the response body.
            string weatherResponseBody = await weatherResponse.Content.ReadAsStringAsync();

            // Deserialize the response body into a WeatherForecastRoot object.
            WeatherForecastRoot weatherForecast = JsonConvert.DeserializeObject<WeatherForecastRoot>(weatherResponseBody);

            // Prepare List of WeatherData objects.
            List<WeatherData> weatherDataList = weatherForecast.DailyForecasts
                                                                        .Select(forecast => new WeatherData(forecast, weatherForecast.Headline))
                                                                        .ToList();

            // Return the List of WeatherData objects.
            return weatherDataList;
        }
    }
}

