import { lazy, Suspense, useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

import { fetchWeather } from "../utils/api";

const Sunny = lazy(() => import("../weathers/Sunny"));
const Rainy = lazy(() => import("../weathers/Rainy"));
const Cloudy = lazy(() => import("../weathers/Cloudy"));

function App() {
  const [weather, setWeather] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        const weather = await fetchWeather();
        if (!didCancel) {
          setWeather(weather);
        }
      } catch {
        if (!didCancel) {
          setIsError(true);
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  const renderWeather = () => {
    if (isError) {
      return <ErrorPage />;
    }
    switch (weather?.weather) {
      case "sunny":
        return <Sunny />;
      case "cloudy":
        return <Cloudy />;
      case "rainy":
        return <Rainy />;
      default:
        return <LoadingPage />;
    }
  };

  return (
    <Suspense fallback={<LoadingPage />}>
      <ErrorPage />
      {/* {renderWeather()} */}
    </Suspense>
  );
}

export default App;
