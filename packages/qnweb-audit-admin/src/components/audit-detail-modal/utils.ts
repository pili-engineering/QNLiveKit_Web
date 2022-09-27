import { AuditDetailModalProps } from '.';
import { AuditImageCardProps } from './audit-image-card';

type TagItem = Awaited<ReturnType<AuditDetailModalProps['listRequestService']>>['list'][number];

export const getTags = (item: TagItem) => {
  const tags: AuditImageCardProps['tags'] = [];
  if (item.pulp === 'review') {
    tags.push({
      label: '涉黄',
      value: 'review'
    });
  }
  if (item.pulp === 'block') {
    tags.push({
      label: '涉黄',
      value: 'block'
    });
  }
  if (item.pulp === 'pass') {
    tags.push({
      label: '涉黄',
      value: 'pass'
    });
  }
  if (item.terror === 'review') {
    tags.push({
      label: '暴恐',
      value: 'review'
    });
  }
  if (item.terror === 'block') {
    tags.push({
      label: '暴恐',
      value: 'block'
    });
  }
  if (item.pulp === 'pass') {
    tags.push({
      label: '暴恐',
      value: 'pass'
    });
  }
  if (item.politician === 'review') {
    tags.push({
      label: '敏感人物',
      value: 'review'
    });
  }
  if (item.politician === 'block') {
    tags.push({
      label: '敏感人物',
      value: 'block'
    });
  }
  if (item.politician === 'pass') {
    tags.push({
      label: '敏感人物',
      value: 'pass'
    });
  }
  if (item.ads === 'review') {
    tags.push({
      label: '广告',
      value: 'review'
    });
  }
  if (item.ads === 'block') {
    tags.push({
      label: '广告',
      value: 'block'
    });
  }
  if (item.ads === 'pass') {
    tags.push({
      label: '广告',
      value: 'pass'
    });
  }
  return tags.filter(
    (item) => item.value !== 'pass'
  );
};
