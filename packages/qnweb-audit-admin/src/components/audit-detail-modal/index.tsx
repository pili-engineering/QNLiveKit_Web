import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Checkbox,
  Modal,
  ModalProps,
  Pagination,
  Radio,
  RadioChangeEvent,
  Space,
  Spin,
  AlertProps
} from 'antd';
import { usePagination } from 'ahooks';
import 'xgplayer';
// @ts-ignore
import FlvPlayer from 'xgplayer-flv';
import classNames from 'classnames';

import { DataEmpty } from '@/components';
import { AuditImageCard } from './audit-image-card';
import { getTags } from './utils';

import './index.scss';

const prefixCls = 'audit-detail-modal';

const tabOpts = [
  { label: '待审核', value: 'todo' },
  { label: '已审核', value: 'done' },
  { label: '截图记录', value: 'screenshotRecord' },
  { label: '直播预览', value: 'livePreview' },
] as const;

type TabOptValue = typeof tabOpts[number]['value'];

interface listRequestServiceResult {
  total: number;
  list: {
    id: string,
    /**
     * 图片url
     */
    url: string,
    /**
     * 鉴黄，建议："review","block",'"pass"
     */
    pulp: string,
    /**
     * 暴恐，建议："review","block",'"pass"
     */
    terror: string,
    /**
     * 敏感人物，建议："review","block",'"pass"
     */
    politician: string,
    /**
     * 广告，建议："review","block",'"pass"
     */
    ads: string,
    /**
     * 审核结果 1 通过；2 违规
     */
    review_answer: number,
    /**
     * 图片创建时间
     */
    createdAt: number
  }[];
}

type ListRequestService = (params: {
  current: number;
  pageSize: number;
  tab: Exclude<TabOptValue, 'livePreview'>;
}) => Promise<listRequestServiceResult>;

interface Callbacks {
  onComplete: () => void;
}

export type AuditDetailModalProps = ModalProps & {
  /**
   * 直播间当前状态
   * pending: 准备中,living: 直播中, stepOut: 暂时离开, finished: 已结束, forceClosed: 已强制关闭, unknown: 未知
   */
  status?: 'pending' | 'living' | 'stepOut' | 'finished' | 'forceClosed' | 'unknown';
  livePreviewProps?: {
    url?: string;
    duration?: string;
  },
  /**
   * alert组件props
   */
  alertProps?: AlertProps | null;
  /**
   * 违规次数
   */
  illegalCount?: number;
  /**
   * 待审核/已审核请求Service
   * @param params
   */
  listRequestService: ListRequestService;
  /**
   * 点击结束直播按钮
   */
  onEndLiveClick?: (callbacks?: Callbacks) => void;
  /**
   * 点击通过按钮
   */
  onPassClick?: (values: listRequestServiceResultListItem[], callback?: Callbacks) => void;
  /**
   * 点击违规按钮
   */
  onViolationClick?: (values: listRequestServiceResultListItem[], callback?: Callbacks) => void;
};

type listRequestServiceResultListItem = listRequestServiceResult['list'][number];

export const AuditDetailModal: React.FC<AuditDetailModalProps> = (props) => {
  const {
    className,
    visible, status, alertProps, illegalCount, listRequestService, livePreviewProps,
    onEndLiveClick: handleEndLiveClick, onPassClick: handlePassClick, onViolationClick: handleViolationClick,
    ...restProps
  } = props;

  const {
    loading,
    data,
    pagination,
    runAsync,
    refresh
  } = usePagination<listRequestServiceResult, Parameters<ListRequestService>>(listRequestService, {
    manual: true
  });
  const [checkedCards, setCheckedCards] = useState<listRequestServiceResultListItem[]>([]);
  const [tab, setTab] = useState<TabOptValue>('todo');

  const listTab: TabOptValue[] = ['todo', 'done', 'screenshotRecord'];

  /**
   * 弹窗显示时，请求数据
   */
  useEffect(() => {
    if (visible) {
      runAsync({
        current: 1,
        pageSize: 10,
        tab: 'todo'
      }).then(() => {
        setTab('todo');
      });
    }
  }, [visible]);

  /**
   * tab/页码切换，选择置空
   */
  useEffect(() => {
    setCheckedCards([]);
  }, [pagination.current, tab]);

  /**
   * 直播预览
   */
  useEffect(() => {
    if (tab !== 'livePreview') return;
    if (status !== 'living') return;
    const player = new FlvPlayer({
      id: 'player',
      url: livePreviewProps?.url || '',
      isLive: true,
      width: 560,
      height: 376
    });
    return () => {
      player.destroy();
    };
  }, [tab]);

  /**
   * tab切换
   * @param e
   */
  const onTabChange = (e: RadioChangeEvent) => {
    const tab = e.target.value;
    if (listTab.includes(tab)) {
      runAsync({
        current: 1,
        pageSize: 10,
        tab
      }).then(() => {
        setTab(tab);
      });
    } else {
      setTab(tab);
    }
  };

  const isForceClosed = status === 'forceClosed';
  const isClosed = ['finished', 'forceClosed'].includes(status || '');
  const checkedAll = !!(data?.list.length && checkedCards.length >= data?.list.length);

  /**
   * 结束直播
   */
  const onEndLiveClick = () => {
    if (!handleEndLiveClick) return;
    handleEndLiveClick({
      onComplete: () => {
        refresh();
      }
    });
  };
  /**
   * 通过
   */
  const onPassClick = () => {
    if (!handlePassClick) return;
    handlePassClick(checkedCards, {
      onComplete: () => {
        refresh();
        setCheckedCards([]);
      }
    });
  };
  /**
   * 违规
   */
  const onViolationClick = () => {
    if (!handleViolationClick) return;
    handleViolationClick(checkedCards, {
      onComplete: () => {
        refresh();
        setCheckedCards([]);
      }
    });
  };

  const isPlayerVisible = livePreviewProps?.url && status === 'living';

  return <Modal
    className={classNames(prefixCls, className)}
    visible={visible}
    width={792}
    footer={null}
    {...restProps}
  >
    <Spin spinning={loading}>
      {
        alertProps && <Alert
          style={{ marginBottom: 24 }}
          type="error"
          showIcon={true}
          {...alertProps}
        />
      }
      <Space direction="vertical" size={32} style={{ width: '100%' }}>
        <div className={`${prefixCls}-header`}>
          <Radio.Group
            value={tab}
            onChange={onTabChange}
          >
            {
              tabOpts.map(({ label, value }) => (
                <Radio.Button key={value} value={value}>{label}</Radio.Button>
              ))
            }
          </Radio.Group>
          {
            isClosed ? null : <Button
              type="primary"
              danger={true}
              onClick={onEndLiveClick}
            >结束直播</Button>
          }
        </div>

        {
          listTab.includes(tab) ?
            data?.list.length ? <Space wrap={true} size={[36, 24]}>
              {
                data?.list.map(item => {
                  return <AuditImageCard
                    key={item.id}
                    createdAt={tab === 'screenshotRecord' ? item.createdAt : null}
                    checkboxVisible={tab === 'todo'}
                    checked={checkedCards.map(item => item.id).includes(item.id)}
                    url={item.url}
                    tags={getTags(item)}
                    cover={tab === 'done' && item.review_answer === 2 ? '违规' : null}
                    onChange={(e) => {
                      const { checked } = e.target;
                      setCheckedCards(prev => {
                        return checked ? [...prev, item] : prev.filter(i => i.id !== item.id);
                      });
                    }}
                  />;
                })
              }
            </Space> : <DataEmpty/>
            : null
        }

        {
          tab === 'livePreview' ? <div className={`${prefixCls}-live-preview`}>
            <div style={{ display: isPlayerVisible ? 'block' : 'none' }}>
              <div id="player" className={`${prefixCls}-live-preview-player`}/>
              <div style={{ textAlign: 'center', paddingTop: 24 }}>直播总时长：{livePreviewProps?.duration}</div>
            </div>
            <div
              style={{
                width: 560, height: 376,
                border: '1px solid #E5E5E5',
                margin: 'auto',
                display: isPlayerVisible ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
              <div>当前无直播</div>
              <div>建议查看截图记录</div>
            </div>
          </div> : null
        }

        <div className={classNames(`${prefixCls}-footer`, {
          [`${prefixCls}-footer-flex-end`]: tab === 'screenshotRecord'
        })}>
          {tab === 'done' ? <span>违规次数：{illegalCount}</span> : null}
          {
            tab === 'todo' ? <Space>
              <Checkbox
                checked={checkedAll}
                onChange={event => {
                  const { checked } = event.target;
                  setCheckedCards(checked ? data?.list || [] : []);
                }}
              >全选</Checkbox>
              <Space size={20}>
                <Button onClick={onPassClick} disabled={isForceClosed}>通过</Button>
                <Button onClick={onViolationClick} disabled={isForceClosed}>违规</Button>
              </Space>
            </Space> : null
          }
          {listTab.includes(tab) ? <Pagination simple={true} {...pagination}/> : null}
        </div>
      </Space>
    </Spin>
  </Modal>;
};
