export default function Header() {
  return (
    <header className="flex justify-between items-center py-9">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Shahzaib Khan</h1>
        <p className="text-md md:text-lg text-[#e4fde1]">
          Full Stack Developer | React Enthusiast
        </p>
      </div>
      <img
        src="/images/shahzaib-profile.jpg"
        alt="Profile"
        className="h-15 w-15 md:w-17 md:h-17 rounded-full object-cover border-4 border-white shadow-lg"
      />
    </header>
  );
}
