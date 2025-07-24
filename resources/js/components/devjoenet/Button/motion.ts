// Shared motion options for buttons
export const buttonMotion = {
  initial: { scale: 1 },
  tap: { scale: 0.95 },
  hover: { scale: 1.02, boxShadow: "0 2px 8px 0 var(--color-primary, #6366f1)" },
  transition: { type: "spring", stiffness: 300 },
};
