export const ClipPath = () => {
  return (
    <>
      {/* <div className="bg-blue-500 w-[200px] h-[200px] [clip-path:polygon(100px_0px,200px_100px,100px_200px,0px_100px)]" /> */}
      <div className="bg-blue-500 w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]" />
      <div className="bg-blue-500 w-[200px] h-[200px] [clip-path:inset(20px_10px_0px_50px_round_0px_20px)]" />
      <div className="clip-top-corners" />
    </>
  );
};
