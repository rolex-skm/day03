import AuthInput from '@/component/AuthInput';

export default function SignIn() {
  return (
    <AuthInput
      name="Kyoku"
      buttonText="Sign In"
      footerText="Don't have an account?"
      footerLinkText="Sign Up"
      footerHref="/signup"
    />
  );
}
