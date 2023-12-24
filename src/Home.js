// Home.js
import React, { useState } from 'react';  // Don't forget to import useState
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  extendTheme,
} from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { IoMdDownload } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Assuming you have these icons
import Confetti from 'react-dom-confetti';
import './Home.css'



const theme = extendTheme({
  fonts: {
    heading: 'Dancing Script, cursive',
    body: 'Bubblegum Sans, sans-serif',
  },
});

const Home = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Use the useInView hook to track whether the element is in view
  const [refWhatIsDefineMe, inViewWhatIsDefineMe] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  const [refWhoCanUseIt, inViewWhoCanUseIt] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  const [confettiActive, setConfettiActive] = useState(false);
  const handleDownloadClick = () => {
    // Add any additional logic for the download action here
    setConfettiActive(true);
  
    // Hide scrollbar during confetti animation
    document.body.style.overflow = 'hidden';
  
    // You may want to reset confetti and overflow after a delay
    setTimeout(() => {
      setConfettiActive(false);
      document.body.style.overflow = 'auto';
    }, 2000); // Adjust the delay as needed
  
    // Create a link element
    const link = document.createElement('a');
    link.href = '/files/DefineMeExtension.zip'; // Path to your zip file
    link.download = 'DefineMeExtension.zip'; // You can customize the downloaded file name
  
    // Trigger a click event on the link to initiate the download
    link.click();
  };
  
  

  return (
    <ChakraProvider theme={theme}>
      <animated.div style={fadeIn}>
        {/* DefineMe Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            textAlign="center"
            minHeight="100vh"
            bgGradient="linear(to-tr, #1a75ff, #4d94ff, #80b3ff, #b3d1ff)"
            color="white"
            paddingX="5%"
            paddingY="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Box
                fontFamily="Dancing Script, cursive"
                backgroundColor="#4d94ff"
                padding="4%"
                borderRadius="20px"
                boxShadow="0 10px 20px rgba(0, 0, 0, 0.2)"
                textAlign="center"
              >
                <Text fontSize="6xl" fontWeight="bold" mb="55px" color="white">
                  DefineMe
                </Text>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Text fontSize="3xl" mb="20px" color="black" lineHeight="1.5">
                    Unlock the World of Words, One Highlight at a Time
                  </Text>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* What is DefineMe? and Who can use it? Section */}
        <Box
          textAlign="center"
          minHeight="100vh"
          backgroundColor="#4d94ff"
          color="white"
          paddingX="5%"
          paddingY="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          {/* What is DefineMe? Section */}
          <motion.div
            ref={refWhatIsDefineMe} // Attach the ref to the element
            initial={{ opacity: 0, x: '-50%' }}
            animate={{
              opacity: inViewWhatIsDefineMe ? 1 : 0,
              x: inViewWhatIsDefineMe ? 0 : '-50%',
            }}
            transition={{ duration: 0.5 }}
          >
            <Box
              fontFamily="Bubblegum Sans, sans-serif"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              padding="4%"
              borderRadius="20px"
              boxShadow="0 10px 20px rgba(0, 0, 0, 0.2)"
              textAlign="center"
              width="70%"
              marginBottom="20px"
              margin="auto" // Centering using margin:auto
            >
              <Text fontSize="5xl" fontWeight="bold" mb="55px">
                What is DefineMe?
              </Text>
              <Text fontSize="2xl" mb="20px">
                DefineMe is a web extension that enriches your reading
                experience by providing instant definitions for highlighted
                words. It's simple, quick, and user-friendly.
              </Text>
            </Box>
          </motion.div>

          {/* Who can use it? Section */}
          <motion.div
            ref={refWhoCanUseIt} // Attach the ref to the element
            initial={{ opacity: 0, x: '50%' }}
            animate={{
              opacity: inViewWhoCanUseIt ? 1 : 0,
              x: inViewWhoCanUseIt ? 0 : '50%',
            }}
            transition={{ duration: 0.5 }}
          >
            <Box
              fontFamily="Bubblegum Sans, sans-serif"
              backgroundColor="#4d94ff"
              padding="4%"
              borderRadius="20px"
              boxShadow="0 10px 20px rgba(0, 0, 0, 0.2)"
              textAlign="center"
              width="90%"
              marginTop="20px"
              marginBottom="20px"
              margin="auto" // Centering using margin:auto
            >
              <Text fontSize="5xl" fontWeight="bold" mb="55px" color="white">
                Who can use it?
              </Text>
              <Text fontSize="2xl" mb="20px" color="white">
                DefineMe is designed for everyone who loves reading and wants to
                enhance their vocabulary. It's suitable for students,
                professionals, and anyone looking to explore the depth of
                language.
              </Text>
            </Box>
          </motion.div>
        </Box>

        {/* Carousel and Download DefineMe Extension Section */}
        <Box
  textAlign="center"
  minHeight="100vh"
  backgroundColor="#4d94ff"
  color="white"
  paddingX="5%"
  paddingY="40px"
  display="flex"
  flexDirection={{ base: 'column', md: 'row' }}  // Adjusted to column layout for small screens, row layout for medium and larger screens
  alignItems="center"
  justifyContent="center"
>
          {/* Carousel Section */}
          <Box
    fontFamily="Bubblegum Sans, sans-serif"
    backgroundColor="rgba(255, 255, 255, 0.9)"
    padding="4%"
    borderRadius="20px"
    boxShadow="0 10px 20px rgba(0, 0, 0, 0.2)"
    textAlign="center"
    width={{ base: '100%', md: '60%' }}  // Adjusted width for small screens and larger screens
    marginBottom={{ base: '40px', md: '0' }}  // Increased margin for more spacing on small screens
    margin="auto"
  >
            <Text fontSize="4xl" fontWeight="bold" mb="20px" color="black">
              How to Install / Use
            </Text>
            <Carousel
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '20px',
                      zIndex: 1,
                      cursor: 'pointer',
                    }}
                  >
                    <FaArrowLeft size={30} color="#1a75ff" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '20px',
                      zIndex: 1,
                      cursor: 'pointer',
                    }}
                  >
                    <FaArrowRight size={30} color="#1a75ff" />
                  </button>
                )
              }
            >
              {/* Add your example images here */}
              <div style={{ textAlign: 'left' }}>
                <img
                  src="/images/findmngxtnsn.png"
                  alt="Finding How to Open Browser Extension"
                />
                <p style={{ fontSize: '1.5em' }}>
                  Finding How to Open Browser Extension
                </p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <img
                  src="/images/loadunpacked.png"
                  alt="How to Load Unpacked Extension"
                />
                <p style={{ fontSize: '1.5em' }}>
                  How to Load Unpacked Extension: Make sure you unzip the folder in order to be able to load it
                </p>
              </div>
              {/* Add more images as needed */}
              <div style={{ textAlign: 'left' }}>
                <img
                  src="/images/loadedextension.png"
                  alt="Loaded Unpacked Extension"
                />
                <p style={{ fontSize: '1.5em' }}>Loaded Unpacked Extension</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <img
                  src="/images/extensioninuselarge.png"
                  alt="DefineMe in Action"
                />
                <p style={{ fontSize: '1.5em' }}>DefineMe in Action</p>
              </div>
            </Carousel>
          </Box>

          <Box marginBottom="40px" />

{/* Download DefineMe Extension Section */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <Box
    fontFamily="Bubblegum Sans, sans-serif"
    backgroundColor="#35424a"
    padding="4%"
    borderRadius="20px"
    boxShadow="0 10px 20px rgba(0, 0, 0, 0.4)"
    textAlign="center"
    width={{ base: '100%', md: '80%', lg: '60%', xl: '50%' }}  // Adjusted width for small, medium, large, and extra-large screens
    marginTop={{ base: '20px', md: '0' }}  // Increased margin for more spacing on small screens
    marginBottom="20px"
    margin="auto"
    transition="box-shadow 0.3s ease-in-out"
    _hover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}
  >
    <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mb="20px" color="white" lineHeight="1.4">
      Download DefineMe Extension
    </Text>
    <Button
      leftIcon={<IoMdDownload />}
      backgroundColor="#1a75ff"
      color="white"
      fontSize={["lg", "xl"]}
      padding="15px 30px"
      mt="20px"
      borderRadius="10px"
      maxW="100%"
      onClick={handleDownloadClick}
      _hover={{ backgroundColor: '#80b3ff' }}
    >
      Download Now
    </Button>
    <Confetti active={confettiActive} config={{ spread: 180, elementCount: 100 }} />
  </Box>
</motion.div>



        </Box>
                {/* Footer Section */}
                <Box
          textAlign="center"
          minHeight="10vh"
          backgroundColor="#35424a"
          color="white"
          padding="20px"
        >
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Ayhabibi Inc. All Rights Reserved.
          </Text>
          <Text fontSize="sm" mt="2">
            Made by: Ayman El-sayed
          </Text>
        </Box>
      </animated.div>
    </ChakraProvider>
  );
};

export default Home;
