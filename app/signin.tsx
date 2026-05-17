import AuthInput from '@/component/AuthInput';

export default function SignIn() {
  return (
    <AuthInput
      name="KYOKU"
      buttonText="Sign In"
      footerText="Don't have an account?"
      footerLinkText="Sign Up"
      footerHref="/signup"
    />
  );
}
