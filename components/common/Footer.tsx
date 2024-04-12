import { Box, Divider, Icon, Link, Stack, Text, useColorModeValue } from '@interchain-ui/react';
import { dependencies, products, Project } from '@/config';

export function Footer() {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          tablet: 'repeat(2, 1fr)',
          desktop: 'repeat(3, 1fr)',
        }}
        mb="$16"
        gap="$12"
      ></Box>
    </>
  );
}
