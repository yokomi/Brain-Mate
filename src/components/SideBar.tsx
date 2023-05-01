import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  VideoCameraOutlined,
	SettingOutlined,
	LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Sider } = Layout;

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
		<Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
			<Menu  defaultSelectedKeys={['1']} mode="inline">
				 <Menu.Item key={"dashboard"} icon={<span>🏠</span>}>
            <Link href={"/dashboard"}>
              Dashboard
            </Link>
          </Menu.Item>
					<Menu.Item key={"calendar"} icon={<CalendarOutlined />}>
            <Link href={"/calendar"}>
              Calendar
            </Link>
          </Menu.Item>
					<Menu.Item key={"find"} icon={<VideoCameraOutlined />}>
            <Link href={"/find"}>
              Find a Buddy
            </Link>
          </Menu.Item>
					<Menu.Item key={"settings"} icon={<SettingOutlined />}>
						<Link href={"/settings"}>
							Setting
						</Link>
					</Menu.Item>
					<Menu.Item key={"logout"} icon={<LogoutOutlined />}>
						<Link href={"/logout"}>
							로그아웃
						</Link>
					</Menu.Item>
			</Menu>
		</Sider>
  );
};

export default SideBar;