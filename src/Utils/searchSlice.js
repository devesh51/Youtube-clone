import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // console.log(action.payload); // {i: Array(10)}   i(serachQuery): ['ishowspeed', 'i wanna be yours', 'i love you', 'ice spice', 'itzy', 'indila', 'interstellar', 'ibrahim tatlıses', 'indian songs', 'ive'](array of suggestions)
      // console.log(state); // initialally my state is empty object {}  // Proxy(Object) {type_: 0, scope_: {…}, modified_: false, finalized_: false, assigned_: {…}, …}
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

// cache:
// time complexity for search in Array = O(n)
// time complexity for search in Object = O(1) // hash map, map, object
