import React from "react";
import Tab from "./components/Tab";
import TabList from "./components/Tab/TabList";
import TabContent from "./components/Tab/TabContent";
import TabPanel from "./components/Tab/TabPanel";
import TabItem from "./components/Tab/TabItem";
import userIcon from "../src/assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Tab defaultactive={2}>
      <TabList>
        <TabItem icon={[userIcon, 'rotate', ]} >Nunc tincidunt</TabItem>
        <TabItem disable>Proin dolor</TabItem>
        <TabItem icon={<FontAwesomeIcon icon={faCoffee} />}>
          Aenean lacinia
        </TabItem>
        <TabItem>Consectetur</TabItem>
      </TabList>
      <TabContent>
        <TabPanel>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Pariatur blanditiis
          soluta beatae obcaecati dolore. Impedit et qui necessitatibus
          doloribus? Quod ut nobis modi, voluptatum sit ex exercitationem vel
          suscipit fugit.
        </TabPanel>
        <TabPanel>
          Error autem corrupti magnam labore deserunt optio doloribus.
        </TabPanel>
        <TabPanel>
          Sunt, debitis. Esse illo quam ullam suscipit sed quae sint recusandae
          eos necessitatibus laborum!
        </TabPanel>
      </TabContent>
    </Tab>
  );
}

export default App;
