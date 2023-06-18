import React from 'react';
import { Typography, Box, Container } from '@material-ui/core';

function Footer() {
  return (
    <footer>
      <Box bgcolor="#354f52" color="white" py={6}>
        <Container maxWidth="md">
          <Typography variant="body1" align="center">
            © 2023 Ionut Bostan.
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
