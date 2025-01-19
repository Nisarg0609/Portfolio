import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

import ShipEase from "../assets/ShipEase.png";
import Memories from "../assets/Memories.png";
import QuizApp from "../assets/QuizApp.png";
import TravelAdvisor from "../assets/TravelAdvisor.png";
import QuickMart from "../assets/QuickMart.png";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${
            isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
          }
        `}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const displayedProjects = [
    {
      id: 1,
      Img: ShipEase,
      Title: "Ship Ease",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus tenetur pariatur distinctio repudiandae sapiente laudantium, eaque blanditiis repellendus. Esse, voluptatibus. Consequatur tempore iusto pariatur excepturi repellendus quae omnis ducimus, dolores et aliquid! Illum nemo inventore architecto consectetur, animi soluta magnam, sapiente iste labore accusamus excepturi unde consequatur exercitationem dolores praesentium? Sed reiciendis tempora dignissimos ipsum in libero! Magnam minima repellendus quasi incidunt temporibus maiores placeat iusto ducimus, vitae aliquid, saepe facere assumenda eveniet corrupti alias recusandae veniam asperiores! Minima, sunt architecto ex repellendus veritatis ducimus impedit porro? Odio, nesciunt ullam? Doloribus fugiat veritatis totam sequi rerum consequuntur neque, nostrum saepe cumque minima sapiente atque quaerat, similique aperiam deserunt eius fuga magni perferendis eligendi facere odit voluptatum! Repellat voluptate molestiae maxime placeat officiis incidunt numquam non tempore similique, quidem nam expedita cum sunt a, quos dolor aut. Laborum ullam quasi eius quas rerum? Dignissimos, dolor nesciunt impedit, quibusdam sunt magni fuga, reiciendis perferendis numquam sapiente et saepe! Quas exercitationem vitae quo amet excepturi nulla odit dolorem. Fugiat neque quidem quae blanditiis quaerat sint delectus debitis omnis dignissimos aut ipsam doloremque, a suscipit incidunt ducimus itaque, officia modi possimus voluptas ea? Sed saepe molestias ea mollitia quasi ratione dolorum aliquid nisi eaque cumque explicabo corrupti ab eveniet similique ullam possimus consequuntur, illo veritatis eum dicta voluptatibus quibusdam tenetur? Eligendi nam consequuntur facere ad, accusamus sint dolorem amet. Non, at! Ex ad eum dicta eveniet laudantium nihil. Modi, suscipit. Voluptas, excepturi assumenda expedita recusandae ea dolorem rem dolores delectus. Tenetur veritatis illum voluptatibus nesciunt nemo iure odio consectetur repellat labore iste dicta doloribus eos aspernatur nulla saepe, temporibus facere quis velit. Atque ab expedita facilis nihil excepturi pariatur! Commodi quas autem corporis laborum consequuntur expedita consequatur ratione officia cum incidunt ullam tenetur nesciunt sequi omnis harum, optio facilis atque vero aperiam inventore! Dolorum vel earum in fuga tempora hic! Quia asperiores assumenda provident iusto maxime perspiciatis rem earum error ad consequuntur tempore minus quisquam ex voluptas, amet mollitia qui vitae. Beatae deserunt necessitatibus quisquam ipsam fuga! Suscipit consequatur illum velit placeat asperiores itaque fugit exercitationem natus assumenda aliquid, eligendi quos amet sequi minima! Vitae, molestias ducimus beatae a, numquam dolorem inventore officia porro earum facere dolore ratione delectus, tenetur quasi voluptates totam ex quia suscipit aspernatur. Dolore mollitia in rerum, iusto ipsam, saepe sint perspiciatis quia qui odio, ducimus temporibus pariatur nulla consequatur repellat earum alias repellendus minima. Iste quae placeat dolorem!",
      Link: "https://ship-ease-02.netlify.app/",
    },
    {
      id: 2,
      Img: Memories,
      Title: "Memories Application",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus tenetur pariatur distinctio repudiandae sapiente laudantium, eaque blanditiis repellendus. Esse, voluptatibus. Consequatur tempore iusto pariatur excepturi repellendus quae omnis ducimus, dolores et aliquid! Illum nemo inventore architecto consectetur, animi soluta magnam, sapiente iste labore accusamus excepturi unde consequatur exercitationem dolores praesentium? Sed reiciendis tempora dignissimos ipsum in libero! Magnam minima repellendus quasi incidunt temporibus maiores placeat iusto ducimus, vitae aliquid, saepe facere assumenda eveniet corrupti alias recusandae veniam asperiores! Minima, sunt architecto ex repellendus veritatis ducimus impedit porro? Odio, nesciunt ullam? Doloribus fugiat veritatis totam sequi rerum consequuntur neque, nostrum saepe cumque minima sapiente atque quaerat, similique aperiam deserunt eius fuga magni perferendis eligendi facere odit voluptatum! Repellat voluptate molestiae maxime placeat officiis incidunt numquam non tempore similique, quidem nam expedita cum sunt a, quos dolor aut. Laborum ullam quasi eius quas rerum? Dignissimos, dolor nesciunt impedit, quibusdam sunt magni fuga, reiciendis perferendis numquam sapiente et saepe! Quas exercitationem vitae quo amet excepturi nulla odit dolorem. Fugiat neque quidem quae blanditiis quaerat sint delectus debitis omnis dignissimos aut ipsam doloremque, a suscipit incidunt ducimus itaque, officia modi possimus voluptas ea? Sed saepe molestias ea mollitia quasi ratione dolorum aliquid nisi eaque cumque explicabo corrupti ab eveniet similique ullam possimus consequuntur, illo veritatis eum dicta voluptatibus quibusdam tenetur? Eligendi nam consequuntur facere ad, accusamus sint dolorem amet. Non, at! Ex ad eum dicta eveniet laudantium nihil. Modi, suscipit. Voluptas, excepturi assumenda expedita recusandae ea dolorem rem dolores delectus. Tenetur veritatis illum voluptatibus nesciunt nemo iure odio consectetur repellat labore iste dicta doloribus eos aspernatur nulla saepe, temporibus facere quis velit. Atque ab expedita facilis nihil excepturi pariatur! Commodi quas autem corporis laborum consequuntur expedita consequatur ratione officia cum incidunt ullam tenetur nesciunt sequi omnis harum, optio facilis atque vero aperiam inventore! Dolorum vel earum in fuga tempora hic! Quia asperiores assumenda provident iusto maxime perspiciatis rem earum error ad consequuntur tempore minus quisquam ex voluptas, amet mollitia qui vitae. Beatae deserunt necessitatibus quisquam ipsam fuga! Suscipit consequatur illum velit placeat asperiores itaque fugit exercitationem natus assumenda aliquid, eligendi quos amet sequi minima! Vitae, molestias ducimus beatae a, numquam dolorem inventore officia porro earum facere dolore ratione delectus, tenetur quasi voluptates totam ex quia suscipit aspernatur. Dolore mollitia in rerum, iusto ipsam, saepe sint perspiciatis quia qui odio, ducimus temporibus pariatur nulla consequatur repellat earum alias repellendus minima. Iste quae placeat dolorem!",
      Link: "https://memories-application-react.netlify.app/",
    },
    {
      id: 3,
      Img: TravelAdvisor,
      Title: "Travel Advisor",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus tenetur pariatur distinctio repudiandae sapiente laudantium, eaque blanditiis repellendus. Esse, voluptatibus. Consequatur tempore iusto pariatur excepturi repellendus quae omnis ducimus, dolores et aliquid! Illum nemo inventore architecto consectetur, animi soluta magnam, sapiente iste labore accusamus excepturi unde consequatur exercitationem dolores praesentium? Sed reiciendis tempora dignissimos ipsum in libero! Magnam minima repellendus quasi incidunt temporibus maiores placeat iusto ducimus, vitae aliquid, saepe facere assumenda eveniet corrupti alias recusandae veniam asperiores! Minima, sunt architecto ex repellendus veritatis ducimus impedit porro? Odio, nesciunt ullam? Doloribus fugiat veritatis totam sequi rerum consequuntur neque, nostrum saepe cumque minima sapiente atque quaerat, similique aperiam deserunt eius fuga magni perferendis eligendi facere odit voluptatum! Repellat voluptate molestiae maxime placeat officiis incidunt numquam non tempore similique, quidem nam expedita cum sunt a, quos dolor aut. Laborum ullam quasi eius quas rerum? Dignissimos, dolor nesciunt impedit, quibusdam sunt magni fuga, reiciendis perferendis numquam sapiente et saepe! Quas exercitationem vitae quo amet excepturi nulla odit dolorem. Fugiat neque quidem quae blanditiis quaerat sint delectus debitis omnis dignissimos aut ipsam doloremque, a suscipit incidunt ducimus itaque, officia modi possimus voluptas ea? Sed saepe molestias ea mollitia quasi ratione dolorum aliquid nisi eaque cumque explicabo corrupti ab eveniet similique ullam possimus consequuntur, illo veritatis eum dicta voluptatibus quibusdam tenetur? Eligendi nam consequuntur facere ad, accusamus sint dolorem amet. Non, at! Ex ad eum dicta eveniet laudantium nihil. Modi, suscipit. Voluptas, excepturi assumenda expedita recusandae ea dolorem rem dolores delectus. Tenetur veritatis illum voluptatibus nesciunt nemo iure odio consectetur repellat labore iste dicta doloribus eos aspernatur nulla saepe, temporibus facere quis velit. Atque ab expedita facilis nihil excepturi pariatur! Commodi quas autem corporis laborum consequuntur expedita consequatur ratione officia cum incidunt ullam tenetur nesciunt sequi omnis harum, optio facilis atque vero aperiam inventore! Dolorum vel earum in fuga tempora hic! Quia asperiores assumenda provident iusto maxime perspiciatis rem earum error ad consequuntur tempore minus quisquam ex voluptas, amet mollitia qui vitae. Beatae deserunt necessitatibus quisquam ipsam fuga! Suscipit consequatur illum velit placeat asperiores itaque fugit exercitationem natus assumenda aliquid, eligendi quos amet sequi minima! Vitae, molestias ducimus beatae a, numquam dolorem inventore officia porro earum facere dolore ratione delectus, tenetur quasi voluptates totam ex quia suscipit aspernatur. Dolore mollitia in rerum, iusto ipsam, saepe sint perspiciatis quia qui odio, ducimus temporibus pariatur nulla consequatur repellat earum alias repellendus minima. Iste quae placeat dolorem!",
      Link: "https://traveladvisorweb.netlify.app",
    },
    {
      id: 4,
      Img: QuickMart,
      Title: "Quick Mart",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus tenetur pariatur distinctio repudiandae sapiente laudantium, eaque blanditiis repellendus. Esse, voluptatibus. Consequatur tempore iusto pariatur excepturi repellendus quae omnis ducimus, dolores et aliquid! Illum nemo inventore architecto consectetur, animi soluta magnam, sapiente iste labore accusamus excepturi unde consequatur exercitationem dolores praesentium? Sed reiciendis tempora dignissimos ipsum in libero! Magnam minima repellendus quasi incidunt temporibus maiores placeat iusto ducimus, vitae aliquid, saepe facere assumenda eveniet corrupti alias recusandae veniam asperiores! Minima, sunt architecto ex repellendus veritatis ducimus impedit porro? Odio, nesciunt ullam? Doloribus fugiat veritatis totam sequi rerum consequuntur neque, nostrum saepe cumque minima sapiente atque quaerat, similique aperiam deserunt eius fuga magni perferendis eligendi facere odit voluptatum! Repellat voluptate molestiae maxime placeat officiis incidunt numquam non tempore similique, quidem nam expedita cum sunt a, quos dolor aut. Laborum ullam quasi eius quas rerum? Dignissimos, dolor nesciunt impedit, quibusdam sunt magni fuga, reiciendis perferendis numquam sapiente et saepe! Quas exercitationem vitae quo amet excepturi nulla odit dolorem. Fugiat neque quidem quae blanditiis quaerat sint delectus debitis omnis dignissimos aut ipsam doloremque, a suscipit incidunt ducimus itaque, officia modi possimus voluptas ea? Sed saepe molestias ea mollitia quasi ratione dolorum aliquid nisi eaque cumque explicabo corrupti ab eveniet similique ullam possimus consequuntur, illo veritatis eum dicta voluptatibus quibusdam tenetur? Eligendi nam consequuntur facere ad, accusamus sint dolorem amet. Non, at! Ex ad eum dicta eveniet laudantium nihil. Modi, suscipit. Voluptas, excepturi assumenda expedita recusandae ea dolorem rem dolores delectus. Tenetur veritatis illum voluptatibus nesciunt nemo iure odio consectetur repellat labore iste dicta doloribus eos aspernatur nulla saepe, temporibus facere quis velit. Atque ab expedita facilis nihil excepturi pariatur! Commodi quas autem corporis laborum consequuntur expedita consequatur ratione officia cum incidunt ullam tenetur nesciunt sequi omnis harum, optio facilis atque vero aperiam inventore! Dolorum vel earum in fuga tempora hic! Quia asperiores assumenda provident iusto maxime perspiciatis rem earum error ad consequuntur tempore minus quisquam ex voluptas, amet mollitia qui vitae. Beatae deserunt necessitatibus quisquam ipsam fuga! Suscipit consequatur illum velit placeat asperiores itaque fugit exercitationem natus assumenda aliquid, eligendi quos amet sequi minima! Vitae, molestias ducimus beatae a, numquam dolorem inventore officia porro earum facere dolore ratione delectus, tenetur quasi voluptates totam ex quia suscipit aspernatur. Dolore mollitia in rerum, iusto ipsam, saepe sint perspiciatis quia qui odio, ducimus temporibus pariatur nulla consequatur repellat earum alias repellendus minima. Iste quae placeat dolorem!",
      Link: "https://quick-mart-react-app.netlify.app/",
    },
    {
      id: 5,
      Img: QuizApp,
      Title: "Quiz App",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus tenetur pariatur distinctio repudiandae sapiente laudantium, eaque blanditiis repellendus. Esse, voluptatibus. Consequatur tempore iusto pariatur excepturi repellendus quae omnis ducimus, dolores et aliquid! Illum nemo inventore architecto consectetur, animi soluta magnam, sapiente iste labore accusamus excepturi unde consequatur exercitationem dolores praesentium? Sed reiciendis tempora dignissimos ipsum in libero! Magnam minima repellendus quasi incidunt temporibus maiores placeat iusto ducimus, vitae aliquid, saepe facere assumenda eveniet corrupti alias recusandae veniam asperiores! Minima, sunt architecto ex repellendus veritatis ducimus impedit porro? Odio, nesciunt ullam? Doloribus fugiat veritatis totam sequi rerum consequuntur neque, nostrum saepe cumque minima sapiente atque quaerat, similique aperiam deserunt eius fuga magni perferendis eligendi facere odit voluptatum! Repellat voluptate molestiae maxime placeat officiis incidunt numquam non tempore similique, quidem nam expedita cum sunt a, quos dolor aut. Laborum ullam quasi eius quas rerum? Dignissimos, dolor nesciunt impedit, quibusdam sunt magni fuga, reiciendis perferendis numquam sapiente et saepe! Quas exercitationem vitae quo amet excepturi nulla odit dolorem. Fugiat neque quidem quae blanditiis quaerat sint delectus debitis omnis dignissimos aut ipsam doloremque, a suscipit incidunt ducimus itaque, officia modi possimus voluptas ea? Sed saepe molestias ea mollitia quasi ratione dolorum aliquid nisi eaque cumque explicabo corrupti ab eveniet similique ullam possimus consequuntur, illo veritatis eum dicta voluptatibus quibusdam tenetur? Eligendi nam consequuntur facere ad, accusamus sint dolorem amet. Non, at! Ex ad eum dicta eveniet laudantium nihil. Modi, suscipit. Voluptas, excepturi assumenda expedita recusandae ea dolorem rem dolores delectus. Tenetur veritatis illum voluptatibus nesciunt nemo iure odio consectetur repellat labore iste dicta doloribus eos aspernatur nulla saepe, temporibus facere quis velit. Atque ab expedita facilis nihil excepturi pariatur! Commodi quas autem corporis laborum consequuntur expedita consequatur ratione officia cum incidunt ullam tenetur nesciunt sequi omnis harum, optio facilis atque vero aperiam inventore! Dolorum vel earum in fuga tempora hic! Quia asperiores assumenda provident iusto maxime perspiciatis rem earum error ad consequuntur tempore minus quisquam ex voluptas, amet mollitia qui vitae. Beatae deserunt necessitatibus quisquam ipsam fuga! Suscipit consequatur illum velit placeat asperiores itaque fugit exercitationem natus assumenda aliquid, eligendi quos amet sequi minima! Vitae, molestias ducimus beatae a, numquam dolorem inventore officia porro earum facere dolore ratione delectus, tenetur quasi voluptates totam ex quia suscipit aspernatur. Dolore mollitia in rerum, iusto ipsam, saepe sint perspiciatis quia qui odio, ducimus temporibus pariatur nulla consequatur repellat earum alias repellendus minima. Iste quae placeat dolorem!",
      Link: "https://quiz-app-89.netlify.app/",
    },
  ];

  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Projects"
    >
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Personal Projects
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Showcasing a collection of projects that highlight my journey in building
          impactful and user-centric web applications.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("projects")}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          {/* <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"
                    }
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel> */}
        </SwipeableViews>
        {/* <TabPanel value={value} index={2} dir={theme.direction}> */}

        {/* </TabPanel> */}
      </Box>
    </div>
  );
}
