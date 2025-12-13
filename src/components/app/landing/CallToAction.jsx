import { SlideIn } from "@/components/Animations";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function CallToAction() {
  return (
    <Box
      as="section"
      overflow={"hidden"}
      px={{ base: 8, md: 10, lg: 40 }}
      py={14}
    >
      <Box
        overflow={"hidden"}
        rounded="2xl"
        px={5}
        py={14}
        pos="relative"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src={"/images/event-img.webp"}
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
        <TextContent />
      </Box>
    </Box>
  );
}

const TextContent = () => {
  return (
    <Stack
      gap={8}
      w={{ base: "full", lg: "60%" }}
      pos={"relative"}
      zIndex={1}
      align={"center"}
      textAlign={"center"}
      color="#fff"
    >
      <Heading as="h2" m={0} fontSize={{ base: "2.1em", md: "2em" }}>
        You can contribute to provide a place for children with special needs!
      </Heading>
      <SlideIn>
        <Stack
          gap={{ base: 6, md: 8 }}
          direction={{ base: "column", md: "row" }}
        >
          <Button
            bg={"yellow"}
            color="primary"
            size="md"
            fontWeight={"bold"}
            _hover={{
              bg: "#fff",
              color: "primary",
            }}
          >
            Become a Volunteer
          </Button>
          <Button
            bg="#fff"
            color="primary"
            size="md"
            fontWeight={"bold"}
            _hover={{
              bg: "yellow",
            }}
          >
            Donate
          </Button>
        </Stack>
      </SlideIn>
    </Stack>
  );
};
