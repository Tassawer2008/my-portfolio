import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function AboutTabs() {
  return (
    <Tabs
      defaultActiveKey="skills"
      id="about-tabs"
      className="mb-3"
    >
      <Tab eventKey="skills" title="Main skills">
        <div className="single-tab-content">
            <ul>
                <li><a href="/service">User experience design <span> - UI/UX</span></a>Delight the user and make it work.</li>
                <li><a href="/service">Web and user interface design<span> - Development</span></a>Websites, web experiences, ...</li>
                <li><a href="/service">Interaction design <span> - Animation</span></a>I like to move it move it.</li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="experience" title="Experience">
        <div className="single-tab-content">
            <ul>
                <li><a href="/service">User experience design <span> - UI/UX</span></a>Delight the user and make it work.</li>
                <li><a href="/service">Web and user interface design<span> - Development</span></a>Websites, web experiences, ...</li>
                <li><a href="/service">Interaction design <span> - Animation</span></a>I like to move it move it.</li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="education" title="Education & Certification">
        <div className="single-tab-content">
            <ul>
                <li><a href="/service">User experience design <span> - UI/UX</span></a>Delight the user and make it work.</li>
                <li><a href="/service">Web and user interface design<span> - Development</span></a>Websites, web experiences, ...</li>
                <li><a href="/service">Interaction design <span> - Animation</span></a>I like to move it move it.</li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="awards" title="Awards">
        <div className="single-tab-content">
            <ul>
                <li><a href="/service">Awwwards.com <span> - Winner</span></a>2019 - 2020</li>
                <li><a href="/service">CSS Design Awards<span> - Winner</span></a>2017 - 2018</li>
                <li><a href="/service">Design nominees <span> - Winner</span></a>2013- 2014</li>
            </ul>
        </div>
      </Tab>
    </Tabs>
  );
}

export default AboutTabs;