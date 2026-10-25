export default function ConditionalOutputInline() {
  const loggedIn = false;
  // on your own
  const guest = true;
  return (
    <div id="wd-conditional-output-inline">
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
      {/* on your own */}
      {guest && <h2>Guest Inline</h2>}
    </div>
  );
}
