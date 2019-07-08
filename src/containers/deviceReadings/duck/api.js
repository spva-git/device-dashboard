
import { apiUtil } from "../../../modules/utils";
import { deviceReadingsMapper } from "./mappers";

const endpoints = {
  DEVICE_READINGS: "http://localhost:8888/devices"
};

export const fecthDeviceReadings = () => {
  const options = {};
  const payload = {};
  return apiUtil.get(endpoints.DEVICE_READINGS, payload, options);
};
