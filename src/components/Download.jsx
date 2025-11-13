export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#4FC3F7] via-[#A6E3E9] to-[#B9FBC0] text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-teal-950">
          Download CellPe Today
        </h2>
        <p className="mb-8 text-lg text-black">
          Experience fast, secure, and rewarding ments. Join millions of users already using CellPe.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 rounded-full bg-teal-950 text-white font-bold shadow-lg hover:bg-teal-800 transition duration-300">
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
