import { render } from '@testing-library/react';

import FormControlLabel from './FormControlLabel';

describe('FormControlLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormControlLabel />);
    expect(baseElement).toBeTruthy();
  });
});
