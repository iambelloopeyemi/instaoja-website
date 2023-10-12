import WaitListForm from "./WaitListForm";

export default function WaitList() {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12">
      <div className="text-center">
        <p className="font-medium sm:font-semibold text-xl mb-3">
          InstaOja is currently under development. Be the first to know when we
          launch by joining our waitlist
        </p>
        <p className="sm:font-medium sm:text-lg">
          Enter your email to join today!
        </p>
      </div>
      <WaitListForm />
    </div>
  );
}
