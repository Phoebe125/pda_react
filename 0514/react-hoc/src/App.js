import withUser from "./components/WithUser";
import UserDisplay from "./components/UserDisplay";

const UserDisplayWithUser = withUser(UserDisplay);

function App() {
  return (
    <div>
      <UserDisplayWithUser userId={1} />
    </div>
  );
}

export default App;
