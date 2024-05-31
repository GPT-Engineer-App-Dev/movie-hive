import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { FaPlay, FaSearch, FaPlus } from "react-icons/fa";
import { useState } from "react";

const movies = [
  { title: "Movie 1", image: "https://via.placeholder.com/300x450", description: "Description for movie 1" },
  { title: "Movie 2", image: "https://via.placeholder.com/300x450", description: "Description for movie 2" },
  { title: "Movie 3", image: "https://via.placeholder.com/300x450", description: "Description for movie 3" },
  { title: "Movie 4", image: "https://via.placeholder.com/300x450", description: "Description for movie 4" },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">MovieStream</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Movies</Link>
          <Link href="#">Series</Link>
          <Link href="/watchlist">My List</Link> {/* Link to Watchlist */}
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleSearchChange}
              bg="white"
              color="black"
            />
          </InputGroup>
        </HStack>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Featured Movies
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredMovies.map((movie, index) => (
            <Box key={index} bg="gray.800" color="white" borderRadius="md" overflow="hidden">
              <Image src={movie.image} alt={movie.title} />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>{movie.title}</Heading>
                <Text mb={4}>{movie.description}</Text>
                <Flex alignItems="center" justifyContent="space-between">
                  <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid">
                    Watch Now
                  </Button>
                  <Button leftIcon={<FaPlus />} colorScheme="teal" variant="outline" onClick={() => handleAddToWatchlist(movie)}>
                    Add to Watchlist
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="gray.900" color="white" py={4} textAlign="center">
        <Text>&copy; 2023 MovieStream. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;