import type { FormMethod } from "react-router";
import type { TCard, TCardData, uuid } from "./types";

const URL = "https://x8ki-letl-twmt.n7.xano.io/api:fIAfGbkL";

const config = (method: FormMethod) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getCardsApi = () =>
  fetch(`${URL}/card`, config("GET"))
    .then((res) => checkResponse<TCard[]>(res))
    .then((data) => {
      return data;
    });

export const getCardApi = (id: uuid) =>
  fetch(`${URL}/card/${id}`, config("GET"))
    .then((res) => checkResponse<TCard>(res))
    .then((data) => {
      return data;
    });

export const createCardApi = (data: TCardData) =>
  fetch(`${URL}/card`, {
    ...config("POST"),
    body: JSON.stringify(data),
  })
    .then((res) => checkResponse<TCard>(res))
    .then((data) => {
      return data;
    });
