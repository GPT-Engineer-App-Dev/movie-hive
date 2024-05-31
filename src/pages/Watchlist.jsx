import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  const handleRemoveFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((item) => item.title !== movie.title));
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">MovieStream</Heading>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          My Watchlist
        </Heading>
        {watchlist.length === 0 ? (
          <Text textAlign="center">Your watchlist is empty.</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {watchlist.map((movie, index) => (
              <Box key={index} bg="gray.800" color="white" borderRadius="md" overflow="hidden">
                <Image src={movie.image} alt={movie.title} />
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>{movie.title}</Heading>
                  <Text mb={4}>{movie.description}</Text>
                  <Button colorScheme="red" variant="outline" onClick={() => handleRemoveFromWatchlist(movie)}>
                    Remove from Watchlist
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>

      <Box as="footer" bg="gray.900" color="white" py={4} textAlign="center">
        <Text>&copy; 2023 MovieStream. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Watchlist;