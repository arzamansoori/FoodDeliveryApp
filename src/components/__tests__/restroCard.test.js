import { render, screen } from "@testing-library/react"
import RestroCard from "../RestroCard"
import MOCK_Data from "../mocks/retroCardData.mock.json"
import "@testing-library/jest-dom"


test("", ()=>{
    console.log("Mock data",MOCK_Data.id)
    render(<RestroCard resData={MOCK_Data} />);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
});