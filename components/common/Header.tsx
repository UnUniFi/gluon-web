import { Box, Button, Icon, Link, Text, useColorModeValue, useTheme } from '@interchain-ui/react';
import { dependencies } from '@/config';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Box display="flex" justifyContent="end" mb="$8"></Box>
    </>
  );
}
