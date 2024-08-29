//Craete a Slice
//create reducers
//export reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");
// Get initial state from localStorage if available
const initialState = {
    currentStep: 1,
    onboardingFormData: {},
};
const onboardingSlice = createSlice({
    name:"onboarding",
    initialState,
       reducers: {
        //functions to amnipulate state
         setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
          },
         
        updateOnboardingFormData: (state, action) => {
            state.onboardingFormData = {
                ...state.onboardingFormData,
                ...action.payload,
            };
        },
    },
});

export const { setCurrentStep,updateOnboardingFormData } = onboardingSlice.actions;
export default onboardingSlice.reducer;