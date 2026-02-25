function NavigationButton({ children }) {
  return (
    <>
      <div className="text-sm font-semibold bg-white p-2 px-4 rounded-full hover:scale-105 transition-all duration-200">
        {children}
      </div>
    </>
  );
}

export default NavigationButton;
