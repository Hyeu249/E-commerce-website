import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    user: false,
    infoShirt: {},
    uploadedPngs: [],
    customTextOnShirt: [],
  },
  reducers: {
    loginHandle: (state, actions) => {
      state.user = actions.payload;
    },
    uploadPngHandle: (state, { payload }) => {
      state.uploadedPngs.push(payload);
    },
    certifyInfoShirtHandle: (state, { payload }) => {
      state.infoShirt.complete = payload;
    },
    updatePriceShirtHandle: (state, { payload }) => {
      state.infoShirt.png = payload.png;
      state.infoShirt.text = payload.text;
      state.infoShirt.price = payload.price;
    },
    deletePngHandle: (state, { payload }) => {
      const notMyText = state.uploadedPngs.filter(
        state => state.id !== payload
      );
      state.uploadedPngs = notMyText;
    },
    customTextHandle: (state, actions) => {
      state.customTextOnShirt.unshift(actions.payload);
    },
    changePropsTextHandle: (state, { payload }) => {
      const notMyText = state.customTextOnShirt.filter(
        state => state.id !== payload.id
      );
      notMyText.push(payload);
      state.customTextOnShirt = notMyText;
    },
    deleteTextCustomHandle: (state, { payload }) => {
      const notMyText = state.customTextOnShirt.filter(
        state => state.id !== payload
      );
      state.customTextOnShirt = notMyText;
    },
    mutateWidthTextHandle: (state, { payload }) => {
      const notMyText = state.customTextOnShirt.filter(
        state => state.id !== payload.id
      );
      const myText = state.customTextOnShirt.filter(
        state => state.id === payload.id
      )[0];
      if (payload.operator === "plus") {
        myText[payload.acreage] = myText[payload.acreage] + 1;
      }
      if (payload.operator === "minus") {
        myText[payload.acreage] = myText[payload.acreage] - 1;
      }
      notMyText.push(myText);
      if (myText) state.customTextOnShirt = notMyText;
    },
    displayPositionTextHandle: (state, { payload }) => {
      const notMyText = state.customTextOnShirt.filter(
        state => state.id !== payload.id
      );
      const myText = state.customTextOnShirt.filter(
        state => state.id === payload.id
      )[0];
      //
      const textRef = document.getElementById(payload.id);
      const fatherTextRef = document.getElementById("brotherOfAnotherFather");
      const rectCustomText = textRef?.getBoundingClientRect();
      const FatherCustomTextRect = fatherTextRef?.getBoundingClientRect();
      myText.left = Math.round(
        rectCustomText?.left - FatherCustomTextRect?.left
      );
      myText.top = Math.round(rectCustomText?.top - FatherCustomTextRect?.top);
      myText.right = Math.round(
        FatherCustomTextRect?.right - rectCustomText?.right
      );
      myText.bottom = Math.round(
        FatherCustomTextRect?.bottom - rectCustomText?.bottom
      );
      notMyText.push(myText);
      if (myText) state.customTextOnShirt = notMyText;
    },
    mutateFontTextHandle: (state, { payload }) => {
      const notMyText = state.customTextOnShirt.filter(
        state => state.id !== payload.id
      );
      const myText = state.customTextOnShirt.filter(
        state => state.id === payload.id
      )[0];
      if (payload.type === "fontFamily") myText.fontFamily = payload.fontFamily;
      if (payload.type === "fontWeight") myText.fontWeight = payload.fontWeight;
      if (payload.type === "fontSize") myText.fontSize = payload.fontSize;
      if (payload.type === "color") myText.color = payload.color;
      if (payload.type === "spacing") myText.spacing = payload.spacing;
      if (payload.type === "lineHeight") myText.lineHeight = payload.lineHeight;
      if (payload.type === "textAlign") myText.textAlign = payload.textAlign;

      notMyText.push(myText);
      if (myText) state.customTextOnShirt = notMyText;
    },
    // end Reducers
  },
});

export const {
  loginHandle,
  uploadPngHandle,
  customTextHandle,
  changePropsTextHandle,
  mutateWidthTextHandle,
  displayPositionTextHandle,
  mutateFontTextHandle,
  deleteTextCustomHandle,
  deletePngHandle,
  updatePriceShirtHandle,
  certifyInfoShirtHandle,
} = globalSlice.actions;

export default globalSlice.reducer;
