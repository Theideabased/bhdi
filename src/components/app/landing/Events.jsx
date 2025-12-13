import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowRight } from "react-bootstrap-icons";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

const events = [
  {
    date: "16",
    month: "AUG",
    label: "NEXT EVENT",
    title: "Brighter Futures: Children's Empowerment Day",
  },
  {
    date: "11",
    month: "APR",
    label: "NEXT EVENT",
    title: "Inclusion Day 2025: Embracing Every Child",
  },
];

export default function Events() {
  return (
    <Box
      id="our-events"
      as="section"
      overflow="hidden"
      px={{ base: 8, md: 10, lg: 40 }}
      py={14}
      pt={{ base: 0, md: 4 }}
    >
      <Box>
        <HeadingMarker text="our events" />
        <H2Heading mb={0}>Our Upcoming Events</H2Heading>
      </Box>

      <HStack gap={8} mt={10} flexWrap={{ base: "wrap", md: "nowrap" }}>
        {events.map(({ date, month, label, title }) => (
          <Box
            key={title}
            w={{ base: "full", md: "50%" }}
            bg="yellow"
            color="primary"
            rounded="2xl"
            p={{ base: 7, md: 8 }}
          >
            <Flex
              justify="space-between"
              align="center"
              gap={{ base: 2, md: 5 }}
            >
              <Flex gap={5} flexDirection={{ base: "column", sm: "row" }}>
                <Stack align="center" gap={0}>
                  <Heading>{date}</Heading>
                  <Text>{month}</Text>
                </Stack>
                <Stack gap={1} textAlign={{ base: "center", sm: "left" }}>
                  <Text fontSize=".8em" fontWeight="semibold">
                    {label}
                  </Text>
                  <Text fontSize="1.2em" fontWeight="semibold">
                    {title}
                  </Text>
                </Stack>
              </Flex>
              <IconButton
                display={{ base: "none", sm: "flex" }}
                aria-label="view event"
                size="lg"
                bg="#fff"
                color="primary"
                rounded="full"
              >
                <ArrowRight />
              </IconButton>
            </Flex>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
