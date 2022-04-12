module.exports = {
  types: [
    {
      type: 'release',
      section: '🚀  release:  发布版本/发布标签',
    },
    {
      type: 'WIP',
      section: '💪  WIP:      正在进行的工作',
    },
    {
      type: 'feat',
      section: '✨  feat:     新的特性',
    },
    {
      type: 'fix',
      section: '🐛  fix:      修复Bug',
    },
    {
      type: 'CI',
      section: '🔧  CI:       目录结构变更(CI, Buiding, Tool...)',
    },

    {
      type: 'docs',
      section: '📝  docs:     仅文档更改',
    },
    {
      type: 'merge',
      section: '🔀  merge:    合并分支',
    },
    {
      type: 'revert',
      section: '⏪  revert:   版本回滚',
    },
    { type: 'test', section: '✅ Tests | 测试' },
    {
      type: 'perf',
      section: '📈  perf:     提高性能的代码更改',
    },
    {
      type: 'chore',
      section:
        '🗯   chore:    不修改src或测试文件的更改。例如更新构建任务、包管理器',
    },
    {
      type: 'ui',
      section: '💄  UI:       更新UI和样式文件。',
    },
    {
      type: 'style',
      section: '🎨  style:    不影响代码含义的更改（空白、格式、缺少分号等）',
    },
    {
      type: 'dep_up',
      section: '📦  dep_up:   更新已编译的文件或包。',
    },

    {
      type: 'refactor',
      section: '🔨  refactor: 既不修复错误也不添加功能的代码更改',
    },
    {
      type: 'mv',
      section: '🚚  mv:       移动或重命名文件。',
    },
  ],
};
