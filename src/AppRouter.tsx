import App from "App"
import CartPage from "pages/CartPage/CartPage"
import HomePage from "pages/HomePage/HomePage"
import NotFoundPage from "pages/NotFoundPage/NotFoundPage"
import PaymentPage from "pages/PaymentPage/PaymentPage"
import ProductDetailsPage from "pages/ProductDetailsPage/ProductDetailsPage"
import ProductListPage from "pages/ProductListPage/ProductListPage"
import RecapPage from "pages/RecapPage/RecapPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: '/products',
                    element: <ProductListPage /> 
                },
                {
                    path: '/product:id',
                    element: <ProductDetailsPage /> 
                },
                {
                    path: '/cart',
                    element: <CartPage /> 
                },
                {
                    path: '/payment',
                    element: <PaymentPage /> 
                },
                {
                    path: '/recap',
                    element: <RecapPage /> 
                },
            ]
        }
    ]);
    return <RouterProvider router={router}/>
}

export default AppRouter