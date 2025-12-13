import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

const projects = [
  {
    title: "Empowering 500+ Children Through Inclusive Education",
    text: "We provided learning materials, therapy sessions, and teacher support across local schools to ensure children with special needs receive quality, inclusive education in a safe and nurturing environment.",
    image: "/images/project-2.webp",
  },
  {
    title: "Health & Wellness Drive: Reaching 300 Children",
    text: "Organized free medical checkups, therapy assessments, and wellness workshops for children with special needs to promote better health and early intervention.",
    image: "/images/project-3.webp",
  },
  {
    title: "Family Support Workshop: Strengthening Care at Home",
    text: "Conducted training sessions for parents and caregivers on inclusive care, communication techniques, and emotional support to improve daily life for children with special needs.",
    image: "/images/project-1.webp",
  },
];

export default function OurProjects() {
  return (
    <Box
      id="projects"
      as="section"
      py={{ base: 10, md: 14 }}
      pt={{ base: 8, md: 14 }}
      px={{ base: 7, md: 10, lg: 32 }}
      position="relative"
      overflow="hidden"
    >
      <Stack gap={10}>
        <Box>
          <HeadingMarker pt={0} text="projects we have done" />
          <H2Heading mb={0}>
            We Are Creating a Place Where Children With Special Needs Can Thrive
          </H2Heading>
        </Box>

        <SimpleGrid columns={[1, 1, 3]} gap={8} align="center">
          {projects.map(({ title, text, image }) => (
            <Flex
              key={title}
              position="relative"
              overflow="hidden"
              rounded="2xl"
              minH="230px"
              justify="center"
              align="center"
              p={8}
            >
              <Box w="full" zIndex={2} position="relative">
                <Stack gap={5} align="left">
                  <Heading
                    as="h3"
                    fontSize="xl"
                    mb={-2}
                    fontWeight="600"
                    color="#fff"
                  >
                    {title}
                  </Heading>
                  <Text color="gray.100" fontSize="sm">
                    {text}
                  </Text>
                  <Button bg="#fff" fontWeight="600" color="primary">
                    Learn More
                  </Button>
                </Stack>
              </Box>

              <Image
                src={image}
                alt={title}
                fill
                priority
                fetchPriority="high"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  filter: "brightness(33%)",
                }}
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
