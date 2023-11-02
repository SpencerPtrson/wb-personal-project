export default function CreateAccountForm({ onCreateAccount }) {
    return (
      <form method='post' action="/createAccount"
        onSubmit={(e) => {
          e.preventDefault();
          onCreateAccount(e, {
            email: emailValue,
            password: passwordValue,
          });
        }}
      >
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          id="email"
          type="text"
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          id="password"
          type="password"
          required
        />
        <button type="submit">Create Account</button>
      </form>
    );
  }
  