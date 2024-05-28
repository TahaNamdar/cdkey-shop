import { useSession } from "next-auth/react";

export default function Form() {
  const { data: session } = useSession();

  return <div>F</div>;
}
