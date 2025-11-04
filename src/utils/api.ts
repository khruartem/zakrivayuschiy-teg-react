import type { TCard, uuid } from "./types";

const URL = "https://x8ki-letl-twmt.n7.xano.io/api:fIAfGbkL";

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getCardsApi = () =>
  fetch(`${URL}/card`)
    .then((res) => checkResponse<TCard[]>(res))
    .then((data) => {
      return data;
    });

export const getCardApi = (id: uuid) =>
  fetch(`${URL}/card/${id}`)
    .then((res) => checkResponse<TCard>(res))
    .then((data) => {
      return data;
    });
