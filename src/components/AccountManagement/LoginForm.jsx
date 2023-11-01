export default function LoginForm({ onLogin }) {

  return (
    <form method='get' action="/login"
      onSubmit={(e) => {
        onLogin(e, {
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
      <button type="submit">Log In</button>
    </form>
  );
}
