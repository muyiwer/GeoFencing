import { useCallback, useEffect, useState } from "react";
import { AutocompleteMode } from "../components/map-control.js";

// Custom hook to get latitude and longitude of a location
export const useGeolocation = () => {
  const autocompleteModes: Array<AutocompleteMode> = [
    { id: "classic", label: "Google Autocomplete Widget" },
    { id: "custom", label: "Custom Build" },
    { id: "custom-hybrid", label: "Custom w/ Select Widget" },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [selectedAutocompleteMode, setSelectedAutocompleteMode] =
    useState<AutocompleteMode>(autocompleteModes[0]);

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [center, setCenter] = useState<{ latitude: number; longitude: number }>(
    {
      latitude: 0,
      longitude: 0,
    }
  );

  const handleSearch = () => {};

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          console.error(err.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  return {
    handleSearch,
    setSearchValue,
    searchValue,
    center,
    selectedAutocompleteMode,
    setSelectedAutocompleteMode,
    selectedPlace,
    setSelectedPlace,
    autocompleteModes
  };
};
