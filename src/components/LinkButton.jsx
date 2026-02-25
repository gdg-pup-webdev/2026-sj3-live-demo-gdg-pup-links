function LinkButton({ children }) {
  return (
    <>
      <div className="  bg-white  w-full p-4 text-lg font-semibold rounded-full flex items-center gap-4 shadow-md">
        {children}
      </div>
    </>
  );
}

export default LinkButton;
