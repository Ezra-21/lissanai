import reducer, {
  setCredentials,
  logout,
  setLoading,
  setError,
} from "@/app/lib/redux/slices/authSlice";
import type { IUser } from "@/types";

const sampleUser: IUser = {
  id: "u1",
  name: "Abebe Kebede",
  email: "abebe@example.com",
  provider: "credentials",
  created_at: "2026-01-01T00:00:00Z",
  updated_at: "2026-01-01T00:00:00Z",
};

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

describe("authSlice reducer", () => {
  it("returns the initial state by default", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual(initialState);
  });

  it("setCredentials stores the user, token and authenticates", () => {
    const state = reducer(
      initialState,
      setCredentials({ user: sampleUser, token: "jwt-token" })
    );
    expect(state.user).toEqual(sampleUser);
    expect(state.token).toBe("jwt-token");
    expect(state.isAuthenticated).toBe(true);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("logout clears the session", () => {
    const loggedIn = reducer(
      initialState,
      setCredentials({ user: sampleUser, token: "jwt-token" })
    );
    const state = reducer(loggedIn, logout());
    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });

  it("setLoading toggles the loading flag", () => {
    const state = reducer(initialState, setLoading(true));
    expect(state.loading).toBe(true);
  });

  it("setError records an error and stops loading", () => {
    const loading = reducer(initialState, setLoading(true));
    const state = reducer(loading, setError("Invalid credentials"));
    expect(state.error).toBe("Invalid credentials");
    expect(state.loading).toBe(false);
  });

  it("setError(null) clears a previous error", () => {
    const withError = reducer(initialState, setError("boom"));
    const cleared = reducer(withError, setError(null));
    expect(cleared.error).toBeNull();
  });
});
