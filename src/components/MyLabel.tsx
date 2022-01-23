import React from "react";
import "./mylabel.css";
import { AllCaps } from "../stories/components/MyLabel.stories";

export interface MyLabelProps {
  /**
   * Esta es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Como será el tamaño de la etiqueta?
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Establece mayusculas en la etiqueta
   */
  allCaps?: boolean;
  /**
   * Colores basicos del boton
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Selector color texto
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={` label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
