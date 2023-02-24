import { Box, Container, Text } from "@chakra-ui/react";
function Homepage() {
	return (
		<Container maxW="xl" centerContent>
			<Box
				display="flex"
				justifyContent="center"
				p={3}
				bg="white"
				w="100%"
				m="40px 0 15px 0"
				borderRadius="lg"
				borderWidth="1px"
			>
				<Text
					fontSize="4xl"
					as="b"
					letterSpacing={4}
					fontFamily="Poppins"
				>
					CHATSPOT
				</Text>
			</Box>
		</Container>
	);
}
export default Homepage;
