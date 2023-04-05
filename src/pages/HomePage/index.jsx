import React from "react";

import { Text, Button, Img, List } from "components";

const HomePagePage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="bg-gradient  flex md:flex-col flex-row gap-7 items-center justify-start md:px-10 sm:px-5 px-[53px] py-[137px] w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-[75px] items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="leading-[72.00px] max-w-[653px] md:max-w-full text-left text-white_A700 tracking-[-1.28px]"
                as="h1"
                variant="h1"
              >
                Automating airlines pricing decision to set fares
              </Text>
              <Text
                className="font-medium leading-[30.00px] max-w-[653px] md:max-w-full text-bluegray_600 text-left"
                variant="body2"
              >
                Jupiter, a radical pricing decision support system, designed to
                tackle the complex legacy problems faced by pricing analysts.
              </Text>
            </div>
            <Button className="bg-red_A700 cursor-pointer font-medium h-14 min-w-[176px] sm:px-5 px-7 py-4 rounded-md shadow-bs text-center text-gray_100 text-lg w-auto">
              Book a Demo
            </Button>
          </div>
          <Img
            src="images/img_frame1000001050.svg"
            className="flex-1 h-full max-h-[417px] w-auto sm:w-auto md:w-auto"
            alt="frame1000001050"
          />
        </div>
        <div className="bg-white_A700 flex flex-col gap-[58px] items-center justify-start py-[25px] w-full">
          <div className="flex items-start justify-start w-full">
            <Text
              className="not-italic text-black_901 text-center w-auto"
              variant="body1"
            >
              {" "}
              Businesses that are growing with FlyNava
            </Text>
          </div>
          <div className="gap-[46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[106px] md:h-auto items-start justify-start shadow-bs1 w-full">
            <Img
              src="images/img_image18.png"
              className="flex-1 md:flex-none md:h-[106px] sm:h-auto h-full max-h-[106px] object-cover w-auto"
              alt="imageEighteen"
            />
            <Img
              src="images/img_image19.png"
              className="flex-1 md:flex-none md:h-[106px] sm:h-auto h-full max-h-[106px] object-cover w-auto"
              alt="imageNineteen"
            />
            <Img
              src="images/img_image20.png"
              className="flex-1 md:flex-none md:h-[106px] sm:h-auto h-full max-h-[106px] object-cover w-auto"
              alt="imageTwenty"
            />
            <Img
              src="images/img_image21.png"
              className="flex-1 md:flex-none md:h-[106px] sm:h-auto h-full max-h-[106px] object-cover w-auto"
              alt="imageTwentyOne"
            />
          </div>
        </div>
        <div className="bg-white_A700 flex items-start justify-start p-[30px] sm:px-5 w-full">
          <List
            className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1380px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white_A700 border border-gray_300 border-solid flex flex-1 flex-col gap-1 items-start justify-start rounded-[10px] w-full">
              <Img
                src="images/img_rectangle478.png"
                className="h-60 md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                alt="rectangle478"
              />
              <div className="flex h-[228px] md:h-auto items-start justify-between p-4 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <div className="flex items-center justify-start w-full">
                      <Text
                        className="font-semibold text-blue_A200 text-left w-auto"
                        variant="body4"
                      >
                        Read more
                      </Text>
                    </div>
                    <Text
                      className="text-gray_901 text-left tracking-[0.52px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Jupiter
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-full">
                    <Text
                      className="font-normal max-w-[396px] md:max-w-full not-italic text-gray_901 text-left"
                      variant="body5"
                    >
                      Jupiter, our Pricing Decision Support system. This tool
                      was designed with the knowledge that many of our customers
                      face business challenges in earning maximum profits while
                      providing excellent customer service.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 border border-gray_300 border-solid flex flex-1 flex-col gap-1 items-start justify-start rounded-[10px] w-full">
              <Img
                src="images/img_rectangle478_240x428.png"
                className="h-60 md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                alt="rectangle478"
              />
              <div className="flex items-start justify-start p-4 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <div className="flex items-center justify-start w-full">
                      <Text
                        className="font-semibold text-blue_A200 text-left w-auto"
                        variant="body4"
                      >
                        Read more
                      </Text>
                    </div>
                    <Text
                      className="leading-[34.00px] max-w-[396px] md:max-w-full text-gray_901 text-left tracking-[0.52px]"
                      as="h6"
                      variant="h6"
                    >
                      ASMI (Airline Strategic Marketing Intelligence)
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-full">
                    <Text
                      className="font-normal max-w-[396px] md:max-w-full not-italic text-gray_901 text-left"
                      variant="body5"
                    >
                      <>
                        We&#39;d like to introduce ASMI, a strategic marketing
                        tool thatgathers real-time data from multiple sources
                        and analyses itaccording to your specifications.{" "}
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 border border-gray_300 border-solid flex flex-1 flex-col gap-1 items-start justify-start rounded-[10px] w-full">
              <Img
                src="images/img_rectangle478_1.png"
                className="h-60 md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                alt="rectangle478"
              />
              <div className="flex h-[228px] md:h-auto items-start justify-start p-4 w-full">
                <div className="flex flex-col gap-2 h-full items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <div className="flex items-center justify-start w-full">
                      <Text
                        className="font-semibold text-blue_A200 text-left w-auto"
                        variant="body4"
                      >
                        Read more
                      </Text>
                    </div>
                    <Text
                      className="text-gray_901 text-left tracking-[0.52px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      E-Commerce Development
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-full">
                    <Text
                      className="font-normal max-w-[396px] md:max-w-full not-italic text-gray_901 text-left"
                      variant="body4"
                    >
                      Curating digital commerce solutions that help businesses
                      get ahead!
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-deep_purple_600 flex md:flex-col flex-row md:gap-10 gap-[316px] items-center justify-start md:px-10 sm:px-5 px-[70px] py-[62px] w-full">
          <div className="flex flex-1 flex-col gap-7 items-start justify-start w-full">
            <Text
              className="text-left text-white_A700 tracking-[-0.72px] w-auto"
              as="h4"
              variant="h4"
            >
              The fastest way from idea to live site. Period.
            </Text>
            <Text
              className="font-medium text-bluegray_300 text-left w-auto"
              variant="body2"
            >
              Flex is a Small SaaS Business. Flex isn’t a traditional company.
            </Text>
          </div>
          <Button className="bg-indigo_900 cursor-pointer font-medium min-w-[180px] sm:px-5 px-7 py-4 rounded-md shadow-bs text-center text-gray_100 text-lg w-auto">
            Calculate ROI
          </Button>
        </div>
        <div className="bg-black_901 flex md:flex-col flex-row font-montserrat gap-[47px] items-center justify-start p-[25px] sm:px-5 w-full">
          <div className="flex flex-1 flex-col gap-[50px] items-start justify-start md:px-5 w-full">
            <Text
              className="text-left text-shadow-ts text-white_A700 w-auto"
              as="h3"
              variant="h3"
            >
              Join Our Team
            </Text>
            <Text
              className="font-medium leading-[135.20%] max-w-[671px] md:max-w-full text-left text-shadow-ts text-white_A700"
              variant="body4"
            >
              <>
                Welcome to the National Hookah Community Association
                &quot;NHCA&quot;. We are a diverse alliance of businesses from
                all ends of the Hookah experience, from manufacturers and
                importers of molasses, pipes and accessories to distributors,
                Hookah lounges and Hookah/shisha retail stores.
              </>
            </Text>
            <Text
              className="leading-[135.20%] text-left text-white_A700"
              variant="body3"
            >
              <>
                Have any questions?
                <br />
                Contact us!
              </>
            </Text>
            <Button className="bg-indigo_900 cursor-pointer font-bold md:px-10 sm:px-5 px-[46px] py-[21px] rounded-[12px] shadow-bs1 text-center text-lg text-white_A700 w-full">
              Join us
            </Button>
          </div>
          <Img
            src="images/img_jointeamimage.png"
            className="flex-1 md:flex-none h-[459px] sm:h-auto max-h-[459px] object-cover w-auto sm:w-auto md:w-auto"
            alt="jointeamimage"
          />
        </div>
        <div className="bg-white_A700 flex font-nunito items-start justify-start p-[25px] sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[41px] items-start justify-start max-w-[1390px] mx-auto md:px-5 self-stretch w-full">
            <div className="flex sm:flex-1 flex-col gap-9 items-start justify-start w-[436px] sm:w-full">
              <Text
                className="max-w-[436px] md:max-w-full text-bluegray_900 text-left text-shadow-ts"
                as="h2"
                variant="h2"
              >
                Don’t miss our latest blogs
              </Text>
              <Text
                className="max-w-[436px] md:max-w-full not-italic text-gray_400 text-left text-shadow-ts"
                variant="body1"
              >
                Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus
                purus eu, mauris pretium mollis ac id mauris eget.
              </Text>
              <Button className="bg-indigo_900 cursor-pointer font-bold leading-[normal] sm:px-5 px-8 py-[18px] rounded-[9px] shadow-bs1 text-center text-white_A700 text-xl w-full">
                Latest Blogs
              </Button>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[41px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start w-[436px] sm:w-full">
                <Img
                  src="images/img_image2.png"
                  className="h-[158px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-full"
                  alt="imageTwo"
                />
                <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start px-2.5 py-[25px] w-full">
                  <Text
                    className="max-w-[416px] md:max-w-full text-bluegray_900 text-left text-shadow-ts"
                    as="h5"
                    variant="h5"
                  >
                    “Rocket lab boots its space system”
                  </Text>
                  <Text
                    className="font-normal max-w-[416px] md:max-w-full not-italic text-gray_400 text-left text-shadow-ts"
                    variant="body2"
                  >
                    Nmet nullam sed habitasse dignissim viverra congue nisl.
                    Lacus purus eu.
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_700 w-auto"
                    variant="body2"
                  >
                    Read story
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[436px] sm:w-full">
                <Img
                  src="images/img_image2.png"
                  className="h-[158px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-full"
                  alt="imageTwo"
                />
                <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start px-2.5 py-[25px] w-full">
                  <Text
                    className="max-w-[416px] md:max-w-full text-bluegray_900 text-left text-shadow-ts"
                    as="h5"
                    variant="h5"
                  >
                    “Rocket lab boots its space system”
                  </Text>
                  <Text
                    className="font-normal max-w-[416px] md:max-w-full not-italic text-gray_400 text-left text-shadow-ts"
                    variant="body2"
                  >
                    Nmet nullam sed habitasse dignissim viverra congue nisl.
                    Lacus purus eu.
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_700 w-auto"
                    variant="body2"
                  >
                    Read story
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <footer className="flex font-montserrat items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-white_A700 flex items-start justify-start sm:px-5 px-[27px] py-[25px] w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    What does Jupiter do?
                  </Text>
                </div>
                <Img src="images/img_plus.svg" className="h-8 w-8" alt="plus" />
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    What does Jupiter do?
                  </Text>
                </div>
                <Img src="images/img_menu.svg" className="h-8 w-8" alt="menu" />
              </div>
              <div className="flex font-poppins items-start justify-start p-2.5 w-full">
                <Text
                  className="font-normal leading-[127.70%] max-w-[1370px] md:max-w-full not-italic text-bluegray_500 text-left"
                  variant="body4"
                >
                  Today pricing analysts spend hours and hours reacting to
                  tactical sales requests and competitor fare changes; they have
                  very little to no time to think strategically. That’s where
                  Jupiter comes in. You think strategically, Jupiter will do the
                  routine work of processing data, firing algorithms to
                  recommend fares, and automatically filing fares in ATPCO.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    How does Jupiter works?
                  </Text>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-8 w-8"
                  alt="menu_One"
                />
              </div>
              <div className="flex font-poppins items-start justify-start p-2.5 w-full">
                <Text
                  className="font-normal leading-[127.70%] max-w-[1370px] md:max-w-full not-italic text-bluegray_500 text-left"
                  variant="body4"
                >
                  We have carefully chosen our data sources to curate a pricing
                  solution. Jupiter takes the complexity out of pricing. No
                  ALT+TAB to switch through multiple screens, no wading through
                  ATPCO fares and rules terminology, no scope of erroneous
                  filing, and no waiting for fare filing. We have completely
                  automated the process by bringing together all key parameters
                  into a single screen. Now decision making is quick,
                  straightforward and all digital. Filing is also greatly
                  simplified – you can choose from 100% automation to 25%
                  automation in fare Filing. Our Philosophy is to make Pricing
                  intelligent, simple, and effective.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    How does Jupiter different from other revenue Management
                    Solutions?
                  </Text>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-8 w-8"
                  alt="menu_Two"
                />
              </div>
              <div className="flex font-poppins items-start justify-start p-2.5 w-full">
                <Text
                  className="font-normal leading-[127.70%] max-w-[1370px] md:max-w-full not-italic text-bluegray_500 text-left"
                  variant="body4"
                >
                  Revenue management solutions focus on maximizing revenue/seat.
                  Jupiter is a pricing decision support system that scans the
                  market and operational parameters to recommend the best price
                  for a route aligned with your strategy and thus helps in
                  enhancing revenue, profitability, and overall wallet share
                  from each customer persona.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    Can Jupiter identify our competitors?
                  </Text>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-8 w-8"
                  alt="menu_Three"
                />
              </div>
              <div className="flex font-poppins items-start justify-start p-2.5 w-full">
                <Text
                  className="font-normal leading-[127.70%] max-w-[1370px] md:max-w-full not-italic text-bluegray_500 text-left"
                  variant="body4"
                >
                  Jupiter’s intelligent algorithm scans through your market data
                  (DDS, MIDT, PAXIS, infare, QSI to name some) and suggests top
                  competitors for each of your markets. Jupiter is cognizant of
                  the fact that no-one understands your market better than you
                  do and let you define your own competitors as well.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    It’s a new solution. What industry credentials do you have?
                  </Text>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-8 w-8"
                  alt="menu_Four"
                />
              </div>
              <div className="flex font-poppins items-start justify-start p-2.5 w-full">
                <Text
                  className="font-normal leading-[127.70%] max-w-[1370px] md:max-w-full not-italic text-bluegray_500 text-left"
                  variant="body4"
                >
                  Jupiter is currently used by FlyDubai since 2018. We are
                  talking to other airlines in Europe, the US, and Australia.
                  Another Middle Eastern airline is almost ready to go live with
                  the latest version of our product
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    Who can use Jupiter?
                  </Text>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-8 w-8"
                  alt="menu_Five"
                />
              </div>
              <div className="flex font-poppins items-start justify-start p-2.5 w-full">
                <Text
                  className="font-normal not-italic text-bluegray_500 text-left w-auto"
                  variant="body4"
                >
                  Jupiter has use cases for Pricing Analysts, Revenue Managers,
                  and CXOs
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start w-full">
                <div className="flex flex-1 items-start justify-start p-2.5 w-full">
                  <Text
                    className="font-semibold text-bluegray_901 text-left w-auto"
                    variant="body5"
                  >
                    It’s a new solution. What industry credentials do you have?
                  </Text>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-8 w-8"
                  alt="menu_Six"
                />
              </div>
              <div className="flex font-poppins items-start justify-start p-2.5 w-full">
                <Text
                  className="font-normal leading-[127.70%] max-w-[1370px] md:max-w-full not-italic text-bluegray_500 text-left"
                  variant="body4"
                >
                  Jupiter is currently used by FlyDubai since 2018. We are
                  talking to other airlines in Europe, the US, and Australia.
                  Another Middle Eastern airline is almost ready to go live with
                  the latest version of our product
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePagePage;
