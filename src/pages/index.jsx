import { Link, Outlet } from "react-router-dom";
export default function RootLayout() {
return (
<div>
<Link to="/">自我介紹</Link> | <Link to="/about">About</Link>
<div>
<Outlet />
</div>
</div>
);
}
export function RootIndex() {
return <h1>我是B10401026鄧立珏</h1>;
}
