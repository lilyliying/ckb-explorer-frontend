import React from 'react'
import Pagination from '../../components/Pagination'
import OverviewCard, { OverviewItemData } from '../../components/Card/OverviewCard'
import TransactionItem from '../../components/TransactionItem/index'
import { useAppState } from '../../contexts/providers/index'
import i18n from '../../utils/i18n'
import { localeNumberString } from '../../utils/number'
import { shannonToCkb } from '../../utils/util'
import { AddressTransactionsPagination, AddressTransactionsPanel } from './styled'
import browserHistory from '../../routes/history'
import DecimalCapacity from '../../components/DecimalCapacity'
import TitleCard from '../../components/Card/TitleCard'

const getAddressInfo = (addressState: State.AddressState) => {
  const { address } = addressState
  return [
    {
      title: i18n.t('address.balance'),
      content: <DecimalCapacity value={localeNumberString(shannonToCkb(address.balance))} />,
    },
    {
      title: i18n.t('address.dao_deposit'),
      content: <DecimalCapacity value={localeNumberString(shannonToCkb(address.daoDeposit))} />,
    },
    {
      title: i18n.t('address.compensation'),
      content: <DecimalCapacity value={localeNumberString(shannonToCkb(address.interest))} />,
    },
  ] as OverviewItemData[]
}

export const AddressAssetComp = () => {
  const { addressState } = useAppState()
  return <OverviewCard items={getAddressInfo(addressState)}></OverviewCard>
}

export const AddressTransactions = ({
  currentPage,
  pageSize,
  address,
}: {
  currentPage: number
  pageSize: number
  address: string
}) => {
  const {
    addressState: {
      transactions = [],
      total,
      address: { addressHash, transactionsCount },
    },
    app: { tipBlockNumber },
  } = useAppState()

  const totalPages = Math.ceil(total / pageSize)

  const onChange = (page: number) => {
    browserHistory.replace(`/address/${address}?page=${page}&size=${pageSize}`)
  }

  return (
    <>
      <AddressTransactionsPanel>
        {transactions.map((transaction: State.Transaction, index: number) => {
          return (
            transaction && (
              <TransactionItem
                address={addressHash}
                transaction={transaction}
                confirmation={tipBlockNumber - transaction.blockNumber + 1}
                key={transaction.transactionHash}
                titleCard={
                  index === 0 ? (
                    <TitleCard
                      title={`${i18n.t('transaction.transactions')}(${localeNumberString(transactionsCount)})`}
                    />
                  ) : null
                }
                isLastItem={index === transactions.length - 1}
              />
            )
          )
        })}
      </AddressTransactionsPanel>
      {totalPages > 1 && (
        <AddressTransactionsPagination>
          <Pagination currentPage={currentPage} totalPages={totalPages} onChange={onChange} />
        </AddressTransactionsPagination>
      )}
    </>
  )
}

export default {
  AddressAssetComp,
  AddressTransactions,
}
