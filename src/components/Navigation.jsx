export default function Navigation({ tabs, activeTab, setActiveTab }) {
  return (
    <nav className="flex justify-center gap-4 md:gap-6  flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-full transition duration-300 cursor-pointer ${
            activeTab === tab.id
              ? "bg-[#ddcecd] text-[#26081c]"
              : "bg-white/10 hover:bg-[#ddcecd] hover:text-[#26081c]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
