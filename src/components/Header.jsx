export default function Header() {
  return (
    <header className="flex justify-between items-center py-9">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Shahzaib Khan</h1>
        <p className="text-md md:text-lg text-[#e4fde1]">
          Full Stack Developer | React Enthusiast
        </p>
      </div>
      <img
        src="https://randomuser.me/api/portraits/men/4.jpg"
        alt="Profile"
        className="h-17 w-17 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
      />
    </header>
  );
}
