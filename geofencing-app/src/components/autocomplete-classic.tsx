import { useRef, useEffect, useState, RefObject } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { Button, Form, Input, Radio } from "antd";

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

// This is an example of the classic "Place Autocomplete" widget.
// https://developers.google.com/maps/documentation/javascript/place-autocomplete
export const PlaceAutocompleteClassic = ({ onPlaceSelect }: Props) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="flex gap-2">
      <div className="bg-white p-2 w-[350px] flex flex-col gap-2">
        <div className="flex gap-3 w-[300px]">
          <Radio>Center Point + Radius</Radio>
          <Radio>Administrative Boundaries</Radio>
        </div>
        <div className="flex gap-2 items-end">
          {" "}
          <div className="flex flex-col">
            <label htmlFor="radius">Please set radius</label>
            <Input name="radius" suffix="M" />
          </div>
          <Button className="bg-green-600 text-white">Save</Button>
        </div>
      </div>
      <Input ref={inputRef as any} />
    </div>
  );
};
