export interface WeatherData {
  temperature: number;
  humidity: number;
  precipitation: number;
  sunshine_hours: number;
  condition: string;
  wind_speed: number;
}

export interface MoodData {
  overall: number;
  energy: number;
  motivation: number;
  stress: number;
  social_desire: number;
}

export interface WeatherMoodEntry {
  date: string;
  weather: WeatherData;
  mood: MoodData;
  activities: string[];
}

export const weatherMoodData: WeatherMoodEntry[] = [
  {
    date: "2024-01-15",
    weather: {
      temperature: 22,
      humidity: 65,
      precipitation: 0,
      sunshine_hours: 8,
      condition: "sunny",
      wind_speed: 12
    },
    mood: {
      overall: 8,
      energy: 7,
      motivation: 8,
      stress: 3,
      social_desire: 7
    },
    activities: ["workout", "outdoor_walk", "social_meeting"]
  },
  {
    date: "2024-01-16",
    weather: {
      temperature: 18,
      humidity: 80,
      precipitation: 5,
      sunshine_hours: 2,
      condition: "rainy",
      wind_speed: 8
    },
    mood: {
      overall: 5,
      energy: 4,
      motivation: 6,
      stress: 6,
      social_desire: 4
    },
    activities: ["indoor_work", "reading", "netflix"]
  },
  {
    date: "2024-01-17",
    weather: {
      temperature: 15,
      humidity: 90,
      precipitation: 15,
      sunshine_hours: 0,
      condition: "stormy",
      wind_speed: 25
    },
    mood: {
      overall: 4,
      energy: 3,
      motivation: 5,
      stress: 8,
      social_desire: 2
    },
    activities: ["stayed_home", "comfort_food", "early_bed"]
  },
  {
    date: "2024-01-18",
    weather: {
      temperature: 20,
      humidity: 70,
      precipitation: 0,
      sunshine_hours: 6,
      condition: "partly_cloudy",
      wind_speed: 10
    },
    mood: {
      overall: 7,
      energy: 6,
      motivation: 7,
      stress: 4,
      social_desire: 6
    },
    activities: ["work", "light_exercise", "cooking"]
  },
  {
    date: "2024-01-19",
    weather: {
      temperature: 25,
      humidity: 55,
      precipitation: 0,
      sunshine_hours: 10,
      condition: "sunny",
      wind_speed: 8
    },
    mood: {
      overall: 9,
      energy: 8,
      motivation: 9,
      stress: 2,
      social_desire: 8
    },
    activities: ["hiking", "outdoor_sports", "picnic"]
  },
  {
    date: "2024-01-20",
    weather: {
      temperature: 12,
      humidity: 85,
      precipitation: 8,
      sunshine_hours: 1,
      condition: "overcast",
      wind_speed: 15
    },
    mood: {
      overall: 5,
      energy: 4,
      motivation: 5,
      stress: 6,
      social_desire: 3
    },
    activities: ["indoor_work", "movie", "comfort_food"]
  },
  {
    date: "2024-01-21",
    weather: {
      temperature: 28,
      humidity: 45,
      precipitation: 0,
      sunshine_hours: 12,
      condition: "hot_sunny",
      wind_speed: 5
    },
    mood: {
      overall: 8,
      energy: 7,
      motivation: 8,
      stress: 3,
      social_desire: 9
    },
    activities: ["beach", "swimming", "bbq", "outdoor_games"]
  },
  {
    date: "2024-01-22",
    weather: {
      temperature: 16,
      humidity: 75,
      precipitation: 12,
      sunshine_hours: 3,
      condition: "rainy",
      wind_speed: 12
    },
    mood: {
      overall: 6,
      energy: 5,
      motivation: 6,
      stress: 5,
      social_desire: 4
    },
    activities: ["indoor_work", "reading", "cozy_time"]
  },
  {
    date: "2024-01-23",
    weather: {
      temperature: 19,
      humidity: 60,
      precipitation: 0,
      sunshine_hours: 7,
      condition: "clear",
      wind_speed: 8
    },
    mood: {
      overall: 7,
      energy: 6,
      motivation: 7,
      stress: 4,
      social_desire: 6
    },
    activities: ["work", "evening_walk", "social_meeting"]
  },
  {
    date: "2024-01-24",
    weather: {
      temperature: 14,
      humidity: 90,
      precipitation: 20,
      sunshine_hours: 0,
      condition: "heavy_rain",
      wind_speed: 20
    },
    mood: {
      overall: 4,
      energy: 3,
      motivation: 4,
      stress: 7,
      social_desire: 2
    },
    activities: ["stayed_home", "comfort_food", "extra_sleep", "indoor_hobbies"]
  },
  {
    date: "2024-01-25",
    weather: {
      temperature: 23,
      humidity: 50,
      precipitation: 0,
      sunshine_hours: 9,
      condition: "sunny",
      wind_speed: 6
    },
    mood: {
      overall: 8,
      energy: 7,
      motivation: 8,
      stress: 3,
      social_desire: 7
    },
    activities: ["outdoor_work", "gardening", "social_meeting"]
  },
  {
    date: "2024-01-26",
    weather: {
      temperature: 17,
      humidity: 70,
      precipitation: 3,
      sunshine_hours: 4,
      condition: "drizzle",
      wind_speed: 10
    },
    mood: {
      overall: 6,
      energy: 5,
      motivation: 6,
      stress: 5,
      social_desire: 5
    },
    activities: ["indoor_work", "light_exercise", "movie"]
  },
  {
    date: "2024-01-27",
    weather: {
      temperature: 26,
      humidity: 40,
      precipitation: 0,
      sunshine_hours: 11,
      condition: "perfect_sunny",
      wind_speed: 4
    },
    mood: {
      overall: 9,
      energy: 8,
      motivation: 9,
      stress: 2,
      social_desire: 9
    },
    activities: ["outdoor_sports", "hiking", "beach", "social_meeting"]
  },
  {
    date: "2024-01-28",
    weather: {
      temperature: 13,
      humidity: 80,
      precipitation: 6,
      sunshine_hours: 2,
      condition: "cloudy",
      wind_speed: 14
    },
    mood: {
      overall: 5,
      energy: 4,
      motivation: 5,
      stress: 6,
      social_desire: 3
    },
    activities: ["indoor_work", "reading", "comfort_food"]
  },
  {
    date: "2024-01-29",
    weather: {
      temperature: 21,
      humidity: 55,
      precipitation: 0,
      sunshine_hours: 8,
      condition: "sunny",
      wind_speed: 7
    },
    mood: {
      overall: 7,
      energy: 6,
      motivation: 7,
      stress: 4,
      social_desire: 6
    },
    activities: ["work", "outdoor_walk", "cooking"]
  }
]; 