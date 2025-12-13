import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

const allocations = [
  { color: "#BEF3C0", label: "40% child care home" },
  { color: "#AC94F1", label: "35% cleanliness program" },
  { color: "#FFF0CA", label: "10% helping people" },
  { color: "#F9CF64", label: "10% excursions" },
  { color: "#F38FBF", label: "5% feeding the poor" },
];

export default function Stats() {
  return (
    <Box
      id="about"
      as="section"
      bg="#000"
      py={{ base: 10, md: 14 }}
      pt={{ base: 8, md: 14 }}
      px={{ base: 7, md: 10, lg: 32 }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        mx="auto"
        gap={{ base: 14, md: 14 }}
      >
        <Stack
          flex="1"
          px={{ base: 2, md: 0 }}
          pr={{ base: 0, md: 40 }}
          gap={{ base: 5, md: 3 }}
        >
          <Box>
            <HeadingMarker text="Statistics" color="#fff" />
            <H2Heading mb={0} color="#fff">
              Transparent Spending — How Funds Are Allocated
            </H2Heading>
          </Box>

          <Text fontSize="md" lineHeight={1.7} color="gray.300">
            We understand that when you make a donation, you want to know
            exactly where your money is going, and we pledge to be transparent.
          </Text>

          <HStack gap={3} mt={5} flexWrap="wrap">
            {allocations.map(({ color, label }) => (
              <HStack key={label}>
                <Box h={3} w={3} rounded="sm" bg={color} />
                <Text fontSize="sm" color="gray.100" fontWeight="400">
                  {label}
                </Text>
              </HStack>
            ))}
          </HStack>
        </Stack>

        <Box
          flex={{ base: "unset", md: "1" }}
          position="relative"
          overflow="hidden"
          h="250px"
          w="250px"
          maxW="250px"
          rounded="full"
        >
          <Image
            src="/images/chart.svg"
            alt="chart"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 
           (max-width: 1280px) 50vw, 
           33vw"
            style={{
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
