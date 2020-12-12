import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

    // Write up the two tests here and make sure they are testing what the title shows

    test("form header renders", () => {

        // act(() => { render(<CheckoutForm />)
        render(<CheckoutForm />)
        expect(screen.getByText(/checkout form/i)).toBeInTheDocument()


    });

    test("form shows success message on submit with form details", () => {

            //render form
            render(<CheckoutForm />)
            
            //get fields
            const firstName = screen.getByLabelText(/first name/i)
            const lastName = screen.getByLabelText(/last name/i)
            const address = screen.getByLabelText(/address/i)
            const city = screen.getByLabelText(/city/i)
            const state = screen.getByLabelText(/state/i)
            const zip = screen.getByLabelText(/zip/i)
            const button = screen.getByRole('button', {name: /checkout/i})
        
        
            //fill out form
            userEvent.type(firstName, 'Pete')
            userEvent.type(lastName, 'Van Straaten')
            userEvent.type(address, '123 Main Street')
            userEvent.type(city, 'San Francisco')
            userEvent.type(state, 'California')
            userEvent.type(zip, '98210')

            //click button
            userEvent.click(button)

        //Expect to find success message containing following
        const successMessage = screen.getByText(/you have ordered some plants/i)
        const name = screen.getByText(/pete van straaten/i)
        const streetResult = screen.getByText(/123 main street/i)
        const addressResult = screen.getByText(/san francisco, california 98210/i)

        expect(successMessage).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(streetResult).toBeInTheDocument()
        expect(addressResult).toBeInTheDocument()


    });
