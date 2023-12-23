import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
        <div>
            Hello, Setup Page!
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}
export default SetupPage;
