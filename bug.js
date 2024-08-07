# Assignments with Errors to Fix

For each of the following assignments, there is one intentional error. Your task is to identify and fix the error.

1. **API Configuration Variables (Error: Incorrect use of const)**
   ```javascript`
   const BASE_URL = 'https://api.example.com/v1';
   let API_KEY = 'your-api-key-here';

   API_KEY = 'new-api-key'; // This line should cause an error

   console.log(BASE_URL);
 
 
   console.log(API_KEY);
   ```

2. **Simple API URL Constructor (Error: Missing base URL)**
   ``javascript`
   function constructApiUrl(endpoint) {
    const BASE_URL = "https://api.example.com/v1";
    const url = new URL(`${BASE_URL}/${endpoint}`);
    return `${BASE_URL}/${endpoint}`;
  }
  console.log(constructApiUrl("weather" ));

   // Expected output: https://api.example.com/v1/weather
   ```

3. **Basic API Response Object (Error: Incorrect nesting of properties)**
   ```javascript
   const apiResponse = {
    status: 200,
    data: {
      temperature: 22,
      humidity: 60,
      windSpeed: 5,
    },
    error: null,
  };

  console.log(JSON.stringify(apiResponse, null, 2));
   ```

4. **API Endpoints Array (Error: Duplicate endpoint)**
   ```javascript
   const weatherEndpoints = [
    'current',
    'forecast',
    'historical',
    'alerts'
  ];

  console.log(weatherEndpoints);

   ```

5. **Simple Data Transformation (Error: Incorrect property access)**
   ```javascript
   function simplifyweatherData(dataa) {
    return dataa.map((data) => ({
      
      temp: data.main.temp,
    }));
  }
  
  const weatherData = [
    {
      
      main: { temp: 22, humidity: 60 },
      
    },
   
  ];
  
  console.log(simplifyweatherData(weatherData));
  /* Output:
  [
    { date: '2023-07-01', temp: 22 },
    { date: '2023-07-02', temp: 24 }
  ]
  */
   ```

6. **Basic API Result Filter (Error: Incorrect comparison operator)**
   ```javascript
   function filterHotDays(temperatures) {
    return temperatures.filter(temp => temp >= 30);
  }
  const temps = [28, 32, 30, 25, 35];
     console.log(filterHotDays(temps));
   // Expected output: [32, 30, 35]
   ```

7. **Simple Error Handler (Error: Missing condition check)**
   ```javascript
   function handleApiError({status,message,errors}) {
    if(status =200){
       console.error(`Error ${status}: ${message}`);
       if (errors) {
        errors.forEach((err) => console.error(`- ${err}`));
  }
    }
  }
  handleApiError({
    status:200,
    message: "OK",
    errors:["Should not log anything for status 200"]
  });
  
  
   // Should not log anything for status 200
   ```

8. **Basic Async API Call (Error: Missing await keyword)**
   ```javascript
   async function fetchWeather(city) {
    try {
      const response = await fetch(`https://api.example.com/weather?city=${city}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API call failed:", error);
    }
  }
  
  // Usage (in an async context):
  const data =await fetchWeather("london");
  console.log(data);
   ```

9. **Simple Data Processing Chain (Error: Incorrect function call)**
   ```javascript
   function fetchData() {
    return Promise.resolve([1, 2, 3, 4, 5]);
  }
  
  function processData(data) {
    return data.map(n => n * 2);
  }
  
  async function getProcessedData() {
    const rawData =await fetchData();
    return processData(rawData);
  }
  
  getProcessedData().then(console.log);
   ```

10. **Basic Rate Limiter (Error: Incorrect time comparison)**
    ```javascript
    function createRateLimiter(limit, interval) {
      let calls = 0;
      let startTime = Date.now();
    
      return function() {
        const currentTime = Date.now();
        if (currentTime - startTime >= interval) {
          calls = 0;
          startTime = currentTime;
        }
    
        if (calls < limit) {
          calls++;
          return true;
        } else {
          return false;
        }
      };
    }
    
    const rateLimiter = createRateLimiter(3, 1000); // 3 calls per second
    console.log(rateLimiter()); // true
    console.log(rateLimiter()); // true
    console.log(rateLimiter()); // true
    console.log(rateLimiter()); // Should be false, but might be true

For each assignment, try to identify the error and propose a fix. This exercise will help you improve your debugging skills and deepen your understanding of these JavaScript concepts in the context of API interactions.