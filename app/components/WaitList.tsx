import WaitListForm from "./WaitListForm";

export default function WaitList() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="text-center">
        <p className="font-bold text-xl mb-3">
          InstaOja is currently under development. Be the first to know when we
          launch by joining our waitlist
        </p>
        <p className="font-medium text-lg">Enter your email to join today!</p>
      </div>
      <WaitListForm />
    </div>
  );
}
