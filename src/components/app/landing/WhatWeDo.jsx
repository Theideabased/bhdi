import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FaGraduationCap, FaStethoscope, FaSmile } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { SlideIn } from "@/components/Animations";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

const services = [
  {
    icon: <LuHeartHandshake size={18} />,
    title: "Family Support",
    text: "We provide counseling, training, and emotional support to families of children with special needs, helping them navigate daily challenges with strength and understanding.",
  },
  {
    icon: <FaStethoscope size={18} />,
    title: "Health Care",
    text: "Our health initiatives ensure children receive quality medical attention, regular checkups, and specialized care tailored to their unique needs.",
  },
  {
    icon: <FaGraduationCap size={18} />,
    title: "Scholarships",
    text: "We provide educational scholarships to children with special needs, enabling access to inclusive schools and learning resources.",
  },
  {
    icon: <FaSmile size={18} />,
    title: "Therapy",
    text: "Our therapy programs include physical, speech, and occupational support designed to enhance each child's development and independence.",
  },
];

export default function WhatWeDo() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Box
      id="what-we-do"
      as="section"
      py={{ base: 10, md: 14 }}
      pt={{ base: 4, md: 14 }}
      px={{ base: 7, md: 10, lg: 32 }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        mx="auto"
        gap={{ base: 6, md: 14 }}
      >
        <Box
          p={2}
          w={{ base: "100%", md: "50%" }}
          rounded="2xl"
          overflow="hidden"
          alignSelf="flex-end"
          transition="all 0.5s"
        >
          <SlideIn
            isImage
            isLoaded={isImageLoaded}
            position="relative"
            rounded="xl"
            overflow="hidden"
            h={{ base: "500px", md: "600px" }}
          >
            <Image
              src="/images/boy-on-headset.webp"
              alt="Children on sport field"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "12px",
              }}
              onLoad={() => setIsImageLoaded(true)}
            />
          </SlideIn>
        </Box>

        <Stack flex="1" px={{ base: 2, md: 0 }} gap={6}>
          <Box>
            <HeadingMarker pt={0} text="what we do" />
            <H2Heading mb={0}>
              Services That Support and Empower Our Children
            </H2Heading>
          </Box>
          <Text fontSize="md" lineHeight={1.7} color="gray.500">
            We provide personalized care and inclusive programs that help
            children with special needs learn, grow, and thrive in a supportive
            environment.
          </Text>
          <Stack gap={{ base: 5, md: 3 }}>
            {services.map(({ icon, title, text }) => (
              <Flex key={title} align="flex-start" gap={4}>
                <Box mt={1.5}>{icon}</Box>
                <Stack gap={0}>
                  <Heading
                    as="h3"
                    fontSize="1em"
                    color="primary"
                    lineHeight="unset"
                    m={0}
                    p={0}
                  >
                    {title}
                  </Heading>
                  <Text lineHeight="unset" color="gray.500" fontSize="sm">
                    {text}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
