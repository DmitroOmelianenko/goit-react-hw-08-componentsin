import React from "react";

export const Section = ({ title, children }) => {
  return (
    <section style={{ marginBottom: "20px" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
