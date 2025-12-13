import {
  Box,
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Input,
  HStack,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  TwitterX,
} from "react-bootstrap-icons";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email) {
      alert("Thanks for subscribing to our newsletter!");
      setEmail("");
      return;
    } else {
      alert("Please enter your email address");
      return;
    }
  };

  const sections = [
    {
      title: "About Us",
      links: [
        { label: "What We Do", href: "/#what-we-do" },
        { label: "Our Team", href: "/#" },
        { label: "Contact", href: "/#" },
        { label: "Careers", href: "/#" },
      ],
    },
    {
      title: "Find Us",
      links: [
        { label: "Events", href: "/#our-events" },
        { label: "Locations", href: "/#" },
        { label: "Map", href: "/#" },
        { label: "Donate", href: "/#" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { label: "Facebook", href: "/#", icon: <Facebook /> },
        { label: "Twitter", href: "/#", icon: <TwitterX /> },
        { label: "Instagram", href: "/#", icon: <Instagram /> },
        { label: "LinkedIn", href: "/#", icon: <Linkedin /> },
      ],
    },
  ];

  return (
    <Flex
      id="contact"
      bg="primary"
      flexDirection={{ base: "column", md: "row" }}
      color="#fff"
      py={14}
      px={{ base: 6, md: 6, lg: 14 }}
    >
      <Box w={{ base: "full", md: "70%" }}>
        <SimpleGrid columns={[2, 4]} gap={8}>
          <Stack gap={3}>
            <Heading as="h3" fontSize="lg" fontWeight="bold">
              ICFC
            </Heading>
            <Text fontSize="sm">Inclusive Care for Children</Text>
          </Stack>

          {sections.map((section) => (
            <Stack key={section.title} gap={3}>
              <Heading as="h4" fontSize="md">
                {section.title}
              </Heading>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  fontSize="sm"
                  color="#fff"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  _hover={{ textDecoration: "underline" }}
                >
                  {link.icon && link.icon}
                  {link.label}
                </Link>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Box>

      <Box
        color="#ff"
        w={{ base: "full", md: "30%" }}
        ml={{ base: 0, md: 10 }}
        mt={{ base: 16, md: 0 }}
      >
        <Heading as="h3" fontSize={"1.6em"} mb={8}>
          Join Our Community for News and Stories
        </Heading>
        <HStack
          as="form"
          onSubmit={handleFormSubmit}
          gap={5}
          align={"center"}
          justify={"center"}
          mt={2}
          w="full"
        >
          <InputGroup w="20rem" startElement={<Envelope color="#fff" />}>
            <Input
              onChange={handleInputChange}
              value={email}
              type="email"
              size="lg"
              placeholder="Email address"
              _placeholder={{
                color: "gray.300",
                fontSize: "md",
              }}
            />
          </InputGroup>

          <Button
            type="submit"
            bg="#fff"
            color="primary"
            fontWeight={"semibold"}
            size="md"
          >
            Subscribe
          </Button>
        </HStack>
        <Box mt={5} pt={4} textAlign="center" fontSize="sm" color="gray.400">
          Developed by{" "}
          <Link
            color="#08CB00"
            textDecoration={"underline"}
            target="_blank"
            rel="noopener noreferrer"
            href="https://devmasud.vercel.app/"
          >
            Masud
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
