/**
 * 判断当前在哪个platform
 */
export const UA = (() => {
  const ua = navigator.userAgent;
  const isAndroid = /Android/.test(ua);
  const isFireFox = /Firefox/.test(ua);
  const isPad =
    /iPad|PlayBook/.test(ua) ||
    (isAndroid && !/Mobile/.test(ua)) ||
    (isFireFox && /Tablet/.test(ua));
  const isiPad =
    /iPad/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isiPhone = /iPhone/.test(ua) && !isPad;
  const isPC = !isiPhone && !isAndroid && !isPad && !isiPad;
  return {
    isPad,
    isiPhone,
    isAndroid,
    isPC,
    isiPad,
  };
})();

/**
 * url中获取参数
 * @param key
 */
export const getUrlQuery = (key: string) => {
  return new URLSearchParams(
    window.location.search
  ).get(key);
};
