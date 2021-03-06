import {Menu} from "antd";
import Link from "next/link";
import {AppstoreOutlined, LoginOutlined, LogoutOutlined, UserAddOutlined
} from '@ant-design/icons'

const {Item} = Menu;

const TopNav = () => {
    return (
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined/>}>
                <Link href = "/">
                    <a className="typewriter">App</a>
                </Link>
            </Item>

            <Item icon={<LoginOutlined/>}>
                <Link href = "/login">
                    <a className="typewriter">Login</a>
                </Link>
            </Item>
            <Item icon={<UserAddOutlined/>}>
                <Link href = "/register">
                    <a className="typewriter">Register</a>
                </Link>
            </Item>

        </Menu>
    );
};

export default TopNav;