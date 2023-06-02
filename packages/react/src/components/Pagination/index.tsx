import { PaginationContainer, PageButton, KeyboardButton } from './styles'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export interface PaginationProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  totalPages: number
}

export const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  const pagination = Array.from(Array(totalPages), (_, index) => index + 1)

  return (
    <PaginationContainer>
      <KeyboardButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        <MdKeyboardArrowLeft />
      </KeyboardButton>

      {pagination.map((item) => (
        <PageButton
          key={item}
          onClick={() => setPage(item)}
          className={classNames({
            active: page === item,
          })}
        >
          {item}
        </PageButton>
      ))}

      <KeyboardButton
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        <MdKeyboardArrowRight />
      </KeyboardButton>
    </PaginationContainer>
  )
}

Pagination.displayName = 'Pagination'
