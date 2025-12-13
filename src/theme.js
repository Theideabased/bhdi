import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#1D2130" },
        yellow: { value: "#F2C94C" },
        yellowLight: { value: "#FCEDC6" },
      },
    },
  },
  config: {
    cssVarsRoot: ":root",
    initialColorMode: "light",
    useSystemColorMode: false, // ignore system preference
    disableTransitionOnChange: true,
  },
});

export const system = createSystem(defaultConfig, config);
