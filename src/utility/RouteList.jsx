import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import RecipePage from "../page/RecipePage";
import NotFound from "../page/NotFound";
import ContactPage from "../page/ContactPage";
import MenuPage from "../page/MenuPage";
import NutritionCalculator from "../page/NutritionCalculator";

export const RouterList = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/calculator',
        element: <NutritionCalculator />
    },
    {
        path: '/recipe',
        element: <MenuPage />

    },
    {
        path: '/recipe/:id',
        element: <RecipePage />

    },
    {
        path: '/contact',
        element: <ContactPage />

    },
    

    {
        path: '*',
        element: <NotFound />
    
    },
])