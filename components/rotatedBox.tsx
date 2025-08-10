import * as motion from "motion/react-client";

export default function Rotate() {
  return (
    <motion.div
      style={box}
      initial={{ scale: 1 }}
      //   animate={{ rotate: 360, scale: 2, transition: { duration: 1 } }}
      //   transition={{ duration: 1 }}
      whileHover={{
        scale: 2,
        rotateY: 10,
        radius: 100,
      }}
      whileTap={{
        scale: 2,
        // rotate: -10,
        rotateZ: 10,
        opacity: "60%",
      }}
    />
  );
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};
