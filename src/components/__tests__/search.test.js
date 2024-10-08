import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should search the restaurant list for burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {name : "Search"});
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {target:{value: "burger"}});
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard")
  expect(cardsAfterSearch.length).toBe(2);
});

test("Should render the top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);
  
    const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard")
    expect(cardsAfterFilter.length).toBe(14);
});
