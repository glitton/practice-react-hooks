import React from "react";
import styles from "./Toggle.module.css";

function Toggle2({
  label,
  checked,
  handleToggle,
  backdropColor = "white",
  size = 16,
}) {
  const padding = size * 0.1;
  const width = size * 2 + padding * 2;

  const wrapperStyle = {
    width,
    padding,
    "--radius": size * 0.25 + "px",
    "--backdrop-color": backdropColor,
  };

  const ballStyle = {
    width: size,
    height: size,
    transform: checked ? `translateX(100%)` : `translateX(0%)`,
  };

  const toggleId = React.useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={toggleId}>{label}</label>
      <button
        className={styles.toggle}
        type='button'
        aria-pressed={checked}
        style={wrapperStyle}
        id={toggleId}
        onClick={() => {
          handleToggle(!checked);
        }}
      >
        <span className={styles.ball} style={ballStyle} />
      </button>
    </div>
  );
}

export default Toggle2;
