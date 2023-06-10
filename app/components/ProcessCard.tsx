export default function ProcessCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  const isEvenNumber = number % 2 === 0;

  return (
    <div
      className={`relative mb-8 h-64 w-72 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 p-6 text-white shadow-lg ${
        isEvenNumber ? "md:ml-64" : "md:mr-64"
      }`}
    >
      <div className="mb-4 flex items-center justify-start">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white px-4 text-xl font-bold text-pink-500">
          {number}
        </div>
        <h3 className="ml-4 text-lg font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}
