import { style } from "@vanilla-extract/css";
import { vars } from "css-presets";

export const container = style({
  display: "flex",
  height: "98vh",
  width: "98vw",
});

export const mainContent = style({
  display: "flex",
  flex: "1 0 0",
});

export const sidebar = style({
  width: 175,
  height: "100%",
  marginRight: "20px",
  display: "flex",
  flexDirection: "column",
  padding: 15,
});

export const chatContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const chatArea = style({
  flexGrow: 1,
  overflowY: "auto",
  marginBottom: "20px",
});

export const message = style({
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  backgroundColor: "#f3f3f3",
});

export const input = style({
  width: "100%",
});

export const chatButton = style({
  marginBottom: "10px",
});

/* header */
export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 20,
});

/* Multi select */
export const featureSelect = style({
  width: 150,
});

/* Navigation */
export const leftNav = style({
  width: "100px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  height: "100%",
  borderRight: "solid 1px gray",
});

export const navButton = style({
  marginBottom: "10px",
  textAlign: "center",
  color: vars.colors.primary,
});

export const mainArea = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});
