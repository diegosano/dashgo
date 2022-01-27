import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Diego Sano</Text>
        <Text color="gray.300" fontSize="small">
          diegocsano@outlook.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Diego Sano"
        src="https://github.com/diegosano.png"
      />
    </Flex>
  );
}
