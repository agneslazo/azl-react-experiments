import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <div className="app-container">
      <div className="main-card-wrapper">
        <img
          src="https://cdn.auth0.com/website/auth0-logo-dark.svg"
          alt="Auth0 Logo"
          className="auth0-logo"
        />
        <h1 className="main-title">Next.js + Auth0</h1>

        <div className="action-card">
          {user ? (
            <div className="logged-in-section">
              <p className="logged-in-message">✅ Successfully logged in!</p>
              <a href="/auth/logout" className="button logout">
                Log Out
              </a>
            </div>
          ) : (
            <>
              <p className="action-text">
                Welcome! Please log in to access your protected content.
              </p>
              <a href="/auth/login" className="button login">
                Log In
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
