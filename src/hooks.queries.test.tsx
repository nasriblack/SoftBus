import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper, useRepoData } from './utils/HelpersTesting';

describe('query hooks', () => {
  test('successful Seat api', async () => {
    const { result } = renderHook(() => useRepoData(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
