import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Should load all Header Test Cases", ()=>{
    test("Should load Heading", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load text", () => {
        render(<Contact />);
    
        const heading = screen.getByText("Contact Us");
    
        expect(heading).toBeInTheDocument();
    })
})