import { store } from "@/app/lib/redux/store";
import {
  setCredentials,
  logout,
  setError,
} from "@/app/lib/redux/slices/authSlice";
import type { IUser } from "@/types";

const user: IUser = {
  id: "1",
  name: "Test User",
  email: "test@example.com",
  provider: "credentials",
  created_at: "2026-01-01T00:00:00Z",
  updated_at: "2026-01-01T00:00:00Z",
};

describe("redux store", () => {
  afterEach(() => {
    store.dispatch(logout());
  });

  it("exposes an auth slice in its initial state", () => {
    const state = store.getState();
    expect(state.auth).toBeDefined();
    expect(state.auth.isAuthenticated).toBe(false);
  });

  it("updates state when setCredentials is dispatched", () => {
    store.dispatch(setCredentials({ user, token: "abc" }));
    const state = store.getState();
    expect(state.auth.isAuthenticated).toBe(true);
    expect(state.auth.user?.email).toBe("test@example.com");
    expect(state.auth.token).toBe("abc");
  });

  it("records an error through the store", () => {
    store.dispatch(setError("network down"));
    expect(store.getState().auth.error).toBe("network down");
  });
});
