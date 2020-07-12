import React from 'react'
import { storiesOf } from '@storybook/react'

import { Memo, UseCallback, UseMemo } from '../src/Performance'

storiesOf('Performance Demo', module)
  .add('React.memo', () => <Memo />)
  .add('useCallback', () => <UseCallback />)
  .add('useMemo', () => <UseMemo />)
