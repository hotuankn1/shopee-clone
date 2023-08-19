import { RowProps } from 'antd'
import React from 'react'

interface Props {
    justifyContent: string
    alignItems: string
    children: any
    gutter?: number[]
}
export default function Row({ justifyContent, alignItems, children, gutter }: Props) {
    return (
        <div style={{ display: 'flex', justifyContent: justifyContent, alignItems: alignItems, rowGap: gutter?.[0] || 0, columnGap: gutter?.[1] || 0 }}>
            {children}
        </div>
    )
}
