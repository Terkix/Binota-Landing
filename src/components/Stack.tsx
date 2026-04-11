import React from "react";

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  spacing?: number | string;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  children: React.ReactNode;
  sx?: React.CSSProperties;
};

const Stack: React.FC<StackProps> = ({
  children,
  direction = "row",
  spacing = 0,
  align = "stretch",
  justify = "flex-start",
  sx,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: spacing,
        ...sx,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
