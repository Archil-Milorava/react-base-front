import { handleSignIn, handleSignUp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: signUp,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: handleSignUp,
    onSuccess: () => {
      toast.success("account created successfully");
      navigate("/login");
    },
  });

  return { signUp, error, isPending, isError };
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const {
    mutate: signIn,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: handleSignIn,
    onSuccess: () => {
      toast.success("welcome");
      navigate("/");
    },
  });

  return { signIn, error, isPending, isError };
};
