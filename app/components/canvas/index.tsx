type Props = {
  children: React.ReactNode;
};

export default function Canvas({ children }: Props) {
  return (
    <div className="w-screen md:ml-16">
      <div className="container mx-auto mt-16 md:mt-0">{children}</div>
    </div>
  );
}
