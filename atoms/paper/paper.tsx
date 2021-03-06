import * as React from 'react'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import styled from 'styled-components'

export const WrappedPaper = styled(
  React.forwardRef((props: PaperProps, ref: React.Ref<any>) => {
    return <Paper {...props} ref={ref} />
  })
)<PaperProps>`` as React.ComponentType<PaperProps>
