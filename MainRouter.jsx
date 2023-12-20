import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                {/* <a href='/'>home</a>
                <a href='/about'>about</a> */}
                <a href='/about'>about with anchor</a>
                <br />
                <Link to="/">Home with Link</Link>
                <Link to="/about">About Us with Link</Link>
                {/* <Slider /> */}
                <h1>Hello World</h1>
                {/* <Link to="about">About Us</Link> */}
            </div>
        ),
    },
    {
        path: "/about",
        element: (
            <div>
                <a href='/'>home with anchor</a>
                <a href='/about'>about with anchor</a>
                <br />
                <Link to="/">Home with Link</Link>
                <Link to="/about">About Us with Link</Link>
                <h2>About us page data</h2>
            </div>
        ),
    }
])
export default router;