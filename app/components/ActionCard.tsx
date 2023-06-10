export default function ActionCard({
  svg,
  title,
}: {
  svg: React.ReactNode;
  title: string;
}) {
  return (
    <div className="border-gradient-to-r flex w-full transform flex-col items-center space-y-4 rounded-lg border-2 bg-transparent from-pink-500 to-yellow-500 p-6 text-white shadow-lg transition-all duration-500 hover:scale-105 sm:w-64">
      {svg}
      <p>{title}</p>
    </div>
  );
}
