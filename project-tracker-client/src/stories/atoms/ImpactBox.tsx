import React from "react";
import { Box, Typography } from "@mui/material";

export interface ImpactBoxProps {
  level: "low" | "medium" | "high" | "critical" | "internal" /**
   * Optional click handler
   */;
  onClick?: () => void;
}

export const ImpactBox: React.FC<ImpactBoxProps> = ({ level }) => {
  const getColor = (level: ImpactBoxProps["level"]) => {
    switch (level) {
      case "low":
        return "#34C759";
      case "medium":
        return "#4579FF";
      case "high":
        return "#f2994a";
      case "critical":
        return "#EB0000";
      case "internal":
        return "#FFD055";
      default:
        return "#FFFFFF";
    }
  };

  const getText = (level: ImpactBoxProps["level"]) => {
    switch (level) {
      case "low":
        return "Low Impact";
      case "medium":
        return "Medium Impact";
      case "high":
        return "High Impact";
      case "critical":
        return "Customer Critical";
      case "internal":
        return "Internal";
      default:
        return "";
    }
  };

  const backgroundColor = getColor(level);
  const text = getText(level);

  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius: "64px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
      }}
    >
      <Typography variant="h6" color="#fff" fontWeight="bold">
        {text}
      </Typography>
    </Box>
  );
};
