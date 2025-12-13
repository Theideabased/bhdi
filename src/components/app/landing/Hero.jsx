import { SlideIn } from "@/components/Animations";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { PlayCircleFill } from "react-bootstrap-icons";

export default function Hero() {
  return (
    <Box
      as="header"
      mt={{ base: 0, md: 0 }}
      maxH={"100vh"}
      pt={{ base: 14, md: 20 }}
      overflow={"hidden"}
      pos="relative"
    >
      <Image
        src={"/images/hero-img.webp"}
        fill
        priority
        fetchPriority="high"
        alt="group of children"
        style={{
          objectFit: "cover",
          position: "absolute",
          filter: "brightness(40%)",
        }}
      />
      <Box
        overflow={"hidden"}
        height={{ base: "110vh", md: "110vh" }}
        width={"full"}
        position="relative"
        mt={{ base: -40, md: -60 }}
        gap={{ base: 0, md: 10 }}
        px={{ base: 6, md: 16, xl: 20 }}
        py={{ base: 14, md: 28 }}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TextContent />
      </Box>
    </Box>
  );
}

const TextContent = () => {
  return (
    <Stack
      gap={6}
      w={{ base: "full", lg: "60%" }}
      pos={"relative"}
      zIndex={1}
      align={"center"}
      textAlign={"center"}
      mt={28}
      color="#fff"
    >
      <Heading as="h1" fontSize={"3.3em"} lineHeight={{ base: 1.3, md: 1.4 }}>
        Creating Equal Opportunities for Every Child
      </Heading>
      <Text fontSize={"md"} lineHeight={{ base: 1.8, md: 1.9 }}>
        Discover how we create lasting change for children with special needs by
        providing care, learning opportunities, and a strong community that
        believes in every child's abilities.
      </Text>
      <SlideIn>
        <Stack
          gap={{ base: 5, md: 3 }}
          direction={{ base: "column", md: "row" }}
        >
          <Button
            as="a"
            href="#what-we-do"
            bg={"#fff"}
            color="primary"
            size="xl"
            fontWeight={"bold"}
            _hover={{
              bg: "yellow",
            }}
            w={"9rem"}
          >
            What We Do
          </Button>
          <Button
            as="a"
            href="#about-us"
            variant="ghost"
            color="#fff"
            size="xl"
            _hover={{
              bg: "transparent",
              color: "yellow",
            }}
            w={"9rem"}
          >
            <PlayCircleFill /> Play Video
          </Button>
        </Stack>
      </SlideIn>
    </Stack>
  );
};
