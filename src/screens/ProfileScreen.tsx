import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ProfileScreen = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  return (
    <>
      {userInfo ? (
        <Card style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>{userInfo.name} users' profile</Card.Title>
            <Card.Text>{userInfo.email}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        "Not found user"
      )}
    </>
  );
};
