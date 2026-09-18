import React from "react";
import { styles } from "../../constants/styles";

interface IHeader {
  useMotion?: boolean;
  p?: string;
  h2: string;
  index?: number;
}

export const Header: React.FC<IHeader> = ({ h2 }) => {
  return (
    <header className="section-sticky-header">
      <h2 className={styles.sectionHeadText}>{h2.replace(/\.$/, "")}</h2>
      <hr className="modern-rule" />
    </header>
  );
};
