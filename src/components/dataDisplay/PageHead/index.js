"use client";

import { useEffect } from "react";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";

function PageHead({ title, description }) {
  const { translate } = useLocaleContext();

  useEffect(() => {
    const t = title ?? translate(TEXTS.HOME_HEAD_TITLE);
    document.title = t;
  }, [title, translate]);

  useEffect(() => {
    if (!description) return;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [description]);

  return null;
}
export default PageHead;
