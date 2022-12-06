import Head from 'next/head'

import Stats from '../components/Stats/Stats'
import Blocks from '../components/Table/Blocks'
import Transactions from '../components/Table/Transactions'
import { blocks, transactions } from '../data/fake-data'

export default function Home() {
  return (
    <div className='container mx-auto p-4 flex flex-col flex-1 gap-8'>
      <Head>
        <title>Babylon Axelar</title>
        <meta name='description' content='@gbarkhatov' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl uppercase'>Network Status</h3>
        <div className='grid grid-cols-6 gap-4'>
          <Stats value='5,080,860' description='latest block height' />
          <Stats value='6.15 sec' description='average block time' />
          <Stats value='55' description='active validators' />
          <Stats value='529M / 1B' description='staked tokens' />
          <Stats value='19.41%' description='staking APR' />
          <Stats value='10.75%' description='inflation rate' />
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-4'>
        <h3 className='text-2xl uppercase'>Cross-chain Activities</h3>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            <Stats value='295,592' description='total transactions' />
            <Stats value='291,651' description='asset transfers' />
            <Stats
              value='$1,594,124,161'
              description='total transfer token volume'
            />
            <Stats value='29' description='# of connected chains' />
            <Stats value='96' description='# of cross-chain contracts' />
          </div>
          <div className='flex justify-center items-center flex-1'>
            <h3 className='text-4xl'>📈 Animated graph goes here 📉</h3>
          </div>
        </div>
      </div>
      <div className='flex gap-4 justify-between'>
        <div className='flex-1 flex flex-col gap-4'>
          <h3 className='text-2xl uppercase'>Latest Blocks</h3>
          <Blocks data={blocks} />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h3 className='text-2xl uppercase'>Latest Transactions</h3>
          <Transactions data={transactions} />
        </div>
      </div>
    </div>
  )
}
