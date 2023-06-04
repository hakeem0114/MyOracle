
//React imports
import { describe, it, expect } from 'vitest';
import { render, screen , waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//React Component Imports
import App from '../../App';

//Vitest Setup & CleanUp Imports
import { afterAll, afterEach, beforeAll } from 'vitest'

//Mock service worker imports
import { setupServer } from 'msw/node'
import {rest } from 'msw'



//Template from vitest & msw docs
const server = setupServer(
    rest.get('https://geo.ipify.org/api/v2/country,city', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          ip: '184.150.92.0',
          isp: 'Bell Canada',
          location: {
            timezone: '-4:00',
            lat: 0,
            lng: 0,
          },
        })
      );
    })
  );

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

//  Close server after all tests
afterAll(() => server.close())



it('<App>', async () => {
    render(<App />);

    //Wait for items to be rendered on screen
    await waitFor(() => {
         
        expect(screen.getByText('184.150.92.0')).toBeVisible();
        expect(screen.getByText('UTC -4:00')).toBeVisible();
        expect(screen.getByText('Bell Canada')).toBeVisible();
      });
  
    
    //Other DOM elements
     const queryBar = screen.getByRole('textbox'); //type: text in styling to fix
     const submitButton = screen.getByRole('button', { name: /button-name/i })

     /****IP ADDRESS TEST */
        //Test IP address using user simulated event
        await userEvent.type(queryBar, '174.4.76.7'); //User inputs this
        expect(queryBar).toHaveValue('174.4.76.7'); //We should expect this

        //Re-use mock server to test API call (API would retrieve this)
        server.use(
            rest.get('https://geo.ipify.org/api/v2/country,city', (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                ip: '174.4.76.7',
                isp: 'Shaw Communications Inc',
                location: {
                    timezone: '-4:00',
                    lat: 0,
                    lng: 0,
                  },
                })
              );
            })
          );
        
        //User simulated submission
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('174.4.76.7')).toBeVisible();
            expect(screen.getByText('UTC -4:00')).toBeVisible();
            expect(screen.getByText('Shaw Communications Inc')).toBeVisible();
        });


});



  