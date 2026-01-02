import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const location = useLocation();

  // 1️⃣ Wait for Clerk to hydrate
  if (!isLoaded) return null;

  // 2️⃣ Not signed in → sign in
  if (!isSignedIn) {
    return (
      <Navigate
        to="/?sign-in=true"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  // 3️⃣ Signed in but role missing → onboarding
  if (!user?.unsafeMetadata?.role) {
    return <Navigate to="/onboarding" replace />;
  }

  // 4️⃣ All good
  return children;
};

export default ProtectedRoute;
