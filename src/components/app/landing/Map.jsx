import { Box } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box w="full" mt={10} bg="gray.50" overflow={"hidden"}>
      <iframe
        style={{
          width: "100%",
          height: "400px",
        }}
        title="Our location"
        src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </Box>
  );
};

export default Map;
