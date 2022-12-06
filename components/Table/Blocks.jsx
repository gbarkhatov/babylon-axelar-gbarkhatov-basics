import Image from 'next/image'

const Blocks = ({ data }) => (
  <div className='overflow-x-auto'>
    <table className='table w-full'>
      <thead>
        <tr>
          <th>Height</th>
          <th>Proposer</th>
          <th>Txs</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, height, txs, time, proposer }) => (
          <tr key={id}>
            <td>{height}</td>
            <td>
              <div className='flex gap-2'>
                <div>
                  <Image
                    src={proposer.avatar}
                    alt={proposer.name}
                    width='24'
                    height='24'
                    className='rounded-full mt-1'
                  />
                </div>
                <div className='flex flex-col'>
                  <p>{proposer.name}</p>
                  <p className='text-gray-400'>{proposer.address}</p>
                </div>
              </div>
            </td>
            <td>{txs}</td>
            <td>{time}s ago</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Blocks
