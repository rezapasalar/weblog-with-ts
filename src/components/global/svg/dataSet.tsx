import { FC, memo } from 'react'

interface Props {
    onClick?: any,
    viewType?: boolean,
    className?: string
}

const DataSet: FC<Props> = ({onClick = null, viewType = false, className: classes = ''}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`${!viewType ? 'text-gray-500 dark:text-gray-100' : 'text-gray-300 dark:text-gray-100/25'} cursor-pointer duration-300 ${classes}`} fill="currentColor" viewBox="0 0 512 512"><path d="M204,240H68a36,36,0,0,1-36-36V68A36,36,0,0,1,68,32H204a36,36,0,0,1,36,36V204A36,36,0,0,1,204,240Z"/><path d="M444,240H308a36,36,0,0,1-36-36V68a36,36,0,0,1,36-36H444a36,36,0,0,1,36,36V204A36,36,0,0,1,444,240Z"/><path d="M204,480H68a36,36,0,0,1-36-36V308a36,36,0,0,1,36-36H204a36,36,0,0,1,36,36V444A36,36,0,0,1,204,480Z"/><path d="M444,480H308a36,36,0,0,1-36-36V308a36,36,0,0,1,36-36H444a36,36,0,0,1,36,36V444A36,36,0,0,1,444,480Z"/></svg>
}

export default memo(DataSet)