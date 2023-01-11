import { createWebHistory, createRouter } from "vue-router";
import ProductPage from "@/pages/ProductPage";
import MainPage from "@/pages/MainPage";
import ProfilePage from "@/pages/ProfilePage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: MainPage,
    },
    {
        path: '/product/:id',
        name: "ProductPage",
        component: ProductPage
    },
    {
        path: '/profile',
        name: "ProfilePage",
        component: ProfilePage
    },
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});

export default index;