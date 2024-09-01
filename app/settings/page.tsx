import { auth } from "@/auth";

const SettingsPage = async () => {
  const sesstion = await auth();
  return <div>{JSON.stringify(sesstion)}</div>;
};

export default SettingsPage;
