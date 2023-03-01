export default [
  {
    name: 'text',
    text: '标题',
  },
  {
    name: 'groupValue',
    text: 'groupValue',
  },
  {
    type: 'groupList',
    name: 'group',
    items: [
      {
        type: 'row',
        items: [
          {
            name: 'value',
            text: '绑定的值',
          },
          {
            name: 'radioName',
            text: '选项名称',
          },
        ],
      },
    ],
  },
];
