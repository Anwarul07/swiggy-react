import { render } from "@testing-library/react"
import { Header } from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";;



test("Online Status should be green on rendering header", () => {
    //load header

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    console.log(header);
    //check if logo is loaded
    const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});


test("Cart should have 0 items on rendering header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    // Check if logo is loaded
    const cart = header.getByTestId("cart");
  
    expect(cart.innerHTML).toBe("Cart- 0 items");
  });
  
