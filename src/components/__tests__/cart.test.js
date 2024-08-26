import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockItemMenuList";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../reduxComponents/appStore";
import "@testing-library/jest-dom";
import Header from "../Header"
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render accordion header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Cornetto (7)");
  expect(accordionHeader).toBeInTheDocument();
});

test("Should check the length of Acordion header on clicking", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Cornetto (7)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(7);
});

test("Should find add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Cornetto (7)");
  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", {name: "ADD +"});
  const cartItemsBeforeClick = screen.getByText("Cart- (0 items)");
  expect(cartItemsBeforeClick).toBeInTheDocument();

  fireEvent.click(addBtns[0]);

  const cartItemsAfterClick = screen.getByText("Cart- (1 items)");
  expect(cartItemsAfterClick).toBeInTheDocument();
});
