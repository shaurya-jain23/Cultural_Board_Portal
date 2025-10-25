
function EnhancedRoundedDiv({
  children,
  index = 0,
  bg = "#F8FAFC",
  isFirst = false,
}) {
  const marginTop = isFirst ? "-150px" : "-100px";

  return (
    <div
      style={{
        borderRadius: "60px 60px 0 0",
        marginTop: marginTop,
        backgroundColor: bg,
      }}
      className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-20 sm:pb-25 md:pb-30 lg:pb-40"
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
export default EnhancedRoundedDiv