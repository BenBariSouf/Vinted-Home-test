import { render, screen } from "@testing-library/react";

import { App } from "../src/App";
jest.mock('../src/utils');


jest.mock('../src/hooks/useLazyLoad', () => ({
	__esModule: true,
	default: jest.fn(),
  }));

  jest.mock('../src/hooks/useInfiniteScroll', () => ({
	__esModule: true,
	default: jest.fn(),
  }));


test("App component display header", () => {
	render(<App />);

	const heading = screen.getByText(/Vinted Home Test. Made with ❤️ by/i);

	expect(heading).toBeInTheDocument();
});