// import { useLayoutEffect, useRef, type FC, type FormEvent } from "react";
// import { useNavigate } from "react-router";

// import { AddCardUI } from "../../components/ui/pages/add-card";

// import { useGetIsLoading } from "../../hooks/useGetIsLoading";
// import { useGetError } from "../../hooks/useGetError";
// import { useFormWithValidation } from "../../hooks/useFormWithValidation";

// import type { TCardData, TCardDataValidation } from "../../utils/types";
// import { formValidators } from "../../utils/formValidators";

// import { useDispatch } from "../../services/store";
// import {
//   addCard,
//   getCardDataSelector,
//   setCardData,
// } from "../../features/cards/cardsSlice";

// export const AddCard: FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const isSending = useGetIsLoading();
//   const sendingError = useGetError();

//   const returnUrl = "/cards";
//   const handleReturn = (url: string) => {
//     navigate(url);
//   };

//   useLayoutEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   const { values, handleChange, errors, isValid } = useFormWithValidation<
//     TCardData,
//     TCardDataValidation
//   >(getCardDataSelector, setCardData, formValidators);

//   const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
//     evt.preventDefault();
//     dispatch(addCard(values));
//   };
//   return (
//     <AddCardUI
//       form={{
//         onSubmit: handleSubmit,
//         inputRef,
//         values,
//         errors,
//         onChange: handleChange,
//         onReturn: () => handleReturn(returnUrl),
//         isSending,
//         isValid,
//         sendingError,
//       }}
//       returnUrl={returnUrl}
//     />
//   );
// };

import { type FC, type FormEvent } from "react";

import { FormPageUI } from "../../components/ui/pages/form";

import type { TCardData } from "../../utils/types";

import { useDispatch } from "../../services/store";
import { addCard } from "../../features/cards/cardsSlice";

export const AddCard: FC = () => {
  const dispatch = useDispatch();

  const returnUrl = "/cards";

  const handleSubmit = (evt: FormEvent<HTMLFormElement>, values: TCardData) => {
    evt.preventDefault();
    dispatch(addCard(values));
  };
  return (
    <FormPageUI
      title="add card"
      onSubmit={handleSubmit}
      returnUrl={returnUrl}
    />
  );
};
