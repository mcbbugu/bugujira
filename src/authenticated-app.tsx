//静态文件
import {ReactComponent as SoftwareLogo} from 'assets/software-logo.svg'

import React from "react"
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import { Button, Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  const {logout, user} = useAuth()
  return <Container>
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'}/>
        <div>用户</div>
        <div>Logo</div>
       </HeaderLeft>
      <HeaderRight>
        <Dropdown overlay={<Menu>
          <Menu.Item key={'logout'}>
            <Button type={'link'} onClick={logout}>登出</Button>
          </Menu.Item>
        </Menu>}>
          <Button type={'link'} onClick={e => e.preventDefault()}>
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
    <Main>
      <ProjectListScreen/>
    </Main>
  </Container>
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

const HeaderItem = styled.h3`
  margin-right: 3rem;
`
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``

const Main = styled.main`
  height: calc(100vh - 6rem)
`