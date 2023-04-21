'use strict';

module.exports = {
  types: [
    {
      value: ':rocket: release',
      name: '🚀  release:  发布版本/发布标签',
    },
    {
      value: ':construction: WIP',
      name: '🚧  WIP:      正在进行的工作',
    },
    {
      value: ':sparkles: feat',
      name: '✨  feat:     新的特性',
    },
    {
      value: ':bug: fix',
      name: '🐛  fix:      修复Bug',
    },
    {
      value: ':wrench: CI',
      name: '🔧  CI:       目录结构变更(CI, Building, Tool...)',
    },

    {
      value: ':pencil: docs',
      name: '📝  docs:     仅文档更改',
    },
    {
      value: ':twisted_rightwards_arrows: merge',
      name: '🔀  merge:    合并分支',
    },
    {
      value: ':rewind: revert',
      name: '⏪  revert:   版本回滚',
    },
    {
      value: ':white_check_mark: test',
      name: '✅  test:     添加缺失的测试或更正现有测试',
    },
    {
      value: ':chart_with_upwards_trend: perf',
      name: '📈  perf:     提高性能的代码更改',
    },
    {
      value: ':thought_balloon: chore',
      name: '🗯   chore:    不修改src或测试文件的更改。例如更新构建任务、包管理器',
    },
    {
      value: ':lipstick: ui',
      name: '💄  UI:       更新UI和样式文件。',
    },
    {
      value: ':art: style',
      name: '🎨  style:    不影响代码含义的更改（空白、格式、缺少分号等）',
    },
    {
      value: ':package: dep_up',
      name: '📦  dep_up:   更新已编译的文件或包。',
    },

    {
      value: ':hammer: refactor',
      name: '🔨  refactor: 既不修复错误也不添加功能的代码更改',
    },
    {
      value: ':truck: mv',
      name: '🚚  mv:       移动或重命名文件。',
    },
  ],

  scopes: [],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: '表示该变更的范围:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明? yes/no',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
};
