namespace WeatherAppTemplate.Models
{
    public class WeatherForecastRoot
    {
        public Headline Headline { get; set; }
        public List<DailyForecast> DailyForecasts { get; set; }
    }

    public class Headline
    {
        public string EffectiveDate { get; set; }
        public int Severity { get; set; }
        public string Text { get; set; }
        public string Category { get; set; }
    }

    public class DailyForecast
    {
        public string Date { get; set; }
        public Sun Sun { get; set; }
        public Moon Moon { get; set; }
        public Temperature Temperature { get; set; }
        public RealFeelTemperature RealFeelTemperature { get; set; }
        public Day Day { get; set; }
        public Night Night { get; set; }
    }

    public class Sun
    {
        public string Rise { get; set; }
        public int EpochRise { get; set; }
        public string Set { get; set; }
        public int EpochSet { get; set; }
        public string Phase { get; set; }
        public int Age { get; set; }
    }

    public class Moon
    {
        public string Rise { get; set; }
        public int EpochRise { get; set; }
        public string Set { get; set; }
        public int EpochSet { get; set; }
        public string Phase { get; set; }
        public int Age { get; set; }
    }

    public class Temperature
    {
        public TemperatureValue Minimum { get; set; }
        public TemperatureValue Maximum { get; set; }
    }

    public class TemperatureValue
    {
        public double Value { get; set; }
        public string Unit { get; set; }
    }

    public class RealFeelTemperature
    {
        public TemperatureValue Minimum { get; set; }
        public TemperatureValue Maximum { get; set; }
    }

    public class Day
    {
        public int Icon { get; set; }
        public string IconPhrase { get; set; }
        public bool HasPrecipitation { get; set; }
        public string PrecipitationType { get; set; }
        public string PrecipitationIntensity { get; set; }
        public int PrecipitationProbability { get; set; }
        public int ThunderstormProbability { get; set; }
        public int RainProbability { get; set; }
        public int SnowProbability { get; set; }
        public int IceProbability { get; set; }
        public Wind Wind { get; set; }
        public WindGust WindGust { get; set; }
        public TotalLiquid TotalLiquid { get; set; }
        public Rain Rain { get; set; }
        public Snow Snow { get; set; }
        public Ice Ice { get; set; }
    }

    public class Night
    {
        public int Icon { get; set; }
        public string IconPhrase { get; set; }
        public bool HasPrecipitation { get; set; }
        public string PrecipitationType { get; set; }
        public string PrecipitationIntensity { get; set; }
        public int PrecipitationProbability { get; set; }
        public int ThunderstormProbability { get; set; }
        public int RainProbability { get; set; }
        public int SnowProbability { get; set; }
        public int IceProbability { get; set; }
        public Wind Wind { get; set; }
        public WindGust WindGust { get; set; }
        public TotalLiquid TotalLiquid { get; set; }
        public Rain Rain { get; set; }
        public Snow Snow { get; set; }
        public Ice Ice { get; set; }
    }

    public class Wind
    {
        public Speed Speed { get; set; }
        public Direction Direction { get; set; }
    }

    public class WindGust
    {
        public Speed Speed { get; set; }
        public Direction Direction { get; set; }
    }

    public class TotalLiquid
    {
        public double Value { get; set; }
        public string Unit { get; set; }
        public int UnitType { get; set; }
    }

    public class Rain
    {
        public double Value { get; set; }
        public string Unit { get; set; }
        public int UnitType { get; set; }
    }

    public class Snow
    {
        public double Value { get; set; }
        public string Unit { get; set; }
        public int UnitType { get; set; }
    }
    public class Ice
    {
        public double Value { get; set; }
        public string Unit { get; set; }
        public int UnitType { get; set; }
    }

    public class Speed
    {
        public double Value { get; set; }
        public string Unit { get; set; }
        public int UnitType { get; set; }
    }

    public class Direction
    {
        public int Degrees { get; set; }
        public string Localized { get; set; }
        public string English { get; set; }
    }
}
