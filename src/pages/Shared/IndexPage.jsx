import { useSelector } from "react-redux";
import LoginButton from '../../components/AccountManagement/LoginButton';
import CreateAccountButton from "../../components/AccountManagement/CreateAccountButton";
import DeleteAccountButton from "../../components/AccountManagement/DeleteAccountButton";
import { useLoaderData } from "react-router-dom";
import TeamTable from "../../components/Team/TeamTable";
import MyLinkList from "../../components/MyLinkList";
export default function IndexPage() {
  const email = useSelector(state => state.user.email);
  const { teamSample } = useLoaderData();
  console.log(teamSample);


  return (
      <>
        {email === '' || !email
          ? <>
              <LoginButton />
              <CreateAccountButton />
            </>
          : <> 
            {email}
            <DeleteAccountButton />
          </>
        }

        <p>Want Ideas? Check out this team!</p>
        <TeamTable teamList={[teamSample]} />


        <br />
        <MyLinkList />
      </>
    );
  }
  