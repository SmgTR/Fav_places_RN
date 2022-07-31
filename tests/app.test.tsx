import { render, fireEvent, RenderAPI } from '@testing-library/react-native';

import App from '../App';

describe('App navigation flow', () => {
  let wrapper: RenderAPI;

  beforeEach(() => {
    wrapper = render(<App />);
  });

  test('Displays add place screen', async () => {
    const addButton = await wrapper.findByText(/warner bros/i);
  });
});
