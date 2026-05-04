import { vi } from "vitest";


export const mockFetchSuccess = (data) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data),
    })
  );
};

export const mockFetchError = () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      json: () => Promise.resolve({}),
    })
  );
};

export const mockFetchReject = (message = "Network error") => {
  global.fetch = vi.fn(() =>
    Promise.reject(new Error(message))
  );
};