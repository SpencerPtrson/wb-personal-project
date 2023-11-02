export default function LoginForm({ onLogin }) {
  return (
    <form method='get' 
      onSubmit={(e) => {
        e.preventDefault();
        onLogin(e, {
          email: email.value,
          password: password.value,
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
