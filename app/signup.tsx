import AuthInput from '@/component/AuthInput';

export default function SignUp() {
  return (
    <AuthInput
      name="KYOKU"
      buttonText="Sign Up"
      footerText="Already have an account?"
      footerLinkText="Sign In"
      footerHref="/signin"
    />
  );
}
