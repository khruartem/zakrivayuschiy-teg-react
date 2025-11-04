import { getCardApi, getCardsApi } from "../../utils/api";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TCard, uuid } from "../../utils/types";

export const getCards = createAsyncThunk("cards/getAll", async () =>
  getCardsApi()
);

export const getCard = createAsyncThunk("cards/getCard", async (id: uuid) =>
  getCardApi(id)
);

type TCardsState = {
  cards: TCard[];
  cardInfo?: TCard;
  loading: boolean;
  error: string | null | undefined;
};

export const initialState: TCardsState = {
  cards: [],
  cardInfo: undefined,
  loading: false,
  error: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state: TCardsState, action: PayloadAction<TCard>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state: TCardsState, action: PayloadAction<uuid>) => {
      const filteredState = state.cards.filter(
        (card) => card.id !== action.payload
      );
      state.cards = filteredState;
    },
    setLike: (state: TCardsState, action: PayloadAction<uuid>) => {
      state.cards.forEach((card) => {
        if (card.id === action.payload) {
          card.like = !card.like;
        }
      });
    },
  },
  selectors: {
    getCardsSelector: (state) => state.cards,
    getCardSelector: (state) => state.cardInfo,
    getIsCardsLoadingSelector: (state) => state.loading,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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
        state.error = action.error.message;
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cardInfo = action.payload;
      });
  },
});

export const reducer = cardsSlice.reducer;
export const { getCardsSelector, getCardSelector, getIsCardsLoadingSelector } =
  cardsSlice.selectors;
export const { addCard, removeCard, setLike } = cardsSlice.actions;
