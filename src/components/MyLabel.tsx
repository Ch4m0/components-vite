import "./MyLabel.css";

interface Props {
  /**
   * Este es el Label
   */
  label: string;
  /**
   * Este es el tamaño
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizar label
   */
  allCaps?: boolean;
  /**
   * tipo color
   */

  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   *  color label
   */

  fontColor?: string;
  /**
   * Background color label
   */
  backgroundColor?: string;
}

/**
 *
 * @param param0
 * @returns
 */

const MyLabel = ({
  size,
  label,
  allCaps = false,
  color = "text-primary",
  fontColor = "",
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
