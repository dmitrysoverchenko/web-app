import { styled } from "@mui/material/styles";
import { Container, Box, Typography } from "@mui/material";

export const StyledColumnContainer = styled(Container)(() => ({
  background: "#eeeded",
  marginBottom: "5px",
  marginTop: "5px",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
}));

export const StyledRowContainer = styled(Container)(() => ({
  background: "#eeeded",
  marginBottom: "5px",
  marginTop: "5px",
  padding: "5px",
  display: "flex",
}));

export const StyledBox = styled(Box)(() => ({
  background: "#ffffff",
  marginBottom: "5px",
  marginTop: "5px",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
}));

export const StyledTitle = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: "bold",
  padding: "3px",
  color: "#000000",
}));

export const StyledParagraph = styled(Typography)(() => ({
  fontSize: "15px",
  fontWeight: "bold",
  padding: "3px",
  color: "#000000",
}));

export const StyledSpan = styled(Typography)(() => ({
  fontSize: "15px",
  padding: "3px",
  color: "#a1a1a1",
}));
