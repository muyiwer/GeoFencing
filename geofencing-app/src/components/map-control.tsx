
import {ControlPosition, MapControl} from '@vis.gl/react-google-maps';

import {PlaceAutocompleteClassic} from './autocomplete-classic.js';
import {AutocompleteCustom} from './autocomplete-custom.js';

import {AutocompleteCustomHybrid} from './autocomplete-custom-hybrid.js';

export type AutocompleteMode = {id: string; label: string};
type CustomAutocompleteControlProps = {
  controlPosition: ControlPosition;
  selectedAutocompleteMode: AutocompleteMode;
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

export const CustomMapControl = ({
  controlPosition,
  selectedAutocompleteMode,
  onPlaceSelect
}: CustomAutocompleteControlProps) => {
  const {id} = selectedAutocompleteMode;

  return (
    <MapControl position={controlPosition}>
      <div className="autocomplete-control">
        {id === 'classic' && (
          <PlaceAutocompleteClassic onPlaceSelect={onPlaceSelect} />
        )}

        {id === 'custom' && (
          <AutocompleteCustom onPlaceSelect={onPlaceSelect} />
        )}

        {id === 'custom-hybrid' && (
          <AutocompleteCustomHybrid onPlaceSelect={onPlaceSelect} />
        )}
      </div>
    </MapControl>
  );
};