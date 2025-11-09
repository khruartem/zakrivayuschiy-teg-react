import type { FC } from "react";

import { Layout } from "../../layout";
import { Return } from "../../../return";
import { Form } from "../../../form";

import type { TFormPageUIProps } from "./types";

import styles from "./form.module.css";

export const FormPageUI: FC<TFormPageUIProps> = ({ title, ...form }) => {
  const { returnUrl } = form;

  return (
    <Layout background={"solid"}>
      <Return
        title={title}
        url={returnUrl}
        className={styles["return__title_add-card"]}
      />
      <Form {...form} />
    </Layout>
  );
};
