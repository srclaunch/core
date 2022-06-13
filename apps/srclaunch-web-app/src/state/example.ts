import { Property } from '@azorakapp/azorak-applab-types';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { RootState } from '@srclaunch/web-application-state';
import { DateTime } from 'luxon';

const propertyAdapter = createEntityAdapter<Property>();

export const selectors = propertyAdapter.getSelectors(
  (state: RootState) => state.properties,
);

type PropertyState = {
  error?: Exception | Error;
  in_progress: boolean;
  initialized: boolean;
  last_updated?: DateTime;
};

const propertySlice = createSlice({
  initialState: propertyAdapter.getInitialState<PropertyState>({
    in_progress: false,
    initialized: false,
  }),
  name: 'properties',
  reducers: {
    addProperties: (state, action) => {
      propertyAdapter.upsertMany(state, action.payload);

      if (!state.initialized) {
        state.initialized = true;
      }

      state.last_updated = DateTime.now();
    },
    addProperty: propertyAdapter.upsertOne,
    setInProgress: (state, action) => {
      state.in_progress = action.payload;
    },
  },
});

export async function getProperty() {}

export async function getProperties() {}

export async function createProperty() {}

export async function updateProperty() {}

export async function deleteProperty() {}

export default propertySlice.reducer;
