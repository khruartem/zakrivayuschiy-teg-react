import type { FormMethod } from "react-router";
import type { TCard, TCardData, TEditCardData, uuid } from "./types";

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

export const addCardApi = (data: TCardData) =>
  fetch(`${URL}/card`, {
    ...config("POST"),
    body: JSON.stringify(data),
  })
    .then((res) => checkResponse<TCard>(res))
    .then((data) => {
      return data;
    });

export const editCardApi = ({ id, data }: TEditCardData) =>
  fetch(`${URL}/card/${id}`, {
    ...config("PATCH"),
    body: JSON.stringify(data),
  })
    .then((res) => checkResponse<TCard>(res))
    .then((data) => {
      return data;
    });

export const deleteCardApi = (id: uuid) =>
  fetch(`${URL}/card/${id}`, config("DELETE")).then((res) =>
    checkResponse<TCard["id"]>(res).then(() => {
      return id;
    })
  );
