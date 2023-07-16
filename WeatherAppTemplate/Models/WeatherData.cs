namespace WeatherAppTemplate.Models
{
    public class WeatherData
    {
        public string Date { get; set; }
        public double MinTemperature { get; set; }
        public double MaxTemperature { get; set; }
        public RealFeelTemperature RealFeelTemperature { get; set; }
        public Headline Headline { get; set; }
        public Day Day { get; set; }
        public Night Night { get; set; }
        public Sun Sun { get; set; }
        public Moon Moon { get; set; }


        public WeatherData(DailyForecast forecast, Headline headline)
        {
            Headline = headline;
            Date = forecast.Date;
            MinTemperature = forecast.Temperature.Minimum.Value;
            MaxTemperature = forecast.Temperature.Maximum.Value;
            RealFeelTemperature = forecast.RealFeelTemperature;
            Day = forecast.Day;
            Night = forecast.Night;
            Sun = forecast.Sun;
            Moon = forecast.Moon;
        }
    }
}




