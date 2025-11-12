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
import type {
  TCard,
  TCardData,
  TEditCardData,
  TFilter,
  TFilterItem,
  TFilterSerachTerm,
  uuid,
} from "../../utils/types";
import { createSelector } from "reselect";

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
  filter: TFilter;
  loading: boolean;
  loadingEdit: boolean;
  loadingDetete: boolean;
  error: string | null;
};

export const initialState: TCardsState = {
  cards: [],
  cardInfo: undefined,
  filter: {
    activeItem: "all",
    searchTerm: "",
  },
  cardData: {
    title: "",
    image: "",
    text: "",
    like: false,
  },
  loading: false,
  loadingEdit: false,
  loadingDetete: false,
  error: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
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
    setFilterItem: (state, action: PayloadAction<TFilterItem>) => {
      state.filter.activeItem = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<TFilterSerachTerm>) => {
      state.filter.searchTerm = action.payload;
    },
  },
  selectors: {
    getCardsSelector: (state) => state.cards,
    getCardSelector: (state) => state.cardInfo,
    getCardDataSelector: (state) => state.cardData,
    getIsLoadingSelector: (state) => state.loading,
    getIsLoadingEditSelector: (state) => state.loadingEdit,
    getIsLoadingDeleteSelector: (state) => state.loadingDetete,
    getErrorSelector: (state) => state.error,
    getFilterActiveItemSelector: (state) => state.filter.activeItem,
    getFilterSearchTermSelector: (state) => state.filter.searchTerm,
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
        state.loadingDetete = true;
        state.error = null;
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loadingDetete = false;
        state.error = action.error.message ?? null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loadingDetete = false;
        state.error = null;
        state.cards = state.cards.filter((card) => card.id !== action.payload);
      })
      .addCase(editCard.pending, (state) => {
        state.loadingEdit = true;
        state.error = null;
      })
      .addCase(editCard.rejected, (state, action) => {
        state.loadingEdit = false;
        state.error = action.error.message ?? null;
      })
      .addCase(editCard.fulfilled, (state, action) => {
        state.loadingEdit = false;
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
  getIsLoadingEditSelector,
  getIsLoadingDeleteSelector,
  getFilterActiveItemSelector,
  getFilterSearchTermSelector,
} = cardsSlice.selectors;
export const { setCardData, clearCardData, setFilterItem, setSearchTerm } =
  cardsSlice.actions;

export const selectFilteredCards = createSelector(
  [getCardsSelector, getFilterActiveItemSelector, getFilterSearchTermSelector],
  (allCards, filterItem, searchTerm) => {
    switch (filterItem) {
      case "all":
        return search(allCards, searchTerm);
      case "liked": {
        const likedCards = allCards.filter((card) => card.like);
        return search(likedCards, searchTerm);
      }
    }
  }
);

const search = (cards: TCard[], searchTerm: string) => {
  if (!searchTerm) {
    return cards;
  }
  return cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
