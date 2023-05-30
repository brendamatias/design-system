import { useState } from 'react'
import { PaginationContainer, PageButton, KeyboardButton } from './styles'
import classNames from 'classnames'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export interface PaginationProps {
  pages: number
  limit: number
  getData: (offset?: number, limit?: number) => void
}

export const Pagination = ({ pages, limit, getData }: PaginationProps) => {
  const [page, setPage] = useState(1)

  const pagination = Array.from(Array(pages), (_, index) => index + 1)

  const handlePage = (newPage: number) => {
    setPage(newPage)
    getData(page, limit)
  }

  return (
    <PaginationContainer>
      <KeyboardButton
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        <MdKeyboardArrowLeft />
      </KeyboardButton>

      {pagination.map((item) => (
        <PageButton
          key={item}
          onClick={() => handlePage(item)}
          className={classNames({
            active: page === item,
          })}
        >
          {item}
        </PageButton>
      ))}

      <KeyboardButton
        onClick={() => handlePage(page + 1)}
        disabled={page === pages}
      >
        <MdKeyboardArrowRight />
      </KeyboardButton>
    </PaginationContainer>
  )
}

Pagination.displayName = 'Pagination'
