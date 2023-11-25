import React from "react";
import { auth } from "@/app/firebaseConfig";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";

interface WithAuthProps {
  user: User;
}

function withAuth<T extends WithAuthProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  const WithAuth: React.FC<T> = (props) => {
    const router = useRouter();
    const [user, setUser] = React.useState<User>({} as User);

    React.useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          router.push("/login");
        }
      });
    }, [router]);

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} user={user} />;
  };

  return WithAuth;
}
export default withAuth;
