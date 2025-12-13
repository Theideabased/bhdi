import { HStack, Separator, Span } from "@chakra-ui/react";

const HeadingMarker = ({ text, markerbg, ...props }) => {
  return (
    <HStack mb={5} py={4} px={1} color="primary" {...props}>
      <Separator w={16} h={1} bg={markerbg || "yellow"} />{" "}
      <Span
        fontWeight={"semibold"}
        fontSize={".9em"}
        textTransform={"uppercase"}
      >
        {text}
      </Span>
    </HStack>
  );
};

export default HeadingMarker;
