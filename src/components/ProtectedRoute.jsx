import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { pathname } = useLocation();

  // 1️⃣ Wait for Clerk
  if (!isLoaded) return null;

  // 2️⃣ Not signed in → go to sign-in
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" replace />;
  }

  // 3️⃣ Signed in but no role → onboarding
  if (!user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  // 4️⃣ Allowed
  return children;
};

export default ProtectedRoute;
