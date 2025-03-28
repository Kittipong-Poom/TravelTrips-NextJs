import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import { useCountUp } from "use-count-up";
import Image from "next/image";
export default function LinearProgressCountUp() {
  const { value } = useCountUp({
    isCounting: true,
    duration: 3,
    easing: "linear",
    start: 0,
    end: 100,
    onComplete: () => ({
      shouldRepeat: true,
      delay: 2,
    }),
  });

  return (
    <div className="w-[80%] h-[100vh] mx-auto flex items-center justify-center relative">
      <Image
        src="/gif/anime.gif"
        width={300}
        height={300}
        alt="Picture of the author"
        className="absolute top-[60%]"
        unoptimized
      />
      {/* ทำให้ <span> อยู่เหนือ <LinearProgress> */}
      <LinearProgress
        determinate
        variant="outlined"
        color="neutral"
        size="sm"
        thickness={24}
        value={Number(value!)}
        sx={{
          "--LinearProgress-radius": "20px",
          "--LinearProgress-thickness": "24px",
        }}
      >
        <Typography
          level="body-xs"
          textColor="common.black"
          sx={{ fontWeight: "xl", mixBlendMode: "difference" }}
        >
          LOADING… {`${Math.round(Number(value!))}%`}
        </Typography>
      </LinearProgress>
    </div>
  );
}
