import React, { useEffect, useState } from "react";
import { Col, Layout, Menu, Row, Switch, theme, Breadcrumb } from "antd";
import { useColor } from "../../context/ColorContext";
import { useTitle } from "../../context/TitleContext";

const { Header, Content, Footer, Sider } = Layout;

const defaultTheme = "light";

const MainLayout = ({ menu, children, onChangeTheme }) => {
  const { color } = useColor();
  const { title } = useTitle();
  const [collapsed, setCollapsed] = useState(false);
  const [themeState, setThemeState] = useState(defaultTheme);
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();

  const handleChangeTheme = (value) => {
    onChangeTheme(value);
    setThemeState(value ? "dark" : "light");
  };

  useEffect(() => {
    if (defaultTheme === "dark") {
      onChangeTheme(true);
    }
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: color,
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: colorBgContainer }}
        theme={themeState}
      >
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={menu} />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }}>
          {`${title.name}`}
          <Row>
            <Col flex="auto" />
            <Col>
              <Switch
                checkedChildren="dark"
                unCheckedChildren="light"
                onChange={handleChangeTheme}
                defaultChecked={defaultTheme !== "light"}
              />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            {title.role ? `${title.role} / ${title.name}` : "Select User"}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              color: colorText,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Admin Panel ©2023 Created by İsmail Emre Güngör
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
