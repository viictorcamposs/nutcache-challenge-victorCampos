import { AiFillHome, AiFillFolder } from "react-icons/ai";
import { BsPeopleFill, BsBarChartFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";

import { Container, Content, Navigation, List, Link } from "./styles";

export const Sidebar = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <img src="/assets/logo.svg" alt="Logo" />

        <Navigation>
          <List>
            <Link>
              <a href="#">
                <AiFillHome />
                <span>Home</span>
              </a>
            </Link>
            <Link active>
              <a href="#">
                <BsPeopleFill />
                <span>Employees</span>
              </a>
            </Link>
            <Link>
              <a href="#">
                <BsBarChartFill />
                <span>Analytics</span>
              </a>
            </Link>
            <Link>
              <a href="#">
                <AiFillFolder />
                <span>Documents</span>
              </a>
            </Link>
            <Link>
              <a href="#">
                <MdSettings />
                <span>Settings</span>
              </a>
            </Link>
          </List>
        </Navigation>
      </Content>
    </Container>
  );
};
