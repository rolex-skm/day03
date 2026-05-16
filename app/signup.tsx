import AuthInput from '@/component/AuthInput';

export default function SignUp() {
  return (
    <AuthInput
      name="Kyoku"
      buttonText="Sign Up"
      footerText="Already have an account?"
      footerLinkText="Sign In"
      footerHref="/signin"
    />
  );
}
