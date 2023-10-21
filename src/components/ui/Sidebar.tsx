import Logo from "./Logo";

function Sidebar() {
  return (
    <aside className="z-40 hidden h-screen px-10 py-6 sm:block sm:w-72">
      <Logo width={120} className="mx-auto my-10" />
      <div></div>
    </aside>
  );
}

export default Sidebar;
