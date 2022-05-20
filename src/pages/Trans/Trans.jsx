import React from "react";
import {
  Container,
  Grid,
  Text,
  Collapse,
  Image,
  Link,
  Spacer,
} from "@nextui-org/react";

const TransData = () => {
  return (
    <Container
      fluid
      sm
      css={{
        display: "flex",
        paddingTop: "2rem",
        paddingBottom: "5rem",
      }}
      className="sm:w-100"
    >
      <Text
        h1
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
      >
        Welcome to the Trans experience
      </Text>

      <Grid.Container gap={2} justify="center">
        <Grid>
          <Collapse.Group shadow>
            <Collapse
              expanded
              title={
                <Text
                  css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
                  h3
                >
                  How to have a period.
                </Text>
              }
              subtitle="this guide is made for trans women seeking to have their periods"
            >
              <Grid.Container
                justify="space-around"
                css={{
                  display: "flex",
                  flexDirection: "row",
                }}
                fluid
              >
                <Grid>
                  <ol>
                    <li style={{ cursor: "text" }}>
                      <Text>
                        Find a toothbrush that you mostlikley have laying around
                        somewheres in your home.
                      </Text>
                    </li>
                    <li style={{ cursor: "text" }}>
                      <Text>
                        Check the bristles and make sure they are tough.
                      </Text>
                    </li>
                    <li style={{ cursor: "text" }}>
                      <Text>
                        Now take the toothbrush and brush the inside of your
                        rectum
                      </Text>
                      <Text>
                        If you start bleeding <Text b>this is normal</Text> and
                        actually our goal for today.
                      </Text>
                    </li>
                    <li style={{ cursor: "text" }}>
                      <Text>
                        Now stop the bleeding by inserting a tampon in your ass.
                      </Text>
                    </li>
                    <li style={{ cursor: "text" }}>
                      <Text>
                        Reapeat step 1-4 for <Text b>3 days</Text>
                      </Text>
                    </li>
                  </ol>
                </Grid>
                <Grid sm>
                  <Spacer />
                  <Image
                    showSkeleton
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Gestion_menstrual_tampon_toallitas_menstruaci%C3%B3n_periodicas_06.jpg"
                    width="100%"
                    css={{
                      maxWidth: "400px",
                    }}
                    maxDelay={10000}
                  />
                </Grid>
              </Grid.Container>
              <Spacer />
              <Grid.Container>
                <Grid>
                  <Text>
                    <Text
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                      h2
                    >
                      Story Time
                    </Text>
                    <Text blockquote>
                      It's just as I'm having a period. There's just something
                      about menstruation that makes me feel so empowered and
                      feminine. sometimes when I'm in the menstruation aisle at
                      the store, I see girls buying pads. I give them a smile
                      every time knowning that we are apart of a sisterhood.
                    </Text>
                  </Text>
                </Grid>
              </Grid.Container>
            </Collapse>
            <Collapse
              title={
                <Text
                  css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
                  h3
                >
                  How to properly groom your gock.
                </Text>
              }
            >
              <Grid.Container justify="space-around" fluid>
                <Grid>
                  <Text h3>THE LAWN MOWER® 4.0</Text>
                  <Text>
                    Replaceable ceramic blades featuring SkinSafe™ technology
                    are set back from the edge 3mm and precision-engineered for
                    maximum confidence while trimming below-the-waist.{" "}
                  </Text>
                  <Text small>
                    Visit{" "}
                    <Link
                      href="https://www.manscaped.com/"
                      target={"_blank"}
                      icon
                    >
                      Manscaped™
                    </Link>{" "}
                    today, take care of your lawn and get the most out of your
                    gock.
                  </Text>
                  <Spacer />
                  <Text
                    small
                    css={{
                      opacity: 0.5,
                    }}
                  >
                    SkinSafe™ technology does not guarantee cut protection.
                  </Text>
                </Grid>
                <Grid
                  justify="center"
                  alignItems="center"
                  css={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Spacer />
                  <iframe
                    src="https://www.youtube.com/embed/glh-CjX3DiM?controls=0"
                    loading="lazy"
                    title="Manscape"
                    height={"360"}
                    width={"640"}
                    allowFullScreen={true}
                    frameborder="1"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowfullscreen
                    style={{
                      maxWidth: "calc(1000% / 9)",
                    }}
                  />
                  <Spacer />
                </Grid>
              </Grid.Container>
            </Collapse>
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

const Trans = () => {
  return (
    <Container
      css={{
        position: "absolute",
        padding: "0",
        margin: "0",
        top: "80px",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 80px)",
        minWidth: "100%",
      }}
      className="animate-fadeIn overflow-scroll"
    >
      <TransData />
    </Container>
  );
};

export default Trans;
