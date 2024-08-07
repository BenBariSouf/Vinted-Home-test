import { Photo as PhotoType } from "../src/types";
import { render, screen } from "@testing-library/react";
import Photo from "../src/components/Photo";
jest.mock('../src/utils');

const mockPhoto: PhotoType = {
  id: "photo123",
  owner: "user123",
  ownername: "John Doe",
  title: "Test Photo",
  secret: "testsecret",
  server: "testserver",
  farm: 1
};

jest.mock('../src/hooks/useLazyLoad', () => ({
  __esModule: true,
  default: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;


test('renders basic photo information', () => {
  render(<Photo photo={mockPhoto} isLiked={false} addToFavourites={() => { }} />);

  const image = screen.getByRole('img');
  const titleElement = screen.getByText('Test Photo');
  const authorElement = screen.getByText('John Doe');

  expect(image).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
});