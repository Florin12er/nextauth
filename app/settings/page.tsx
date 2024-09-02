import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const sesstion = await auth();
  return (
    <div>
      {JSON.stringify(sesstion)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default SettingsPage;
