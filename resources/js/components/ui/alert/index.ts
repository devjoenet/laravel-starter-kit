import { InformationCircleIcon, CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from "@heroicons/vue/24/solid";

export { default as Alert } from "./Alert.vue";
export { default as AlertTitle } from "./AlertTitle.vue";
export { default as AlertDescription } from "./AlertDescription.vue";

export const Icon = function (variant: string = "info") {
  return {
    info: InformationCircleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
  }[variant];
};
