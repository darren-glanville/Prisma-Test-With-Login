import SubHeader from "../../components/SubHeader";

const Settings = (props) => {
    return <SubHeader>Site Settings</SubHeader>;
};

Settings.auth = {
    role: "admin", // only allow admins to view
};
export default Settings;
