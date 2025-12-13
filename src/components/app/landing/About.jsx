import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

export default function About() {
  return (
    <Box
      id="about-us"
      as="section"
      py={{ base: 10, md: 14 }}
      pt={{ base: 10, md: 14 }}
      px={{ base: 7, md: 10, lg: 32 }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        mx="auto"
        gap={{ base: 8, md: 14 }}
      >
        <Stack flex="1" px={{ base: 2, md: 0 }} gap={{ base: 8, md: 6 }}>
          <Box>
            <HeadingMarker text="know about us" />
            <H2Heading mb={0}>
              We Create a Safe and Supportive Haven for Children with Special
              Needs
            </H2Heading>
          </Box>
          <Stack gap={5}>
            <Text fontSize="md" lineHeight={1.7} color="gray.500">
              At Inclusive Care Foundation, we believe every child deserves a
              safe space to grow, learn, and be celebrated for who they are. Our
              programs focus on nurturing children with special needs through
              inclusive education, therapy, and family-centered support.
            </Text>
            <Text fontSize="md" lineHeight={1.7} color="gray.500">
              Together with families, caregivers, and communities, we create
              opportunities that empower every child to reach their potential,
              build confidence, and live with dignity and joy.
            </Text>
          </Stack>
          <HStack gap={10} color="primary">
            <Button size={"lg"} bg="yellow" color="primary" fontWeight={"bold"}>
              Learn More
            </Button>
          </HStack>
        </Stack>

        <Box
          p={2}
          overflow={"hidden"}
          w={{ base: "100%", md: "40%" }}
          maxW={{ base: "100%", md: "40%" }}
          rounded="2xl"
          transition="all 0.5s"
        >
          <AspectRatio maxW={{ base: "full", md: "560px" }} ratio={1}>
            <iframe
              style={{ borderRadius: "20px" }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ti8zAYMBdmw?si=w1sciGOqO2u-qGWv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
  );
}
