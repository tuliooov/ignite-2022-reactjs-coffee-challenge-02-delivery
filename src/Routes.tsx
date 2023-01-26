import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export const BASE_PATH = '/ignite-2022-reactjs-coffee-challenge-02-delivery'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={BASE_PATH} element={<HomePage />} />
        <Route path={`${BASE_PATH}/completeOrder`} element={<CompleteOrderPage />} />
        <Route path={`${BASE_PATH}/orderConfirmed`} element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
}
