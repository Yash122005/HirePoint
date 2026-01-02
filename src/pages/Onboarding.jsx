import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  // 1️⃣ Wait for Clerk
  if (!isLoaded) {
    return <BarLoader width="100%" color="#36d7b7" />;
  }

  // 2️⃣ Not signed in → FORCE sign-in
  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/onboarding" />;
  }

  const navigateUser = (role) => {
    navigate(role === "recruiter" ? "/post-job" : "/jobs", { replace: true });
  };

  // 3️⃣ Already onboarded → skip
  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [user]);

  const handleRoleSelection = async (role) => {
    await user.update({ unsafeMetadata: { role } });
    navigateUser(role);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="gradient-title font-extrabold text-7xl">
        I am a...
      </h2>

      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button
          variant="blue"
          className="h-36 text-2xl"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>

        <Button
          variant="destructive"
          className="h-36 text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
