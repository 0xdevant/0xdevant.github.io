import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Tag,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import React from "react"
import { Fade, Slide } from "react-reveal"

const projects = [
  {
    id: 1,
    title: "OpenSea Auction for SOUL Golden Ticket NFT",
    desc:
      "Users connect their MetaMask wallet to sign up for the OpenSea auction of two Golden Ticket NFTs created by SOUL, in order to redeem a custom BAYC or MAYC headphone by passing the verification of the NFT ownership and transferring the ticket to the SOUL's forge.",
    link: "https://www.nftsoulnation.com/#/",
    tags: "Web",
  },
  {
    id: 2,
    title: "SOULNATION Offical Website",
    desc:
      "While ensuring the reputation and credibility of SOUL®️ during the revamp of the brand, my work is to also keep the website running smooth and error-free in order to give our customers the best ecommerce shopping experience.",
    link: "https://soulnation.com/",
    tags: "Web",
  },
  {
    id: 3,
    title: "TWGHs Zonta Club of Kowloon Nursery School",
    desc:
      "As a developer, my job is to make sure the requirements about the design and copywriting provided by clients are fully addressed, and have this website presented in a way that fulfills RWD but also looks lovely and energetic at the same time.",
    link: "https://zckns.tungwahcsd.org/tc/page/home-page",
    tags: "Web",
  },
  {
    id: 4,
    title: "PolyU Photo Competition",
    desc:
      "A project that I had taken the lead on which is about a photo competion campaign hosted by The Hong Kong Polytechnic University, I worked closely with the campaign team of the competition of Poly U to make sure the layout is clear and refreshing.",
    link: "https://www.polyu.edu.hk/cpa/polyucampus/index.html/",
    tags: "Web",
  },
  /*{
    title: "FE Locker",
    desc:
      "Constructing an interactive journey for students’ Field Experience reflection.",
    link: "/projects/feLocker",
    src:
      "https://images.unsplash.com/photo-1552664862-db5607e91378?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: "App",
  },*/
]

const ProjectGallery = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      columnGap={6}
      rowGap={12}
      id="project-gallery"
      py={{ base: "70px", md: "140px" }}
    >
      {projects.map((project, index) => {
        return (
          <GridItem role="group" key={index}>
            <Fade bottom duration={1500} delay={500}>
              <Skeleton isLoaded>
                <LinkBox>
                  <LinkOverlay href={project.link} target="_blank">
                    <Image
                      width="100%"
                      boxShadow="0 1px 2px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"
                      transition=".8s cubic-bezier(.2,.8,.2,1)"
                      _groupHover={{
                        transform: "translateY(-5px)",
                        boxShadow:
                          "0 1px 2px rgb(0 0 0 / 5%), 0 15px 30px rgb(0 0 0 / 10%)",
                      }}
                      src={`../../projects/${project.id}.png`}
                      alt={project.title}
                      height="180px"
                      objectFit="contain"
                      mx="auto"
                    />
                    {/*<Box
                      width="100%"
                      boxShadow="0 1px 2px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"
                      transition=".8s cubic-bezier(.2,.8,.2,1)"
                      _groupHover={{
                        transform: "translateY(-5px)",
                        boxShadow:
                          "0 1px 2px rgb(0 0 0 / 5%), 0 15px 30px rgb(0 0 0 / 10%)",
                      }}
                      bgImage={`url(${project.src})`}
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      height="250px"
                    ></Box>*/}
                  </LinkOverlay>
                  <Box my={4}>
                    <Tag>{project.tags}</Tag>
                    <Heading
                      transition=".8s cubic-bezier(.2,.8,.2,1)"
                      _groupHover={{ color: "#6832e6" }}
                      size="md"
                      mt={2}
                      mb={3}
                    >
                      {project.title}
                    </Heading>
                    <Text fontSize="md" opacity=".6">
                      {project.desc}
                    </Text>
                  </Box>
                </LinkBox>
              </Skeleton>
            </Fade>
          </GridItem>
        )
      })}
    </Grid>
  )
}
export default ProjectGallery
