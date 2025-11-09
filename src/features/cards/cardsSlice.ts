import {
  addCardApi,
  deleteCardApi,
  editCardApi,
  getCardApi,
  getCardsApi,
} from "../../utils/api";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TCard, TCardData, TEditCardData, uuid } from "../../utils/types";

export const getCards = createAsyncThunk("cards/getAll", async () =>
  getCardsApi()
);

export const getCard = createAsyncThunk("cards/getCard", async (id: uuid) =>
  getCardApi(id)
);

export const addCard = createAsyncThunk(
  "cards/addCard",
  async (data: TCardData) => addCardApi(data)
);

export const editCard = createAsyncThunk(
  "cards/editCard",
  async (data: TEditCardData) => editCardApi(data)
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (id: uuid) => deleteCardApi(id)
);

type TCardsState = {
  cards: TCard[];
  cardInfo?: TCard;
  cardData: TCardData;
  loading: boolean;
  error: string | null;
};

export const initialState: TCardsState = {
  cards: [],
  cardInfo: undefined,
  cardData: {
    title: "",
    image: "",
    text: "",
    like: false,
  },
  loading: false,
  error: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setLike: (state: TCardsState, action: PayloadAction<uuid>) => {
      state.cards.forEach((card) => {
        if (card.id === action.payload) {
          card.like = !card.like;
        }
      });
    },
    setCardData: (state: TCardsState, action: PayloadAction<TCardData>) => {
      state.cardData = { ...state.cardData, ...action.payload };
    },
    clearCardData: (state: TCardsState) => {
      state.cardData = {
        title: "",
        image: "",
        text: "",
        like: false,
      };
    },
  },
  selectors: {
    getCardsSelector: (state) => state.cards,
    getCardSelector: (state) => state.cardInfo,
    getCardDataSelector: (state) => state.cardData,
    getIsLoadingSelector: (state) => state.loading,
    getErrorSelector: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(getCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cardInfo = action.payload;
      })
      .addCase(addCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards.push(action.payload);
      })
      .addCase(deleteCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards = state.cards.filter((card) => card.id !== action.payload);
      })
      .addCase(editCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(editCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const updatedCard = action.payload;
        state.cards = state.cards.map((card) =>
          card.id === updatedCard.id ? updatedCard : card
        );
      });
  },
});

export const reducer = cardsSlice.reducer;
export const {
  getCardsSelector,
  getCardSelector,
  getCardDataSelector,
  getIsLoadingSelector,
  getErrorSelector,
} = cardsSlice.selectors;
export const { setLike, setCardData, clearCardData } = cardsSlice.actions;
