import NavigationButton from "./NavigationButton";



function Navbar() {
  return (
    <>
      <div className=" p-4 flex flex-row gap-6 items-center">
        <NavigationButton>GDG Links</NavigationButton>

        <NavigationButton>Other People</NavigationButton>

        <NavigationButton>Events</NavigationButton>
      </div>
    </>
  );
}

export default Navbar;
