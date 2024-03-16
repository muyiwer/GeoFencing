import { Button, Input } from "antd";
import {
  APIProvider,
  Map,
  Marker,
  ControlPosition,
} from "@vis.gl/react-google-maps";
import { useGeolocation } from "../hooks/useGeolocation.js";
import { CustomMapControl } from "./map-control.js";
import MapHandler from "./map-handler.js";
import ControlPanel from "./control-panel.js";

export const GoogleMap = () => {
  const {
    center,
    searchValue,
    setSearchValue,
    handleSearch,
    selectedAutocompleteMode,
    setSelectedPlace,
    autocompleteModes,
    setSelectedAutocompleteMode,
    selectedPlace,
  } = useGeolocation();
  const position = { lat: center.latitude, lng: center.longitude };
  return (
    <div className="flex flex-col gap-3 min-h-[80vh]">
      <div className="flex gap-3 w-1/2">
        {" "}
        <Input
          type="text"
          placeholder="Search for a location"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>{" "}
      <APIProvider apiKey={import.meta.env.VITE_APP_GOOGLE_MAP_KEY}>
        <Map
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={false}
        >
          <CustomMapControl
            controlPosition={ControlPosition.TOP}
            selectedAutocompleteMode={selectedAutocompleteMode}
            onPlaceSelect={setSelectedPlace}
          />
          <ControlPanel
            autocompleteModes={autocompleteModes}
            selectedAutocompleteMode={selectedAutocompleteMode}
            onAutocompleteModeChange={setSelectedAutocompleteMode}
          />

          <MapHandler place={selectedPlace} />
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
};
