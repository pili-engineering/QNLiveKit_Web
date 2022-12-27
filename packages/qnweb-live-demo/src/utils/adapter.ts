/**
 * 房间状态适配器
 * @param data
 */
export const roomStatusAdapter = (
  data: { liveStatus: number, anchorStatus: number }
) => {
  if (data.liveStatus === 1 && data.anchorStatus === 1) {
    return 'live';
  }
  if (data.liveStatus === 1 && data.anchorStatus === 0) {
    return 'pause';
  }
  if (data.liveStatus === 0) {
    return 'trailer';
  }
};
