import { LoadingOverlay } from './LoadingOverlay';
import { render } from '@testing-library/react';

describe('LoadingOverlay', () => {
  it('should show if loading is true', () => {
    const { debug } = render(<LoadingOverlay loading={true} />);
    debug();
    //const valueCheck = LoadingOverlay.
    //expect(valueCheck).toBeTruthy()
    //
  });
});

// npx jest ~/TechnicalAssignmentQuin/src/components/LoadingOverlay.test.ts --watch
