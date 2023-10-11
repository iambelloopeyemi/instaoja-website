import WaitListForm from "../WaitListForm";

export default function WaitList() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-1">
        <p className="font-bold text-xl">Join the waitlist</p>
        <p className="font-medium text-lg">Enter your email to join today!</p>
      </div>
      <WaitListForm />
    </div>
  );
}
