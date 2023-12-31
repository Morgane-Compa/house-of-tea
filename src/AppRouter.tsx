import App from "App"
import CartPage from "pages/CartPage/CartPage"
import HomePage from "pages/HomePage/HomePage"
import NotFoundPage from "pages/NotFoundPage/NotFoundPage"
import PaymentPage from "pages/PaymentPage/PaymentPage"
import ProductDetailsPage, { oneProductLoader } from "pages/ProductDetailsPage/ProductDetailsPage"
import ProductListPage, { productsLoader } from "pages/ProductListPage/ProductListPage"
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
                    element: <ProductListPage />,
                    loader: productsLoader
                },
                {
                    path: '/product-details',
                    element: <ProductDetailsPage />
                },
                {
                    path: '/product/:id',
                    element: <ProductDetailsPage />,
                    loader: oneProductLoader
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