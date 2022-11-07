import { Color, Solver } from "./colorObj";

export const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

// Simple little cache when being called lots of times on the same render:
const cached = {};
export const hexToFilter = (
  hex,
  { rerunLimit = 5, currentAttemptIndex = 0 } = {}
) => {
  if (hex in cached) {
    return cached[hex];
  }

  const rgb = hexToRgb(hex);
  if (!rgb || rgb.length !== 3) {
    return "none";
  }
  const color = new Color(rgb[0], rgb[1], rgb[2]);
  const solver = new Solver(color);
  const result = solver.solve();

  // let lossMsg;
  let accepted = false;
  if (result.loss < 1) {
    // lossMsg = "This is a perfect result.";
    // Cache when its a great result:
    cached[hex] = result.filter;
    accepted = true;
  } else if (result.loss < 5) {
    // lossMsg = "The is close enough.";
    accepted = true; // Don't cache but still accept a slightly off result:
  } else if (result.loss < 15) {
    // lossMsg = "The color is somewhat off. Consider running it again.";
  } else {
    // lossMsg = "The color is extremely off. Run it again!";
  }
  // console.log(lossMsg, hex);

  // Rerun the bad ones up to x times:
  if (!accepted && currentAttemptIndex < rerunLimit) {
    // console.log("RERUNNING!");
    return hexToFilter(hex, {
      rerunLimit,
      currentAttemptIndex: currentAttemptIndex + 1,
    });
  }

  return result.filter;
};
