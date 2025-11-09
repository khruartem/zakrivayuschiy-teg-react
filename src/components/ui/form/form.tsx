import type { FC } from "react";

import { InputUI } from "../input";
import { ButtonUI } from "../button";
import { Generate } from "../../generate";

import type { TFormUIProps } from "./types";

import styles from "./form.module.css";

export const FormUI: FC<TFormUIProps> = ({
  onSubmit,
  inputRef,
  onChange,
  onReturn,
  isSending,
  sendingError,
  onIsValid,
  values,
  errors,
  isValid,
}) => {
  return (
    <form className={styles.form} noValidate onSubmit={onSubmit}>
      <InputUI
        inputRef={inputRef}
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={values.title || ""}
        error={errors.title}
        onChange={onChange}
        aria-invalid={!!errors.title}
      />
      <InputUI
        type="text"
        name="tag"
        id="tag"
        placeholder="Tag"
        value={values.tag || ""}
        onChange={onChange}
        aria-invalid={false}
      />
      <InputUI
        type="text"
        name="image"
        id="image"
        placeholder="Image"
        value={values.image || ""}
        onChange={onChange}
        aria-invalid={false}
      />
      <InputUI
        type="text"
        name="text"
        id="text"
        placeholder="Text"
        value={values.text || ""}
        error={errors.text}
        onChange={onChange}
        aria-invalid={!!errors.text}
      />
      <div className={styles.buttons}>
        <ButtonUI
          type="submit"
          disabled={isSending || !isValid}
          text={isSending ? "Loading..." : "Save"}
          onClick={onReturn}
        />
        <Generate onIsValid={onIsValid} />
      </div>
      {sendingError && (
        <span className={styles.error}>{`Error: ${sendingError}`}</span>
      )}
    </form>
  );
};
