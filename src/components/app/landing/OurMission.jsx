import { Box, HStack, Text } from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

export default function OurMission() {
  return (
    <Box
      id="our-mission"
      as="section"
      bg="#fff"
      overflow={"hidden"}
      px={{ base: 8, md: 10, lg: 40 }}
      py={{ base: 6, md: 14 }}
      pt={{ base: 0, md: 4 }}
    >
      <Box>
        <HeadingMarker text="our mission" />
        <H2Heading mb={0}>Our Mission</H2Heading>
      </Box>
      <HStack gap={8} mt={10}>
        <Box w="full" bg="yellowLight" color="primary" rounded="2xl" p={8}>
          <Text fontSize={"md"}>
            Our mission is to create a compassionate and inclusive environment
            where children with special needs receive the care, education, and
            support they deserve. We work to empower every child to reach their
            full potential through specialized programs, family engagement, and
            community-driven initiatives.
            <br /> <br />
            Inclusive Care Foundation is dedicated to breaking barriers and
            ensuring equal opportunities for all children, regardless of their
            abilities. We believe that every child deserves love, respect, and
            access to quality education and healthcare. Through collaboration,
            advocacy, and consistent care, we build a future where every child
            can thrive, grow with confidence, and live with dignity.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
